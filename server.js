
const express=require("express");
const app=express();
const router=require('./router/index');
const {sequelize} = require('./config/db.config');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
var bodyParser = require('body-parser')
const port = process.env.PORT || 7000

sequelize.sync()  
sequelize.sync({ alter: true });
    
// Force sync all models 
// It will drop the table first  
// and re-create it afterwards 
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// const swaggerDefinition = {
//   openapi: '3.0.0',
//   info: {
//     title: 'Express API for sequlize',
//     version: '1.0.0',
//   },
// };

const options = {
  definition:{
    openapi: '3.0.0',
    info: {
      title: 'Express API for sequlize',
      version: '1.0.0',
    },
    // Paths to files containing OpenAPI definitions
    servers:[
      {
        url: "http://localhost:7000/"
      }
    ]
  },
  apis: ['./router/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));








  app.use('/',router);