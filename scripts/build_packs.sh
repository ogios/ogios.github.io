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

	echo build "$project"
	./scripts/build_submodule.sh "$project_path"

	echo copy "$project"
	cp ./"$project_path"/dist/"$project_path"/assets ./dist/"$project_path" -r
	cp ./"$project_path"/dist/index.html ./dist/"$project_path"/index.html
	cp ./"$project_path"/dist/index.html ./dist/"$project_path"/404.html
done

echo "done"
