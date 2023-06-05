const User = require('../models/userModel');

exports.registerUser = async (req, res, next) => {
  const { id, firstname, lastname, email, username, password, role } = req.body;

  try {
    await User.create({
      id: id,
      firstName: firstname,
      lastName: lastname,
      email: email,
      username: username,
      password: password,
      role: role
    });

    res.status(200).json({
      success: true,
      message: 'User created successfully'
    });
  } catch (error) {
    console.error('Failed to create a new record for user:', error);
  }
};
