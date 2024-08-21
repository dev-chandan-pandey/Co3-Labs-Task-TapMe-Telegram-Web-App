const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');
const User = require('./models/User'); // Ensure the User model is in the models directory

dotenv.config();

const app = express();
const INITIAL_PORT = process.env.PORT || 5000;
let currentPort = INITIAL_PORT;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Basic Route
app.get('/', (req, res) => {
  res.send('TapMe Backend is running');
});

// Route to get a user's coin balance or create the user if they don't exist
app.get('/api/user/:telegramId', async (req, res) => {
  try {
    let user = await User.findOne({ telegramId: req.params.telegramId });
    if (!user) {
      // If the user does not exist, create a new user
      user = new User({ telegramId: req.params.telegramId });
      await user.save();
    }
    res.json({ coinBalance: user.coinBalance });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route to update a user's coin balance
app.put('/api/user/:telegramId', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { telegramId: req.params.telegramId },
      { $inc: { coinBalance: 1 } }, // Increment coin balance by 1
      { new: true, upsert: true } // Create user if not exist
    );
    res.json({ coinBalance: user.coinBalance });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Telegram Bot Setup
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);

// Set up webhook route
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Set webhook to your Render.com server URL
const webhookUrl = `https://co3-labs-task-tapme-telegram-web-app.onrender.com/bot${token}`;
bot.setWebHook(webhookUrl).then(() => {
  console.log(`Webhook set to ${webhookUrl}`);
}).catch(err => {
  console.error('Error setting webhook:', err);
});

// Start the server on the first available port
const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
      currentPort++;
      if (currentPort <= 65535) {
        console.log(`Trying port ${currentPort}...`);
        startServer(currentPort);
      } else {
        console.error('No available ports in the range.');
        process.exit(1);
      }
    } else {
      console.error('Uncaught exception:', err);
      process.exit(1);
    }
  });
};

startServer(currentPort);
