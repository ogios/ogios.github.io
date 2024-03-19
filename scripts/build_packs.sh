#!/bin/bash

echo updating submodules
git submodule update --remote --recursive --init

get_projects() {
	local subfolders=("$(ls "$1")")
	echo "${subfolders[@]}"
}

base="projects"
projects=$(get_projects $base/)
mkdir ./dist/$base -p
echo build submodules
for project in "${projects[@]}"; do
	echo "$project"
	project_path=$base/$project
	mkdir ./dist/"$project_path" -p

	# echo build "$project"
	# ./build_submodule.sh "$project_path"
	#
	# echo copy "$project"
	# cp ./"$project_path"/dist/assets ./dist/"$project_path" -r
	# cp ./"$project_path"/dist/index.html ./dist/"$project_path"
done

echo "done"
