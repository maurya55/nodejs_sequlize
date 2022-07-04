
const Sequelize = require('sequelize');
require('dotenv').config()
const env=require("../envorment.json");


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {

      // Explicitly specifying 
      // mysql database
      dialect: 'mysql',

      // By default host is 'localhost'           
      host: process.env.DB_HOST
  }
);

sequelize.authenticate().then(()=>{
  console.log("database conected");
})
.catch((err)=>{console.log(err)});


// sequelize.sync()  
sequelize.sync({ alter: true });
let db={
  sequelize,
  Sequelize,
};
db.User=require("../models/user.model")(sequelize,Sequelize);
db.Post=require("../models/post.model")(sequelize,Sequelize);






db.User.hasOne(db.Post,{foreignKey:"user_id"});
db.Post.belongsTo(db.User,{foreignKey:"user_id"});

module.exports=db;
// module.exports = seq