<div align="center">
<a href="https://www.webb.tools/">

![Webb Logo](../assets/webb_banner_light.png#gh-light-mode-only)
![Webb Logo](../assets/webb_banner_dark.png#gh-dark-mode-only)
</a>

</div>

# Webb SubQuery Scripts

This directory contains several scripts that can be used for quick development setup. The scripts automate the setup of a local standalone network and a SubQuery backend, assuming the user has Docker installed and running, and that the `chainID` and `endpoint` in the `project.yaml` have been updated to reflect the local standalone network setup here.

## start-standalone-local.sh

This bash script automates the setup of multiple standalone Tangle nodes using a compiled tangle-standalone binary. The script clones the tangle repository, builds the tangle-standalone binary, generates a standalone local chainspec, inserts keys for all nodes using the `insert-standalone-keys.sh` script, and starts three Tangle nodes with different ports and websockets. By default, the script keeps the previous data in the ./tmp directory, but you can use the -c or --clean option to clean the directory before starting the nodes.

After the script finishes, you should be able to connect to the Tangle nodes using the specified ports and websockets.

### Usage

**Make the script executable:**

```
chmod +x start-standalone-local.sh
```

**Run the script with the -c or --clean option to clean the ./tmp directory before starting the nodes:**

```
./start-standalone-local.sh -c
```

## insert-standalone-keys.sh

The script will insert keys for three Tangle nodes, each with its own base path (`./tmp/standalone1`, `./tmp/standalone2`, and `./tmp/standalone3`). The keys will be generated using the following SURIs:

```
gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb/0 (node 1)
gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb/1 (node 2)
gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb/2 (node 3)
```

For each node, the script inserts six keys of different types: `acco`, `aura`, `imon`, `gran`, `wdkg`, and `stah`. The keys are inserted using the `tangle-standalone` command with the appropriate parameters.

After the script finishes, you should see a message indicating that the keys have been inserted for each node.

### Usage

**Make the script executable:**

```
chmod +x insert-standalone-keys.sh
```

**Run the script::**

```
./insert-standalone-keys.sh
```

## start-subql.sh

The script will delete the node_modules directory, the dist/ directory, and the .data directory (if they exist). It will then purge the Docker system and install dependencies using Yarn. After that, it will generate project types and build the project. Finally, the script will start a Docker container to run your application. This script should be used after running the above `start-standalone-local.sh` script.

If any command fails during the build process, the script will exit immediately and print an error message. This helps to prevent unexpected behavior and data loss in case of errors.

### Usage

**Make the script executable:**

```
chmod +x start-subql.sh
```

**Run the script::**

```
./start-subql.sh
```
