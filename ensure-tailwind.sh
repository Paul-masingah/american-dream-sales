#!/bin/bash

# Ensure Tailwind CSS v3 and autoprefixer are installed
# Workaround for npm installation issues in this environment

cd "$(dirname "$0")"

echo "Ensuring Tailwind CSS v3.4.19 is installed..."
if [ ! -d "node_modules/tailwindcss" ]; then
  cd node_modules
  curl -sL https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.19.tgz | tar -xzf -
  mv package tailwindcss
  cd ..
  echo "✓ Tailwind CSS v3.4.19 installed"
else
  echo "✓ Tailwind CSS already installed"
fi

echo "Ensuring autoprefixer v10.4.20 is installed..."
if [ ! -d "node_modules/autoprefixer" ]; then
  cd node_modules
  curl -sL https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz | tar -xzf -
  mv package autoprefixer
  cd ..
  echo "✓ autoprefixer v10.4.20 installed"
else
  echo "✓ autoprefixer already installed"
fi

echo "All dependencies ready!"
