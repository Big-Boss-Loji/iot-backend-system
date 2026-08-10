// Mock code for device routes
// src/routes/devices.js
const express = require('express');
const router = express.Router();

// GET /api/devices - Get all IoT devices
router.get('/', (req, res) => {
  res.json({ message: 'Get all IoT devices successfully' });
});

module.exports = router;