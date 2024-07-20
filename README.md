# nodejs-docker-env
Docker image for nodejs application which uses .env file

## Docker image build
Build docker image for nodejs application and replace the `.env.prodcution` with `.env`. So  `.env` file will take values from docker image environment varaibles.
`docker build -t nodejs-docker-env .`

## Docker image run
Pass the environment varialbes for docker image which inter used by .env file
`docker run -it -d -e NODEV_ENV=production -e PORT=4000 --name nodejs-docker-env nodejs-docker-env`