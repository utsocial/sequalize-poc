'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 50],
          msg: "Your to-do item name must be between 3 and 50 characters.  Please try again."
        }
      }
    },
    done: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {
    timestamps: true,
    paranoid: true
  }
  );
  Task.associate = function(models) {
    Task.belongsTo(models.Context, {
      foreignKey: 'ContextId',
      onDelete: 'CASCADE'
    });
  };
  return Task;
};