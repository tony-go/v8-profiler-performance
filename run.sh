#!/bin/bash

# source NVM
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

# get the current node version
current_node_version=$(nvm current)

# iterate on node version a run the script
node_version=(8 10 12 14 16 17 18)
for version in ${node_version[@]}; do
 nvm install $version
 nvm use $version
 node ./index.js
done

# resert node version 
nvm install $current_node_version
nvm use $current_node_version
