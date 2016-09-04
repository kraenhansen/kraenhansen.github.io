#!/bin/bash
set -o errexit -o nounset

git config user.email "mail@kraenhansen.dk"
git config user.name "Kræn Hansen (via Travis)"

# Remember the original revision
rev=$(git rev-parse HEAD)
echo "Deploying $rev"

# Commit the change effects of the build
git commit -a -m "Build $rev" --allow-empty
rev2=$(git rev-parse HEAD)

# Reset the master branch to the new committed changes
echo "Resetting master to $rev2"
git fetch origin master
git remote -v
git branch
git checkout master
#git reset --hard $rev2

# Push the changes to GitHub
#git push origin master
