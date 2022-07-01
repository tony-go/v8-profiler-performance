#!/bin/bash

# source NVM
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

# get the current node version
current_node_version=$(nvm current)

# iterate on node version a run the script
node_version=(14 16 18)
for version in ${node_version[@]}; do
 nvm install $version
 nvm use $version
 node --expose-gc ./index.js
done

# resert node version 
nvm install $current_node_version
nvm use $current_node_version
