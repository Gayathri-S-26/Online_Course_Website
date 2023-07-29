const express = require('express')
const app = express()
const port = 3000


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://gayathriselvaraj:3QGYjmH8sNskmDmn@cluster0.yprbnoz.mongodb.net/';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);



app.set('view engine','ejs')


app.get('/Users', (req, res) => {
    // let device_list=[{'name':'aaa'},{'name':'bbb'}]

const db = client.db(dbName);
const collection = db.collection('Users');
// Find some documents
collection.find({}).toArray(function(err, Users_list) {
assert.equal(err, null);
res.render('Users', {'Users': Users_list})


});

  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})



// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb");
  
    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

});
