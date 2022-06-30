// Include Sequelize module.
// const Sequelize = require('sequelize')

// Import sequelize object,
// Database connection pool managed by Sequelize.
// const seq = require('../config/db.config')

// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table

module.exports=(seq,Sequelize)=>{
	
return seq.define('user', {

	// Column-1, user_id is an object with
	// properties like type, keys,
	// validation of column.
	id: {

		// Sequelize module has INTEGER Data_Type.
		type: Sequelize.INTEGER,

		// To increment user_id automatically.
		autoIncrement: true,

		// user_id can not be null.
		allowNull: false,

		// For uniquely identify user.
		primaryKey: true
	},

	// Column-2, name
	name: { type: Sequelize.STRING, allowNull: false },

	// Column-3, email
	email: { type: Sequelize.STRING, allowNull: false },

	// Column-4, default values for
	// dates => current time
	// myDate: {
	// 	type: Sequelize.DATE,
	// 	defaultValue: Sequelize.NOW
	// },


},
	{
		paranoid: true,
		timestamps: true,
	}
)
}


// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
// module.exports = User
