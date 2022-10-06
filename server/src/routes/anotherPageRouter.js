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

router.post('/book/:id/:wishId', async (req, res) => {
  try {
    const { id, wishId } = req.params;
    const findedOwner = await Owner.findOne({ where: { user_id: id, wish_id: wishId } });
    const newGift = await Gift.findOne(
      {
        where:
        {
          owner_id: findedOwner.id,
          // giver_id: req.session.user.id,
          wish_status: true,
        },
      },
    );
    await newGift.update({ giver_id: req.session.user.id });
    // await newGift.save();
    // const test = await Gift.findOne(
    //   {
    //     where:
    //     {
    //       owner_id: findedOwner.id,
    //       giver_id: req.session.user.id,
    //       wish_status: true,
    //     },
    //   },
    // );
    // const currUser = await User.findOne({ where: { id } });
    // const updatedWish = await Owner.findAll({
    //   where: { user_id: currUser.id },
    //   include: [{
    //     model: Wish,
    //   },
    //   {
    //     model: Gift,
    //   }],
    // });
    // console.log(updatedWish);
    // res.send(updatedWish);

    console.log(newGift);
    res.json(newGift);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// redone '/api/another/v1/'

router.get('/v1/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const myWishes = await Gift.findAll({
      where: {
        wish_status: true,
      },
      include: [{
        model: Owner,
        where: {
          user_id: id,
        },
        include: {
          model: Wish,
        },
      }, {
        model: User,
      }],
    });
    res.send(myWishes);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.get('/v1/:id/wishesfor', async (req, res) => {
  try {
    const { id } = req.params;
    const wishes = await Gift.findAll({
      where: {
        wish_status: false,
      },
      include: [{
        model: Owner,
        where: {
          user_id: id,
        },
        include: {
          model: Wish,
        },
      }, {
        model: User,
      }],
    });
    res.send(wishes);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.get('/v1/:id/wishesfrom', async (req, res) => {
  try {
    const { id } = req.params;
    const wishes = await Gift.findAll({
      where: {
        giver_id: id,
        wish_status: false,
      },
      include: {
        model: Owner,
        include: [{
          model: Wish,
        }, {
          model: User,
        }],
      },
    });
    res.send(wishes);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;
