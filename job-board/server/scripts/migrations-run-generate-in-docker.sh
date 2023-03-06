#!/bin/sh
set -e
CONTAINER=$(docker ps -aqf "name=job-board-server")

if [ -z "$CONTAINER" ]
then
  echo "container is not running"
  exit 1
fi

docker exec $CONTAINER yarn migrations:generate
