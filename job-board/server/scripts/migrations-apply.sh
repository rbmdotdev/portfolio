#!/bin/sh
set -e

# if [ -z "$NODE_ENV" ]
# then
#   echo "environment name is required"
#   exit 1
# fi

yarn typeorm-ts-node-commonjs migration:run -d ./scripts/ormconfig.ts src/db/migrations
