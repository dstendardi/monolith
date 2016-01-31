# monolithic-repository

[![Circle CI](https://circleci.com/gh/dstendardi/monolithic-repository.svg?style=shield)](https://circleci.com/gh/dstendardi/monolithic-repository)

An experiment to build several projects on circle-ci with docker-compose

## Prerequisites

- Apps must be located in the root directory.
- Apps must be registrated docker-compose.yml.
- Apps folders must start with app (aggregation of service) or service
- Each apps should expose a test command.
- Set a DOCKER_IP variable pointing to your docker host

## Running

Run docker-compose at the root of the repository

```bash
docker-compose up 
```

## Things to do

- [x] sort dependencies (service first, then apps). 
- [ ] load only required images. 

