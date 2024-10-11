# Base

FROM node:20.17.0-alpine AS base

WORKDIR /codium-website

ARG BASE_URL

ENV NEXT_PUBLIC_BASE_URL=${BASE_URL}

COPY package*.json /

RUN npm install

COPY . .

# Development

FROM base AS dev 

EXPOSE 8000

CMD ["npm", "run", "dev"]

# Production

FROM base AS production

WORKDIR /codium-website

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start"]