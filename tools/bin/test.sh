#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ "${PWD}/tools/bin" == $DIR ]
then
  npm run jest
else
  exit 0
fi
