# Base build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Use PNPM
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

COPY . .

RUN pnpm install --frozen-lockfile && pnpm build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/next.config.ts .

EXPOSE 3000

CMD ["pnpm", "next", "start"]
