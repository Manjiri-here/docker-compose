Docker compose: With docker compose we can manage multiple services at a time. Services means microservice, instead of repeating the same commands for every single service we use docker compose. It is a plugin. Earlier it was separate tool but now it is plugin and gets installed with docker itself.

 # docker compose composes means builds images and creates container for us.

Note: For Ubuntu docker compose was not installed by default with docker,I installed it manually using :
$ sudo apt  install docker-compose
$ docker-compose version 
You need to write docker-compose.yaml file in the same directories which has microservices files and folders. The format of writing the file is as below. We list node-service, website and flask services which are services which we have written and then in build give their paths and ports to be mapped to, means port forwarding.

services:

  node-service:
     build: ./node-service
     ports:
       - 4000:4000

  website:
     build: ./website
     ports:
        - 9090:80

  flask:
    build: ./flask-service
    ports:
      - 4001:4001


Find the version :
% docker-compose version

# validate if docker config is right
% docker-compose config

# list all services from docker-compose.yaml file
% docker-compose config —services

# build all the images for all the services
% docker-compose build

Now if something has changed in code and you want to build images again then you can use below command. Means the images will be forced to be built one more time.
% docker-compose build —no-cache

# push all the images to docker image registry
% docker-compose push

# get list of containers running for the services
% docker-compose ps 

Note: Docker compose does not support docker swarm it supports docker stack. Hence docker compose or swarm ar not much use in production today. Instead Kubernetes is used.

# run container in detached mode for each service
% docker compose up -d

$ docker compose ps
NAME                            IMAGE                         COMMAND                  SERVICE        CREATED         STATUS         PORTS
docker-compose-flask-1          docker-compose-flask          "/bin/sh -c 'python3…"   flask          5 seconds ago   Up 4 seconds   0.0.0.0:4001->4001/tcp, [::]:4001->4001/tcp
docker-compose-node-service-1   docker-compose-node-service   "docker-entrypoint.s…"   node-service   5 seconds ago   Up 4 seconds   0.0.0.0:4000->4000/tcp, [::]:4000->4000/tcp
docker-compose-website-1        docker-compose-website        "/docker-entrypoint.…"   website        5 seconds ago   Up 4 seconds   0.0.0.0:9090->80/tcp, [::]:9090->80/tcp
