const {DataTypes} = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = User
