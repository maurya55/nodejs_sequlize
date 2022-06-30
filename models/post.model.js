// Include Sequelize module.
// const Sequelize = require('sequelize')
// const seq = require('../config/db.config')

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    }
    ,
	{
		paranoid: true,
		timestamps: true,
	}
    );
    return Post;
  };