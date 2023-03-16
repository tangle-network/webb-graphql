#!/bin/bash
# Running codegen
subql codegen
# Cleanup types dir
rm -rf ./src/subql/types
# Moving types
mv -i  ./src/types/ ./src/subql/types
