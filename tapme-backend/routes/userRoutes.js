// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Get User Coin Balance
// router.get('/user/:telegramId', async (req, res) => {
//     try {
//         const user = await User.findOne({ telegramId: req.params.telegramId });
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Increment Coin Balance
// router.put('/user/:telegramId', async (req, res) => {
//     try {
//         const user = await User.findOneAndUpdate(
//             { telegramId: req.params.telegramId },
//             { $inc: { coinBalance: 1 } },
//             { new: true }
//         );
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get User Coin Balance
router.get('/user/:telegramId', async (req, res) => {
  try {
    const user = await User.findOne({ telegramId: req.params.telegramId });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Increment Coin Balance
router.put('/user/:telegramId', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { telegramId: req.params.telegramId },
      { $inc: { coinBalance: 1 } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
