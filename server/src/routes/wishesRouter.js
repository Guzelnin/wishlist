const express = require('express');
const { Op } = require('sequelize');
const {
  Wish, Owner, Category, User, Gift,
} = require('../db/models');
const upload = require('../middlewares/multer');

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
    const giftsForMe = await Owner.findAll({
      where: {
        user_id: req.session.user.id,
      },
      include: [
        {
          model: Wish,
        },
        {
          model: Gift,
          where: {
            wish_status: false,
            giver_id: { [Op.ne]: req.session.user.id },
          },
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

router.get('/mypage/giftsfromme', async (req, res) => {
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

router.post('/add', upload.single('photo'), async (req, res) => {
  try {
    const {
      name, link, category_id, description, privateWish, date,
    } = req.body;
    console.log(req.body);
    const newWish = await Wish.create({
      name, link, category_id: +category_id, photo: req.file?.path.replace('public/', '') || null,
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
