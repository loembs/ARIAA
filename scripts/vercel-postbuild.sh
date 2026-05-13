#!/bin/bash
# Copy index.html to dist/client and update script references
cp index.html dist/client/index.html

# Find the main JS file and update the reference
MAIN_JS=$(ls dist/client/assets/index-*.js 2>/dev/null | head -1 | xargs basename)

if [ -n "$MAIN_JS" ]; then
  sed -i "s|/assets/index-.*\\.js|/assets/$MAIN_JS|" dist/client/index.html
fi

echo "Post-build completed for Vercel"
