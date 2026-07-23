# Base build stage using official Bun image
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Install dependencies using Bun
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# Production stage
FROM oven/bun:1-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/next.config.ts .

EXPOSE 3000

CMD ["bun", "run", "start"]
