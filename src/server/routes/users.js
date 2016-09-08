const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('users')
  .then((users) => {
    res.status(200).json({
      status: 'Success',
      data: users
    });

    // const renderObject = {};
    // renderObject.users = users;
    // res.render('users', renderObject);
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;
