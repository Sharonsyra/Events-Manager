module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING,
    },
    starts: {
      type: DataTypes.STRING,
    },
    ends: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    organizersName: {
      type: DataTypes.STRING,
    },
    organizersDescription: {
      type: DataTypes.STRING
    }
  });

  Event.associate = (models) => {
    Event.belongsToMany(models.Center, {
      through: "event_center",
    });
  };

  return Event;
};