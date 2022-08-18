const mongoose = require('mongoose');
const connectionString = "mongodb+srv://himanshu16:Himanshu%4016@cluster0.vfz23.mongodb.net/test"

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