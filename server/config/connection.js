const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern-one-spark', {});

module.exports = mongoose.connection;