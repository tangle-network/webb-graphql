#!/bin/bash
# Running codegen
subql codegen
# Cleanup types dir
rm -rf ./src/substrate/types
# Moving types
mv -i  ./src/types/ ./src/substrate/types
