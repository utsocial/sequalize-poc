'use strict';
module.exports = (sequelize, DataTypes) => {
  const Context = sequelize.define('Context', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING
  }, {});
  Context.associate = function(models) {
    // associations can be defined here
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