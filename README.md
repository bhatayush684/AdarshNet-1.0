# AdarshNet

## Tech Stack

- Vite + React + TypeScript + Tailwind CSS + shadcn-ui
- Express.js backend (Node.js)
- Optional: MongoDB via Mongoose

## Development

1. Install dependencies
   ```sh
   npm install
   npm install --prefix server
   ```

2. (Optional) Configure MongoDB
   - Copy `server/.env.example` to `server/.env`
   - Set `MONGODB_URI` to your MongoDB connection string

3. Run client and server
   ```sh
   npm run dev:all
   ```
   - Client: http://localhost:8080
   - API: proxied at `/api` to http://localhost:5000

## API Examples

- Health: `GET /api/health`
- Items: `GET /api/items`, `POST /api/items` with `{ name: string }` (requires MongoDB configured)

## Build

```sh
npm run build
```
