'use strict';

module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    phone: DataTypes.STRING,
    location: DataTypes.STRING,
    formattedAddress: DataTypes.STRING
  }, {});
  return Restaurant;
};