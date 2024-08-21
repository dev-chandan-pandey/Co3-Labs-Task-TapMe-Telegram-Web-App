// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use('/api', userRoutes);

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.log(err));

// // Basic Route
// app.get('/', (req, res) => {
//     res.send('TapMe Backend is running');
// });

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// const userRoutes = require('./routes/userRoutes');
// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// // Basic Route
// app.get('/', (req, res) => {
//   res.send('TapMe Backend is running');
// });
// app.use('/api', userRoutes);

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const TelegramBot = require('node-telegram-bot-api');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// // Import User model
// const User = require('./models/User');

// // Basic Route
// app.get('/', (req, res) => {
//   res.send('TapMe Backend is running');
// });

// // User Routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api', userRoutes);

// // Telegram Bot Setup
// const token = process.env.TELEGRAM_BOT_TOKEN; // Make sure to set this in your .env file
// const bot = new TelegramBot(token, { polling: true });

// // Handle /start command
// bot.onText(/\/start/, async (msg) => {
//   const chatId = msg.chat.id;
//   const telegramId = chatId.toString();

//   let user = await User.findOne({ telegramId });

//   if (!user) {
//     user = new User({ telegramId });
//     await user.save();
//   }

//   bot.sendMessage(chatId, 'Welcome to TapMe! Start tapping to earn coins!');
// });

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const TelegramBot = require('node-telegram-bot-api');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// // Import User model
// const User = require('./models/User');

// // Basic Route
// app.get('/', (req, res) => {
//   res.send('TapMe Backend is running');
// });

// // User Routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api', userRoutes);

// // Telegram Bot Setup
// const token = process.env.TELEGRAM_BOT_TOKEN; // Make sure to set this in your .env file
// const bot = new TelegramBot(token, { polling: true });

// // Handle /start command
// bot.onText(/\/start/, async (msg) => {
//   const chatId = msg.chat.id;
//   const telegramId = chatId.toString();

//   let user = await User.findOne({ telegramId });

//   if (!user) {
//     user = new User({ telegramId });
//     await user.save();
//   }

//   bot.sendMessage(chatId, 'Welcome to TapMe! Start tapping to earn coins!');
// });

// // Start the server
// const startServer = (port) => {
//   app.listen(port, () => console.log(`Server running on port ${port}`));
// };

// startServer(PORT);

// // Handle 'EADDRINUSE' error
// process.on('uncaughtException', (err) => {
//   if (err.code === 'EADDRINUSE') {
//     console.error(`Port ${PORT} is already in use. Trying port ${PORT + 1}...`);
//     startServer(PORT + 1);
//   } else {
//     console.error('Uncaught exception:', err);
//     process.exit(1);
//   }
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const TelegramBot = require('node-telegram-bot-api');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// // Import User model
// const User = require('./models/User');

// // Basic Route
// app.get('/', (req, res) => {
//   res.send('TapMe Backend is running');
// });

// // User Routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api', userRoutes);

// // Telegram Bot Setup
// const token = process.env.TELEGRAM_BOT_TOKEN; // Make sure to set this in your .env file
// const bot = new TelegramBot(token);

// // Set up webhook route
// app.post(`/bot${token}`, (req, res) => {
//   bot.processUpdate(req.body);
//   res.sendStatus(200);
// });

// // Set webhook to your server URL
// const webhookUrl = `https://your-server.com/bot${token}`; // Replace with your server's actual URL
// bot.setWebHook(webhookUrl).then(() => {
//   console.log(`Webhook set to ${webhookUrl}`);
// }).catch(err => {
//   console.error('Error setting webhook:', err);
// });

// // Handle /start command
// bot.onText(/\/start/, async (msg) => {
//   const chatId = msg.chat.id;
//   const telegramId = chatId.toString();

//   let user = await User.findOne({ telegramId });

//   if (!user) {
//     user = new User({ telegramId });
//     await user.save();
//   }

//   bot.sendMessage(chatId, 'Welcome to TapMe! Start tapping to earn coins!');
// });

// // Start the server
// const startServer = (port) => {
//   app.listen(port, () => console.log(`Server running on port ${port}`));
// };

// startServer(PORT);

// // Handle 'EADDRINUSE' error
// process.on('uncaughtException', (err) => {
//   if (err.code === 'EADDRINUSE') {
//     console.error(`Port ${PORT} is already in use. Trying port ${PORT + 1}...`);
//     startServer(PORT + 1);
//   } else {
//     console.error('Uncaught exception:', err);
//     process.exit(1);
//   }
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');

dotenv.config();

const app = express();
const INITIAL_PORT = process.env.PORT || 5000;
let currentPort = INITIAL_PORT;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Import User model
const User = require('./models/User');

// Basic Route
app.get('/', (req, res) => {
  res.send('TapMe Backend is running');
});

// User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// Telegram Bot Setup
const token = process.env.TELEGRAM_BOT_TOKEN; // Make sure to set this in your .env file
const bot = new TelegramBot(token);

// Set up webhook route
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Set webhook to your server URL
const webhookUrl = `https://your-server.com/bot${token}`; // Replace with your server's actual URL
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
      if (currentPort <= 65535) { // Ensure port number stays within valid range
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
