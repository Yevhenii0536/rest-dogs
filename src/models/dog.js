const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mssql',
  host: 'localhost',
});

const Dog = sequelize.define('Dog', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tail_length: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

sequelize.sync();

module.exports = Dog;
