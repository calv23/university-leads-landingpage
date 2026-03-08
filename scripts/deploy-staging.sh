#!/bin/bash

# Staging Deployment Script

echo "🚀 Starting staging deployment..."

# Load environment variables
if [ -f .env.staging ]; then
    export $(cat .env.staging | xargs)
fi

# Build and deploy
docker-compose -f docker-compose.staging.yml down
docker-compose -f docker-compose.staging.yml build --no-cache
docker-compose -f docker-compose.staging.yml up -d

# Health check
echo "⏳ Waiting for application to start..."
sleep 10

# Check if the application is running
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200\|301\|302"; then
    echo "✅ Staging deployment successful!"
    echo "🌐 Application is running at: ${STAGING_APP_URL:-http://localhost:3000}"
else
    echo "❌ Staging deployment failed. Checking logs..."
    docker-compose -f docker-compose.staging.yml logs
    exit 1
fi
