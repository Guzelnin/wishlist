const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {
    name, email, password, photo, bday, description,
  } = req.body;
  if (name && email && password && photo && bday && description) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          name, password: await bcrypt.hash(password, 10), photo, bday, description,
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/mypage', async (req, res) => {
  try {
    const thisUser = await User.findOne({
      where: { id: req.session.user.id },
    });
    res.send(thisUser);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

router.post('/edit', async (req, res) => {
  try {
    const {
      name, email, password, photo, bday, description,
    } = req.body;
    const user = await User.findByPk(req.session.user.id);
    await user.update({
      name, email, description,
    });
    if (password) {
      await user.update({
        password: await bcrypt.hash(password, 10),
      });
    }
    if (photo) {
      await user.update({
        photo,
      });
    }
    if (bday) {
      await user.update({
        bday,
      });
    }
    const sessionUser = JSON.parse(JSON.stringify(user));
    delete sessionUser.password;
    req.session.user = sessionUser;
    console.log('lololololololololololo');
    console.log(sessionUser);
    return res.json(sessionUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// router.get('/current', async (req, res) => {
//   try {
//     const user = await User.findByPk(req.session.user.id);
//     console.log(user);
//     res.json(user);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
