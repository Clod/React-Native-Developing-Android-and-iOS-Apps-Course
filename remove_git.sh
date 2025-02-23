#!/bin/bash

# Find all immediate subdirectories
for PROJECT in */; do
  # Remove trailing slash
  PROJECT=${PROJECT%/}
  
  # Skip if not a directory
  [ ! -d "$PROJECT" ] && continue
  
  echo "Checking $PROJECT..."
  
  # If .git directory exists, remove it
  if [ -d "$PROJECT/.git" ]; then
    echo "Removing .git directory from $PROJECT..."
    rm -rf "$PROJECT/.git"
    rm -f "$PROJECT/.gitignore"
    rm -f "$PROJECT/.gitattributes"
    echo "Git files removed from $PROJECT"
  else
    echo "No .git directory found in $PROJECT"
  fi
done

echo "Finished removing git files from all subprojects."
