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
    // console.log(myWishes);
    res.send(myWishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/mypage/friendswishes', async (req, res) => {
  try {
    const currUser = await User.findOne({ where: { id: req.session.user.id } });
    const notedWishes = await Owner.findAll({
      include: [
        {
          model: Wish,
        },
        {
          model: Gift,
          where: {
            giver_id: currUser.id,
          },
        },
      ],
    });
    // console.log(notedWishes);
    res.send(notedWishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/mypage/gifts-to-me', async (req, res) => {
  try {
    const giftsForMe = await Owner.findAll({
      include: [
        {
          model: Wish,
          where: {
            user_id: req.session.user.id,
          },
        },
        {
          model: Gift,
        },
      ],
    });
    // console.log(notedWishes);
    res.send(giftsForMe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/mypage/gifts-from-me', async (req, res) => {
  try {
    const giftsFromMe = await Owner.findAll({
      include: [
        {
          model: Wish,
        },
        {
          model: Gift,
          where: {
            giver_id: req.session.user.id,
            wish_status: false,
          },
        },
      ],
    });
    // console.log(notedWishes);
    res.send(giftsFromMe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/add', async (req, res) => {
  try {
    const {
      name, link, photo, categoryId, description, privateWish, date,
    } = req.body;
    console.log(req.body);
    const newWish = await Wish.create({
      name, link, photo, category_id: +categoryId,
    });
    const newOwner = await Owner.create({
      wish_id: newWish.id,
      user_id: req.session.user.id,
      private: privateWish,
      description,
      date,
    });
    await Gift.create({
      owner_id: newOwner.id,
      giver_id: null,
      wish_status: false,
    });
    const myNewWish = await Owner.findOne({
      where: { id: newOwner.id },
      include: [{
        model: Wish,
      },
      {
        model: Gift,
      }],
    });
    res.json(myNewWish);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
