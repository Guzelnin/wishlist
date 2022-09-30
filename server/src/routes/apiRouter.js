const express = require('express');
const { Category } = require('../db/models');

const router = express.Router();

router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;
