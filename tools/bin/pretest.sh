#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ "${PWD}/tools/bin" == $DIR ]
then
  npm run lint
  npm run build
else
  exit 0
fi
