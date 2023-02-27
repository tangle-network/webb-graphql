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

pushd .

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

# Move the tangle-standalone binary to /usr/local/bin and make it executable
echo "** Moving tangle-standalone binary to /usr/local/bin **"
sudo mv target/release/tangle-standalone /usr/local/bin
sudo chmod +x /usr/local/bin/tangle-standalone

# move out of the standalone-tangle/tangle directory
cd ..
cd .. 

# Insert keys for all nodes
echo "** Inserting keys **"
./scripts/insert-standalone-keys.sh

# Start the tangle-standalone nodes
echo "*** Start Webb DKG Standalone | Standalone Local Config ***"
# Node 1
tangle-standalone --base-path=./standalone-tangle/tangle/tmp/standalone1/chains/tangle-standalone-local -lerror --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30304 \
  --ws-port 9944 &

# Node 2
tangle-standalone --base-path=./standalone-tangle/tangle/tmp/standalone2/chains/tangle-standalone-local -lerror --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30305 \
  --ws-port 9945 &

# Node 3
tangle-standalone --base-path=./standalone-tangle/tangle/tmp/standalone3/chains/tangle-standalone-local -lerror --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30306 \
  --ws-port 9946 
