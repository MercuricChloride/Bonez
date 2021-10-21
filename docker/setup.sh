#!/bin/bash

<<<<<<< HEAD
DOCKER_IMAGE=$(docker ps --filter name=SCAFFOLD_ETH -q)

if [ "$1" = "start" ]; then
  # Run Docker container
  # to run the frontend on a different port add the "-e PORT=8080" parameter and change "-p 8080:8080" one.
  [ -z "$DOCKER_IMAGE" ] && docker run \
=======
if [ "$1" = "start" ]; then
  # Run Docker container
  # to run the frontend on a different port add the "-e PORT=8080" parameter and change "-p 8080:8080" one.
  docker restart SCAFFOLD_ETH || docker run \
>>>>>>> 0b840342 (Initial commit)
    --name SCAFFOLD_ETH \
    -v `pwd`:/opt/scaffold-eth \
    -w /opt/scaffold-eth \
    -p 3000:3000 \
    -p 8545:8545 \
<<<<<<< HEAD
    -dt node:16 || docker restart SCAFFOLD_ETH
=======
    -dt node:16
>>>>>>> 0b840342 (Initial commit)

  docker exec -ti SCAFFOLD_ETH bash -c "yarn install"
  docker exec -dt SCAFFOLD_ETH bash -c "yarn chain"
  sleep 5
  docker exec -ti SCAFFOLD_ETH bash -c "yarn deploy"
  docker exec -dt SCAFFOLD_ETH bash -c "yarn start"
else
  if [ "$1" = "deploy" ]; then
<<<<<<< HEAD
    [ -z "$DOCKER_IMAGE" ] && echo "Container does not exist. Run the script with 'start' before running it with the 'deploy' option." \
      || docker exec -ti SCAFFOLD_ETH bash -c "yarn deploy"
=======
    docker exec -ti SCAFFOLD_ETH bash -c "yarn deploy"
>>>>>>> 0b840342 (Initial commit)
  else
    echo "Invalid command. Choose 'start' or 'deploy'."
  fi
fi


