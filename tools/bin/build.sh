#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ "${PWD}/tools/bin" == $DIR ]
then
  rm -rf $PWD/dist
  npm run webpack
  node $PWD/node_modules/babel-cli/bin/babel $PWD/src --out-dir $PWD/es5
else
  exit 0
fi
