
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'sequlize',
  'root',
  '123456', {

      // Explicitly specifying 
      // mysql database
      dialect: 'mysql',

      // By default host is 'localhost'           
      host: 'localhost'
  }
);


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