#!/bin/bash

# Delete existing directory
rm -rf /tmp/ai

# Create fresh directory
mkdir -p /tmp/ai
mkdir -p /tmp/ai/ai

# Copy project folders with exclusions
rsync -av \
  --exclude=node_modules/ \
  --exclude=docker/ \
  --exclude=dist/ \
  --exclude=seed/ \
  --exclude=scripts/ \
  --exclude=tasks/ \
  --exclude=prisma/ \
  # --exclude=client/public/ \
  # --exclude=public/ \
  # --exclude=src/services/pragmatic/engine/ \
  # --exclude=client/src/assets/ \
  # --exclude=.*/ \
  # --exclude=prisma/generated/ \
  # --exclude=prisma/migrations/ \
  # --exclude=admin/ \
  # --exclude=prisma/schema/ \
  . /tmp/ai/ai/

# Create target schema directory
mkdir -p /tmp/ai/ai/prisma/schema

# Copy and rename prisma files
for file in prisma/schema/*.prisma; do
  if [ -f "$file" ]; then
    base=$(basename "$file" .prisma)
    cp "$file" "/tmp/ai/ai/prisma/schema/${base}.txt"
  fi
done

# Copy and rename vue files
# find /tmp/ai/ai -type f -name "*.vue" | while read -r file; do
#   base=$(basename "$file" .vue)
#   dir=$(dirname "$file")
#   cp "$file" "${dir}/${base}.vue.txt"
#   rm "$file"
# done

# mkdir -p /tmp/ai/ai/client/public
# cp "client/public/rtg_loader_template.html" "/tmp/ai/ai/client/public/rtg_loader_template.html"
# cp "client/public/rtg.bridge.js" "/tmp/ai/ai/client/public/rtg.bridge.js"





echo "Directory sync completed successfully"