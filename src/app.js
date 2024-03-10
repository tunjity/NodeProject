// // src/app.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const todoRoutes = require('./routes/todoRoutes');

// const app = express();
// const port = 3000;
// const { Sequelize, DataTypes } = require('sequelize');

// // Sequelize Configuration
// const sequelize = new Sequelize('EIRS_WALLET', 'oyouser', 'pa$$w0rd123', {
//     host: 'oyords.ckrkdy50shek.eu-west-1.rds.amazonaws.com',
//     dialect: 'mssql',
// });
// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });



// // Sync the model with the database
// sequelize.sync()
//     .then(() => {
//         console.log('Database synced.');
//     })
//     .catch(err => {
//         console.error('Error syncing database:', err);
//     });
// app.use(bodyParser.json());

// app.use('/todos', todoRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../config/database');

const setupSwagger = require('../config/swagger');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/todos', todoRoutes);

setupSwagger(app);
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Connected to MSSQL database');
    await sequelize.sync(); // Sync the models with the database

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

startServer();
