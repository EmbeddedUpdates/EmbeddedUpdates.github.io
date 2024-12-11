#!/bin/bash

# Check if a commit message is provided
if [ -z "$1" ]; then
  echo "Please provide a commit message."
  exit 1
fi

rm version.txt
git rev-parse HEAD > version.txt

# Add all changes
git add .

# Commit changes with the provided message
git commit -m "$1"

# Push changes to the remote repository
git push origin main

echo "Changes committed and pushed to the main branch."
commitHash=$(cat version.txt)

echo "Current commit hash is: ${commitHash}"