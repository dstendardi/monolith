# monolithic-repository

[![Circle CI](https://circleci.com/gh/dstendardi/monolithic-repository.svg?style=shield)](https://circleci.com/gh/dstendardi/monolithic-repository)

An experiment to build several projects on circle-ci with docker-compose

## Prerequisites

- Services must be located in the root directory.
- Services must contain a docker-compose.yml.
- Services folder must start with service
- Each compose file should contains a app and test container.
