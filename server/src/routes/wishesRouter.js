const express = require('express');
const { Op } = require('sequelize');
const {
  Wish, Owner, Category, User, Gift,
} = require('../db/models');
const upload = require('../middlewares/multer');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
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

router.get('/mypage/mywishes', async (req, res) => {
  try {
    const myWishes = await Gift.findAll({
      where: {
        wish_status: true,
      },
      include: {
        model: Owner,
        where: {
          user_id: req.session.user.id,
        },
        include: [{
          model: User,
        }, {
          model: Wish,
        }],
      },
    });
    res.send(myWishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/mypage', async (req, res) => {
  try {
    const currUser = await User.findOne({ where: { id: req.session.user.id } });
    res.send(currUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/v1/mypage/friendswishesibooked', async (req, res) => {
  try {
    const wishes = await Gift.findAll({
      where: {
        giver_id: req.session.user.id,
        wish_status: true,
      },
      include: {
        model: Owner,
        include: [{
          model: User,
        }, {
          model: Wish,
        }],
      },
    });
    res.send(wishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/v1/mypage/wishesforme', async (req, res) => {
  try {
    const wishes = await Gift.findAll({
      where: {
        wish_status: false,
      },
      include: [{
        model: Owner,
        where: {
          user_id: req.session.user.id,
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
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/v1/mypage/wishesforme/new/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const wish = await Gift.findOne({
      where: {
        id,
      },
      include: [{
        model: Owner,
        include: {
          model: Wish,
        },
      }, {
        model: User,
      }],
    });
    await wish.update({ wish_status: false });
    res.send(wish);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/v1/mypage/wishesfromme', async (req, res) => {
  try {
    const wishes = await Gift.findAll({
      where: {
        giver_id: req.session.user.id,
        wish_status: false,
      },
      include: {
        model: Owner,
        include: [{
          model: User,
        }, {
          model: Wish,
        }],
      },
    });
    res.send(wishes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/v1/mypage/wishesfromme/new/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const wish = await Gift.findOne({
      where: {
        id,
      },
      include: {
        model: Owner,
        include: [{
          model: User,
        }, {
          model: Wish,
        }],
      },
    });
    await wish.update({
      giver_id: req.session.user.id,
    });
    res.send(wish);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/mypage/giftstome', async (req, res) => {
  try {
    const giftsForMe = await Gift.findAll({
      where: {

        wish_status: false,
        giver_id: {
          [Op.not]: null,
        },
      },
      include: [
        {
          model: Owner,
          include: {
            model: Wish,
            where: { user_id: req.session.user.id },
          },
        },
        {
          model: User,
        },
      ],
    });
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

router.post('/add', upload.single('photo'), async (req, res) => {
  try {
    console.log('debug1');
    const {
      name, link, categoryId, description, privateWish, date,
    } = req.body;
    console.log('debug2');
    const newWish = await Wish.create({
      name, link, category_id: +categoryId, photo: req.file?.path.replace('public/', '') || null,
    });
    console.log('debug3');
    const newOwner = await Owner.create({
      wish_id: newWish.id,
      user_id: req.session.user.id,
      private: privateWish,
      description,
      date,
    });
    console.log('debug4');
    const newGift = await Gift.create({
      owner_id: newOwner.id,
      giver_id: null,
      wish_status: true,
    });
    console.log('debug5');
    const myNewWish = await Gift.findOne({
      where: {
        id: newGift.id,
      },
      include: {
        model: Owner,
        include: [{
          model: User,
        }, {
          model: Wish,
        }],
      },
    });
    console.log('debug6');
    res.send(myNewWish);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.post('/add/copy/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      description, privateWish, date,
    } = req.body;
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
    const myNewWish = await Gift.findOne({
      where: {
        owner_id: newOwner.id,
      },
      include: {
        model: Owner,
        include: [{
          model: User,
        }, {
          model: Wish,
        }],
      },
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

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const wish = await Owner.findByPk(id);
    await wish.destroy();
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(403);
  }
});

module.exports = router;
