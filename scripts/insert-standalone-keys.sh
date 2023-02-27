#!/bin/bash

# Define a function to insert keys for a node
function insert_keys_for_node {
    node_num=$1
    base_path=$2

    echo "****************** NODE-$node_num KEY INSERTION ******************"

    tangle-standalone key insert --base-path "$base_path" \
    --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json \
    --scheme Sr25519 \
    --suri "gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb//$((node_num - 1))" \
    --key-type acco

    tangle-standalone key insert --base-path "$base_path" \
    --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json \
    --scheme Sr25519 \
    --suri "gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb//$((node_num - 1))//stash" \
    --key-type acco

    tangle-standalone key insert --base-path "$base_path" \
    --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json \
    --scheme Sr25519 \
    --suri "gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb//$((node_num - 1))//aura" \
    --key-type aura

    tangle-standalone key insert --base-path "$base_path" \
    --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json \
    --scheme Sr25519 \
    --suri "gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb//$((node_num - 1))//aura" \
    --key-type imon

    tangle-standalone key insert --base-path "$base_path" \
    --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json \
    --scheme Ed25519 \
    --suri "gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb//$((node_num - 1))//grandpa" \
    --key-type gran

    tangle-standalone key insert --base-path "$base_path" \
    --chain ./standalone-tangle/tangle/chainspecs/standalone-local.json \
    --scheme Ecdsa \
    --suri "gown surprise mirror hotel cash alarm raccoon you frog rose midnight enter//webb//$((node_num - 1))//dkg" \
    --key-type wdkg

    echo "node-$node_num keys inserted into path: $base_path \n"
}

echo "** Inserting keys **"

# Insert keys for each node
insert_keys_for_node 1 ./standalone-tangle/tangle/tmp/standalone1/
insert_keys_for_node 2 ./standalone-tangle/tangle/tmp/standalone2/
insert_keys_for_node 3 ./standalone-tangle/tangle/tmp/standalone3/
