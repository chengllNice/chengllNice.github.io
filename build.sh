#!/bin/bash

echo "build environment：$1";
echo "push project：$2";

if [[ $1 == "online" ]]
then
    echo "git autopush start..."
    git add .
    git commit -m $2
    # git checkout master
    git push origin master
    echo "git autopush end..."
else
    echo "environment is invalid"
fi

echo "end chengllNice.github.io build ==============="
