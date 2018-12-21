'use strict';
module.exports = (sequelize, DataTypes) => {
  const Context = sequelize.define('Context', {
    name: DataTypes.STRING
  }, {
    timestamps: true,
    paranoid: true
  }
  );
  Context.associate = function(models) {
    Context.hasMany(models.Task, {
      foreignKey: 'ContextId',
      onDelete: 'CASCADE'
    });
    Context.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });
  };
  return Context;
};