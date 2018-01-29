module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      starts: {
        type: Sequelize.STRING,
      },
      ends: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      organizersName: {
        type: Sequelize.STRING,
      },
      organizersDescription: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      centerId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Center',
          key: 'id',
          as: 'centerId',
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Events'),
};
