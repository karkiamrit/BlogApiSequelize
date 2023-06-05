const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
//   dateOfBirth: {
//     type: DataTypes.DATE
//   },
//   gender: {
//     type: DataTypes.STRING
//   },
//   phoneNumber: {
//     type: DataTypes.STRING
//   },
//   address: {
//     type: DataTypes.STRING
//   },
//   biography: {
//     type: DataTypes.TEXT
//   },
//   socialMediaLinks: {
//     type: DataTypes.TEXT
//   },
//   website: {
//     type: DataTypes.STRING
//   },
//   accountStatus: {
//     type: DataTypes.ENUM('active', 'suspended'),
//     defaultValue: 'active'
//   },
  role:{
    type:DataTypes.STRING,
    defaultValue: 'user' //default user, can be changed to a different user later on.
  }},
  {timestamps: true}
);

module.exports = User;