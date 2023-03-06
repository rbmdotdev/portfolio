#!/bin/sh
set -e

yarn typeorm-ts-node-commonjs migration:generate -d ./scripts/ormconfig.ts src/db/migrations/migration
