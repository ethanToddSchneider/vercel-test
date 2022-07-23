const express = require('express');
const app = express();


const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');
const credentials = 'cert.pem'
const client = new MongoClient('mongodb+srv://cluster0.wpt48.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});
async function run() {
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("vercel works")
});

app.listen(5000, () => {
    console.log("port 5000 runnnig")
});

module.exports = app;