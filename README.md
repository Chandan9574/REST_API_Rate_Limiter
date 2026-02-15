# Express Rate Limiter API

A simple Node.js + Express application demonstrating a custom rate limiter middleware.

## Features
- Express.js server
- Custom rate limiter middleware
- Limits requests per IP
- Returns 429 when limit exceeded

## Rate Limiting Rules
- Window Size: 1 minute
- Max Requests: 5 requests per IP

## Run Project
```bash
npm install express
node index.js
```

## Endpoints
GET /
Response: API is Working

GET /data
Response:
{
  "message": "You accessed protected data successfully."
}

## Rate Limit Error
Status Code: 429
{
  "error": "Too Many Requests comes. try again Later."
}

## Notes
- Uses in-memory storage
- Limits reset on server restart
