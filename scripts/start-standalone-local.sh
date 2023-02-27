#!/usr/bin/env bash

set -e # Exit on error

# Define a function to clean up child processes
function cleanup {
    echo "Cleaning up child processes..."
    pkill -P $$
    exit 0
}

# Set up the cleanup function to be called on SIGINT (Ctrl-C)
trap cleanup SIGINT

# Create the standalone-tangle directory if it doesn't exist
if [ ! -d standalone-tangle ]; then
    mkdir -p standalone-tangle
fi

cd standalone-tangle

# Check if tangle-standalone is installed in /usr/local/bin
if [ -x "$(command -v tangle-standalone)" ]; then
    read -p "tangle-standalone is already installed. Do you want to recompile it? (y/n) " answer
    case ${answer:0:1} in
        y|Y )
            cd ..
            # Clone the tangle repository if it hasn't been cloned yet
            if [ ! -d tangle ]; then
                git clone --depth=1 git@github.com:webb-tools/tangle.git
            fi
            cd tangle
            cargo b -rp tangle-standalone
            cd ..
            cd standalone-tangle
            sudo mv -f tangle/target/release/tangle-standalone /usr/local/bin
            sudo chmod +x /usr/local/bin/tangle-standalone
            ;;
        * )
            ;;
    esac
else
     # Clone the tangle repository if it hasn't been cloned yet
    if [ ! -d tangle ]; then
        git clone --depth=1 git@github.com:webb-tools/tangle.git
    fi
    cd tangle
    # Compile the tangle-standalone binary
    cargo b -rp tangle-standalone
    cd ..
    sudo mv -f tangle/target/release/tangle-standalone /usr/local/bin
    sudo chmod +x /usr/local/bin/tangle-standalone
fi

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

cd tangle

# Clean the tmp directory if specified
if [ "$CLEAN" = true ]; then
  echo "Cleaning tmp directory \n"
  rm -rf ./tmp
fi

# Go back to the project root
PROJECT_ROOT=$(git rev-parse --show-toplevel)
cd "$PROJECT_ROOT"

# Check if chainspec exists in ./chainspecs/standalone-local.json, if not, generate chainspec
if [ ! -f ./chainspecs/standalone-local.json ]; then
    echo "** Generating Standalone local chainspec ** \n"
    tangle-standalone build-spec --chain standalone-local > ./chainspecs/standalone-local.json
fi
echo "** Standalone local chainspec already exists, skipping... ** \n"

# move out of the standalone-tangle/tangle directory
cd ..
cd .. 

# Check if keystore files exist, if not, insert keys
if [ ! "$(ls -A ./standalone-tangle/tangle/tmp/standalone1/chains/tangle-standalone-local/keystore)" ]; then
    # Insert keys for all nodes
    echo "** Inserting keys ** \n"
    ./scripts/insert-standalone-keys.sh
fi

# Start the tangle-standalone nodes
echo "*** Start Webb DKG Standalone | Standalone Local Config *** \n"
# Node 1
tangle-standalone --base-path=./standalone-tangle/tangle/tmp/standalone1 --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30304 \
  --ws-port 9944 &

# Node 2
tangle-standalone --base-path=./standalone-tangle/tangle/tmp/standalone2 --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30305 \
  --ws-port 9945 &

# Node 3
tangle-standalone --base-path=./standalone-tangle/tangle/tmp/standalone3 --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json --validator \
  --rpc-cors all --unsafe-rpc-external --unsafe-ws-external \
  --port 30306 \
  --ws-port 9946 