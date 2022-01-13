const mongoose = require("mongoose");
const userModel = require("../models/userModel");
UserModel = mongoose.model("UserModel");
const users = require('./../../data');
const getAllUsers = async (req, res) => {
  try {
    //let listUsers = await userModel.find();
    let listUsers = await users;
    listUsers = JSON.stringify(listUsers);
    res.status(200).json({message: 'Achou tudo o que era para achar.'+listUsers});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new UserModel({ name, email, password });
  user = JSON.stringify(user);
  try {
    await userModel.create(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByID
};
