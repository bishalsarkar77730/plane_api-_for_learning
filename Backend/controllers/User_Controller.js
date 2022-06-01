// const express = require("express");
const User = require("../models/users");

const registerUser = async (req, res) => {
    const { name, number } = req.body;
    const user = new User({ name, number });
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  registerUser,
  getUsers,
};
