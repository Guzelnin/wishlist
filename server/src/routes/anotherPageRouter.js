const express = require('express');
// const { Op } = require('sequelize');
const {
  Wish, Owner, User, Gift,
} = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const currUser = await User.findByPk(id);
    // if (id === req.session.user.id) {
    //   res.redirect('/api/wishes/mypage');
    // }
    res.send(currUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/userwishes', async (req, res) => {
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

module.exports = router;
