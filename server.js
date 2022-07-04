
const express=require("express");
const app=express();
const router=require('./router/index');
// const sequelize = 
require('./config/db.config');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
var bodyParser = require('body-parser')
require('dotenv').config()
const session = require('express-session'); 
const port = process.env.PORT || 7000
const passport = require('passport');
const {passportAuth}=require("./passportAuth");


app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

passportAuth(passport);

app.use(passport.initialize());
app.use(passport.session());

// sequelize.sync()  
// sequelize.sync({ alter: true });
    
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

app.post('/login', passport.authenticate('local',{ failureRedirect: '/' }),(req,res)=>{
    return res.status(200).json({
      data:"successfully login"
    })
})
;

function isAuthenticated(req,res,done){
  if(req.user)
  {
    return done();
  }
  return res.status(401).json({
    message:"unauthorized"
  })
}

app.get("/tes",isAuthenticated,(req,res)=>{
  return res.send(req.user);
})

app.get('/logout',(req,res)=>{
  // req.logout();
  //   res.status(200).json({
  //     message:"logout successfully"
  //   })

  req.logout(function(err) {
    if (err) { return res(err); }
    res.status(200).json({
          message:"logout successfully"
        })
  });

})


  app.use('/',router);