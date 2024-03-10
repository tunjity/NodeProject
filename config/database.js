// src/config/database.js
module.exports = {
    dialect: 'mssql',
    host: 'oyords.ckrkdy50shek.eu-west-1.rds.amazonaws.com',
    port: 1433,
    username: 'oyouser',
    password: 'pa$$w0rd123',
    database: 'EIRS_WALLET',
    define: {
      timestamps: false, // Disable Sequelize's automatic timestamp fields
    },
  };
  

const { Sequelize, DataTypes } = require('sequelize');

// Sequelize Configuration
const sequelize = new Sequelize('EIRS_WALLET', 'oyouser', 'pa$$w0rd123', {
    host: 'oyords.ckrkdy50shek.eu-west-1.rds.amazonaws.com',
    dialect: 'mssql',
});
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



// Sync the model with the database
sequelize.sync()
    .then(() => {
        console.log('Database synced.');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

    module.exports = sequelize;