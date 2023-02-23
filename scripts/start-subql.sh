#!/bin/bash

set -e # Exit on error

# Delete node_modules directory
if [ -d "node_modules" ]; then
  echo "Deleting node_modules directory"
  rm -rf node_modules
fi

# Delete old build directory
if [ -d "dist/" ]; then
  echo "Deleting dist/ directory"
  rm -rf dist/
fi

# Purge old data directory
if [ -d ".data" ]; then
  echo "Deleting .data directory"
  rm -rf .data
fi

# Remove Docker data
echo "Purging Docker system"
if ! docker system prune -a --yes; then
  echo "Failed to purge Docker system" >&2
  exit 1
fi

# Install dependencies
echo "Installing dependencies"
if ! yarn install; then
  echo "Failed to install dependencies" >&2
  exit 1
fi

# Generate project types
echo "Generating project types"
if ! yarn codegen; then
  echo "Failed to generate project types" >&2
  exit 1
fi

# Build project
echo "Building project"
if ! yarn build
