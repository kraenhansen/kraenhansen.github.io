#!/bin/bash
set -o errexit -o nounset

# Remember the original revision
rev=$(git rev-parse HEAD)
echo "Deploying $rev"

# Commit the change effects of the build
git commit -a -m "Build $rev"
rev2=$(git rev-parse HEAD)

# Reset the master branch to the new committed changes
echo "Resetting master to $rev2"
git checkout master
git reset --hard $rev2

# Push the changes to GitHub
git push origin master
