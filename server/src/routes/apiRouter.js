const express = require('express');
const { Op } = require('sequelize');
const {
  Category, Friend, User, Owner, Wish,
} = require('../db/models');

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
      const friend = await User.findOne({
        attributes: ['id', 'name', 'photo'],
        where: {
          id: el.req_user_id,
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

router.get('/requests/my', async (req, res) => {
  try {
    const userId = req.session.user.id;
    const futureFriendships = await Friend.findAll({
      where: {
        req_user_id: userId,
        request: true,
        accepted: false,
      },
    });
    const futureFriends = await Promise.all(futureFriendships.map(async (el) => {
      const friend = await User.findOne({
        attributes: ['id', 'name', 'photo'],
        where: {
          id: el.res_user_id,
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

router.get('/requests/my/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Friend.create({
      req_user_id: req.session.user.id,
      res_user_id: id,
      request: true,
      accepted: false,
    });
    const futureFriend = await User.findOne({
      attributes: ['id', 'name', 'photo'],
      where: {
        id,
      },
    });
    res.send(futureFriend);
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

router.post('/entry', async (req, res) => {
  try {
    const { input } = req.body;
    if (input.length > 0) {
      const entries = await User.findAll({
        where: {
          name: {
            [Op.like]: `%${input}%`,
          },
          id: {
            [Op.ne]: req.session.user.id,
          },
        },
      });
      res.json(entries);
    } else {
      const entries = [];
      res.json(entries);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/wishes/details/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const wish = await Owner.findOne({
      where: {
        wish_id: id,
        user_id: req.session.user.id,
      },
      include: {
        model: Wish,
      },
    });
    res.send(wish);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.get('/wishes/copy/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const wish = await Wish.findByPk(id);
    res.send(wish);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;
