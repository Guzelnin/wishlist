const express = require('express');
const { Op } = require('sequelize');
const {
  Wish, Owner, User, Gift,
} = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const currUser = await User.findByPk(id);
    if (id === req.session.user.id) {
      res.redirect('/api/wishes/mypage');
    }
    res.send(currUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/userwishes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const currUser = await User.findOne({ where: { id } });
    const anotherWishes = await Owner.findAll({
      where: { user_id: currUser.id },
      include: [{
        model: Wish,
      },
      {
        model: Gift,
      }],
    });
    res.send(anotherWishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/giftsforuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const currUser = await User.findOne({ where: { id } });
    const giftsForUser = await Gift.findAll({
      where: {
        owner_id: currUser.id,
        wish_status: false,
        giver_id: {
          [Op.not]: null,
        },
      },
      include: [
        {
          model: Owner,
          // where: {
          //   user_id: currUser.id,
          // },
          include: {
            model: Wish,
          },
        },
        {
          model: User,
        },
      ],
    });
    res.send(giftsForUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/giftsfromuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const currUser = await User.findByPk(id);
    const giftsFromUser = await Gift.findAll({
      where: {
        giver_id: currUser.id,
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
    res.send(giftsFromUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
