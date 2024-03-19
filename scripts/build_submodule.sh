#!/bin/bash

pro1_path=$1
cd ./"$pro1_path" || exit
bun i
bun run build:submodule
