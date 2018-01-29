module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  
  Center.associate = (models) => {
    Center.belongsToMany(models.Event, {
      through: 'event_center',
    });
  };

  return Center;
};