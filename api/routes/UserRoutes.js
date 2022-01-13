const express = require('express');
const router = express.Router();


  const {
    getAllUsers,
    getUserByID,
  } = require('../controllers/userController');

  router.get('/', getAllUsers);
  router.get('/:userId', getUserByID);
  //router.post('/', userController.createUser());

  
  //router.put('/:userId', userController.update_user());
  //router.delete('/:userId', userController.delete_user());


  module.exports = router;