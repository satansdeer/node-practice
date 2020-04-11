require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://satansdeer:${process.env.MONGO_PASSWORD}@cluster0-4az50.mongodb.net/test?retryWrites=true&w=majority`
MongoClient.connect(uri, function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   // perform actions on the collection object
   client.close();
});