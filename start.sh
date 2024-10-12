#!/bin/bash

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo ".env file not found!"
  exit 1
fi

docker build -t akmatoff/backoffice-dev --target=dev --build-arg BASE_URL=$NEXT_PUBLIC_BASE_URL .

docker run -p 8000:8000 akmatoff/backoffice-dev