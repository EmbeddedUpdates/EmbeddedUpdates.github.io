#!/bin/bash

# Check if a commit message is provided
if [ -z "$1" ]; then
  echo "Please provide a commit message."
  exit 1
fi

rm version.txt

echo "<link href="assets/css/txtstyle.css" rel="stylesheet" type="text/css" />" > version.html
commitHash=$(git rev-parse HEAD)
echo $commitHash > version.html

# Add all changes
git add .

# Commit changes with the provided message
git commit -m "$1"

# Push changes to the remote repository
git push origin main

echo "Changes committed and pushed to the main branch."
echo "Current commit hash is: ${commitHash}"