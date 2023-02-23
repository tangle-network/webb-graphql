#!/usr/bin/env bash

set -e # Exit on error

# Create the standalone-tangle directory if it doesn't exist
if [ ! -d standalone-tangle ]; then
    mkdir standalone-tangle
fi

cd standalone-tangle

# Clone the tangle repository if it hasn't been cloned yet
if [ ! -d tangle ]; then
    git clone git@github.com:webb-tools/tangle.git
fi

cd tangle

# Compile the tangle-standalone binary
cargo b -rp tangle-standalone

CLEAN=${CLEAN:-false}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    key="$1"
    case $key in
        -c|--clean)
            CLEAN=true
            shift # past argument
            ;;
        *)    # unknown option
            shift # past argument
            ;;
    esac
done

# Go back to the standalone-tangle directory
popd

# Clean the tmp directory if specified
if [ "$CLEAN" = true ]; then
  echo "Cleaning tmp directory"
  rm -rf ./tmp
fi

# Go back to the project root
PROJECT_ROOT=$(git rev-parse --show-toplevel)
cd "$PROJECT_ROOT"

# Generate the standalone local chainspec
echo "** Generating Standalone local chainspec"
./target/release/tangle-standalone build-spec --chain standalone-local > ./chainspecs/standalone-local.json

# Insert keys for all nodes
echo "** Inserting keys **"
./scripts/insert-standalone-keys.sh

# Start the tangle-standalone nodes
echo "*** Start Webb DKG Standalone | Standalone Local Config ***"
# Node 1
./target/release/tangle-standalone --base-path=./tmp/standalone1 -lerror --chain ./chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30304 \
  --ws-port 9944 &

# Node 2
./target/release/tangle-standalone --base-path=./tmp/standalone2 -lerror --chain ./chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30305 \
  --ws-port 9945 &

# Node 3
./target/release/tangle-standalone --base-path=./tmp/standalone3 -lerror --chain ./chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30306 \
  --ws-port 9946 
