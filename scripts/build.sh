#!/bin/bash

if [ ! "$(uname)" = "Darwin" ]; then
  npm run gyp:configure && npm run gyp:rebuild
fi
