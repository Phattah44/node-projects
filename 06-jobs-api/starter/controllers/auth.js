const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password: hashedPassword };

  // if (!name || email || password) {
  //   throw new BadRequestError('Please provide a name, email, and password');
  // }

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};
const login = (req, res) => {
  res.send(`login user`);
};

module.exports = {
  register,
  login,
};
