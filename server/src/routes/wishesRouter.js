const express = require('express');
const {
  Wish, Owner, Category, User, Gift,
} = require('../db/models');

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

router.get('/mypage', async (req, res) => {
  try {
    const currUser = await User.findOne({ where: { id: req.session.user.id } });
    const myWishes = await Owner.findAll({
      where: { user_id: currUser.id },
      include: [{
        model: Wish,
      },
      {
        model: Gift,
      }],
    });
    console.log(myWishes);
    res.send(myWishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
