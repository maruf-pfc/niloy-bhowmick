# ----------------------
# Stage 1: Build
# ----------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Enable and configure PNPM
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

# Copy all project files
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the Next.js project (supports TS out of the box)
RUN pnpm build

# ----------------------
# Stage 2: Production
# ----------------------
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Enable PNPM in production container
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

# Copy required runtime files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose the default Next.js port
EXPOSE 3000

# Run the Next.js app in production
CMD ["pnpm", "next", "start"]
