#!/bin/bash

pushd build

echo "Looking for files..."

# Find and store all `.map` files.
map_files=$(find . -name '*.map' -type f)

if [[ ! -z "$map_files" ]]
then
    echo "Removing files..."
    rm -v $map_files
fi

popd