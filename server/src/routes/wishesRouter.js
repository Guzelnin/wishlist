const express = require('express');
const { Wish, Owner, Category } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allPublicWishes = await Wish.findAll({
      order: [['id', 'DESC']],
      include: [{ model: Owner, where: { private: false } }, { model: Category }],
    });
    res.send(allPublicWishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
