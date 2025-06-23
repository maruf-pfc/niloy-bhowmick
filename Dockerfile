# ----------------------
# Stage 1: Build
# ----------------------
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

# Copy everything
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build Next.js project
RUN pnpm build

# ----------------------
# Stage 2: Production
# ----------------------
FROM node:18-alpine AS runner

WORKDIR /app

# Copy runtime essentials from build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./

# Install only Next.js as it's required to serve the app
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate && \
    pnpm add next

EXPOSE 3000

CMD ["pnpm", "next", "start"]
