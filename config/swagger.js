// src/config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = {
  definition: {
    openapi: '3.0.0',
    servers:[{url:"http://localhost:300/"}],
    info: {
      title: 'rest api doc',
      version: '1.0.0',
      description: 'Node CRUD API with Swagger',
    },
  },
  apis: ['../src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/swagger/index.html', swaggerUi.serve, swaggerUi.setup(specs));
};
