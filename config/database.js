const mongoose = require('mongoose');
const connectionString = process.env.DB

mongoose.connect(connectionString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

module.exports = {
  connectToServer: function () {
    mongoose.connect(connectionString);
    const database = mongoose.connection;
    
    database.on('error', (error) => {
      console.log(error)
    })
    
    database.once('connected', () => {
      console.log('Database Connected');
    })
    
  },

  getDb: function () {
    return database;
  },
};