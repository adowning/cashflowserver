#!/bin/bash

# Set the directory to search for HTML files
directory=./public/games

# Get a list of HTML files recursively
html_files=()
while IFS= read -r -d '' file; do
  html_files+=("$file")
done < <(find "$directory" -type f -name '*.html' -print0)

# Loop through the list of HTML files
for file in "${html_files[@]}"; do
  # Print the file name and prompt the user for confirmation
  echo "File: $file"

  read -p "OK to copy to Cloudflare? (y/n) " -n 1 -r
  echo

  # If the user confirms, execute the rclone command
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    relative_file_path=${file#$directory/}
    relative_file_path=${relative_file_path##*/}

    rclone copy "$file" cloudflare:slots/
    echo "Copied $file to cloudflare:slots/"

  fi
done