'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps: true,
    paranoid: true
  }
  );
  User.associate = function(models) {
    User.hasMany(models.Context, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });
  };
  return User;
};