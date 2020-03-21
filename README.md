# 2020-03-21 - Week 2

- Should you test logs?
- Docker
  - Container history
    - https://dzone.com/articles/evolution-of-linux-containers-future
    - Dockerfile
      - https://docs.docker.com/engine/reference/builder/
  - Commands
    - ```
        docker image build -t example_app:1.0 .
      ```
      - `-t` provides tag name.
    - ```
        docker container run --publish 8000:8080 --detach --name example example_app:1.0
      ```
      - `-publish` port forwarding
      - `--detach` run in background
      - `--name` container name
    - Remove container
      ```
        docker container rm --force example
      ```
    - List images
      ```
        docker image ls
        docker images
      ```
    - List containers
      ```
        docker ps -a
      ```
    - Connect to running container
      ```
        docker exec -it example /bin/bash
      ```
- Environment variables

  - https://en.wikipedia.org/wiki/Environment_variable#Unix
  - Example
    - ```
       export VARIABLE=value
       echo $VARIABLE
       unset VARIABLE
       echo $VARIABLE
      ```
  - no booleans

- Storing secrets
  - use `.env`
    - glitch https://glitch.com/help/env/
  - aws https://aws.amazon.com/blogs/aws/aws-secrets-manager-store-distribute-and-rotate-credentials-securely/
  - heroku https://devcenter.heroku.com/articles/config-vars
- ExpressJS Middlewares
  - https://expressjs.com/en/guide/writing-middleware.html
- Security
  - https://expressjs.com/en/advanced/best-practice-security.html
  - https://juice-shop.herokuapp.com/#/
    - https://github.com/bkimminich/juice-shop
  - http://nodegoat.herokuapp.com/tutorial
    - http://nodegoat.herokuapp.com/
    - https://github.com/OWASP/NodeGoat
  - https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_security_cheat_sheet.html
  - https://www.owasp.org/index.php/Main_Page
