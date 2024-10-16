// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('usercrud', 'user', 'pass', {
//     host: 'localhost',
//     dialect: 'postgres',
// });


// const User = sequelize.define('User', {
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// });

// sequelize.sync()
//     .then(() => console.log(`Database & tables created!`))
//     .catch(err => console.error('Erro ao sincronizar com o banco de dados:', err));
// module.exports = User;