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
