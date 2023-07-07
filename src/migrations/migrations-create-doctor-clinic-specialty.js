'use strict';
const path = require('path');

module.exports = {
  'migrations-path': path.resolve(__dirname, 'src', 'migrations')
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doctor_clinic_specialties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      clinicId: {
        type: Sequelize.INTEGER
      },
      specialtyId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doctor_clinic_specialties');
  }
};