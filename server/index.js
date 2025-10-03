import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || '';

// Middleware
app.use(cors());
app.use(express.json());

// Optional Mongo connection
async function connectMongo() {
  if (!MONGODB_URI) {
    console.warn('[server] MONGODB_URI not set. Starting without DB connection.');
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI, {
      // options are auto-managed in Mongoose v8
    });
    console.log('[server] MongoDB connected');
  } catch (err) {
    console.error('[server] MongoDB connection error:', err.message);
  }
}

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Example Item model and routes if DB is connected
const itemSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
});
const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

app.get('/api/items', async (req, res) => {
  try {
    if (!mongoose.connection.readyState) return res.json([]);
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/items', async (req, res) => {
  try {
    if (!mongoose.connection.readyState) return res.status(400).json({ error: 'DB not connected' });
    const { name } = req.body;
    const doc = await Item.create({ name });
    res.status(201).json(doc);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Start
(async () => {
  await connectMongo();
  app.listen(PORT, () => {
    console.log(`[server] listening on http://localhost:${PORT}`);
  });
})();
