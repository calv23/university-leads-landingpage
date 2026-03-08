#!/bin/bash

# Production Deployment Script

echo "🚀 Starting production deployment..."

# Load environment variables
if [ -f .env.production ]; then
    export $(cat .env.production | xargs)
fi

# Check if SSL certificates exist
if [ ! -d "./certbot/conf/live/universityleads.edu.my" ]; then
    echo "🔒 SSL certificates not found. Running initial certificate generation..."
    ./docker/certbot/init-letsencrypt.sh
fi

# Deploy
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d

# Health check
echo "⏳ Waiting for application to start..."
sleep 15

# Check if the application is running
if curl -s -o /dev/null -w "%{http_code}" https://universityleads.edu.my | grep -q "200\|301\|302"; then
    echo "✅ Production deployment successful!"
    echo "🌐 Application is running at: https://universityleads.edu.my"
else
    echo "⚠️  HTTP check failed. Trying HTTP..."
    if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200\|301\|302"; then
        echo "✅ Production deployment successful (HTTP)!"
    else
        echo "❌ Production deployment failed. Checking logs..."
        docker-compose -f docker-compose.prod.yml logs
        exit 1
    fi
fi
