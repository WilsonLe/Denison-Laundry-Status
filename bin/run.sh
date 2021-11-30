#! /bin/sh

# Create and start the container as a detached process. The --rm option means to remove the container once it exits/stops. The -d flag means to start the container detached (in the background).
docker run -d --network host --name denison_washroom wilsonle/denison_washroom
