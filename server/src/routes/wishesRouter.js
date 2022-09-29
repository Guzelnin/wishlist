const express = require('express');
const { Wish } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allWishes = await Wish.findAll();
    res.send(allWishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
