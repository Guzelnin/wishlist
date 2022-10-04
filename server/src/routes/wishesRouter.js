const express = require('express');
const { Op } = require('sequelize');
const {
  Wish, Owner, Category, User, Gift,
} = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // const allPublicWishes = await Wish.findAll({
    //   order: [['id', 'DESC']],
    //   include: [{ model: Owner, where: { private: false } }, { model: Category }],
    // });
    // const userWishes = await Owner.findAll({
    //   where: { user_id: req.session.user.id },
    // });
    // const filtered = allPublicWishes.filter((el) => {
    //   const result = userWishes.find((elem) => elem.wish_id === el.id);
    //   return result === undefined;
    // });
    const allPublicWishes = await Owner.findAll({
      where: {
        private: false,
        user_id: {
          [Op.ne]: req.session.user ? req.session.user.id : null,
        },
      },
      include: {
        model: Wish,
        include: {
          model: Category,
        },
      },
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
          model: User,
        },
        {
          model: Gift,
          where: {
            giver_id: currUser.id,
            wish_status: true,
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

router.get('/mypage/giftstome', async (req, res) => {
  try {
    const giftsForMe = await Gift.findAll({
      where: {
        owner_id: req.session.user.id,
        wish_status: false,
      },
      include: [
        {
          model: Owner,
          include: {
            model: Wish,
          },
        },
        {
          model: User,
        },
      ],
    });
    // console.log(notedWishes);
    console.log(giftsForMe);
    res.send(giftsForMe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/mypage/giftsfromme', async (req, res) => {
  try {
    const giftsFromMe = await Gift.findAll({
      where: {
        giver_id: req.session.user.id,
        wish_status: false,
      },
      include: [
        {
          model: Owner,
          include: [{
            model: Wish,
          },
          {
            model: User,
          }],
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
      wish_status: true,
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

router.post('/add/copy/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      description, privateWish, date,
    } = req.body;
    // categoryId!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const newOwner = await Owner.create({
      wish_id: id,
      user_id: req.session.user.id,
      private: privateWish,
      description,
      date,
    });
    await Gift.create({
      owner_id: newOwner.id,
      giver_id: null,
      wish_status: true,
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

router.patch('/:id/edit', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      categoryId, description, date, privateWish,
    } = req.body;
    const wish = await Owner.findOne({
      where: {
        user_id: req.session.user.id,
      },
      include: {
        model: Wish,
        where: {
          id,
        },
        include: {
          model: Category,
        },
      },
    });
    if (categoryId && description && date && privateWish) {
      await wish.update({ description, date, private: privateWish });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
