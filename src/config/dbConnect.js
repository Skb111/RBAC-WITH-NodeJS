const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}, ${conn.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    };
}; 

module.exports = dbConnect; 