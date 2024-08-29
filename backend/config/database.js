require('dotenv').config();
const { Sequelize } = require('sequelize');

const test = process.env.SUPABASE_URL;

const sequelize = new Sequelize(process.env.SUPABASE_URL, {
    dialect: 'postgres',
    logging: false,  // Disable logging for cleaner output
});

module.exports = sequelize;