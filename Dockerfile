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

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /codium-website/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /codium-website/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /codium-website/.next/static ./.next/static

EXPOSE 8000

CMD ["node", "server.js"]