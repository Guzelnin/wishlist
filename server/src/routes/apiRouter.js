const express = require('express');
const { Op } = require('sequelize');
const { Category, Friend, User } = require('../db/models');

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

router.get('/friends', async (req, res) => {
  try {
    const userId = req.session.user.id;
    const friendships = await Friend.findAll({
      where: {
        [Op.or]: [{ req_user_id: userId }, { res_user_id: userId }],
        request: true,
        accepted: true,
      },
    });
    const friends = await Promise.all(friendships.map(async (el) => {
      const friendId = el.req_user_id === userId ? el.res_user_id : el.req_user_id;
      const friend = await User.findOne({
        attributes: ['id', 'name', 'photo'],
        where: {
          id: friendId,
        },
      });
      return friend;
    }));
    res.send(friends);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.get('/requests', async (req, res) => {
  try {
    const userId = req.session.user.id;
    const futureFriendships = await Friend.findAll({
      where: {
        res_user_id: userId,
        request: true,
        accepted: false,
      },
    });
    const futureFriends = await Promise.all(futureFriendships.map(async (el) => {
      const friendId = el.req_user_id === userId ? el.res_user_id : el.req_user_id;
      const friend = await User.findOne({
        attributes: ['id', 'name', 'photo'],
        where: {
          id: friendId,
        },
      });
      return friend;
    }));
    res.send(futureFriends);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.delete('/request/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Friend.destroy({
      where: {
        req_user_id: id,
        res_user_id: req.session.user.id,
      },
    });
    const deleted = await User.findByPk(id);
    res.send(deleted);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.get('/request/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const friendship = await Friend.findOne({
      where: {
        req_user_id: id,
        res_user_id: req.session.user.id,
      },
    });
    await friendship.update({ accepted: true });
    const added = await User.findByPk(id);
    res.send(added);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;
