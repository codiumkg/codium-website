# Base 

FROM node:20.18.0-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat git

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /codium-website

ARG BASE_URL

ENV NEXT_PUBLIC_BASE_URL=${BASE_URL}

COPY package.json pnpm-lock.yaml /codium-website/
RUN pnpm install --frozen-lockfile

FROM base AS builder 

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /codium-website

COPY --from=deps /codium-website/node_modules ./node_modules
COPY . .

RUN pnpm run build

FROM base AS production

WORKDIR /codium-website

ENV NODE_ENV=production
ENV PORT=8000
ENV HOSTNAME="0.0.0.0"

COPY --from=deps /codium-website/node_modules ./node_modules
COPY --from=builder /codium-website/.next ./.next
COPY --from=builder /codium-website/public ./public

EXPOSE 8000

CMD ["node", ".next/standalone/server.js"]