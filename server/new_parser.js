
/* (node:7832) DeprecationWarning:
 current URL string parser is deprecated, and wil l be removed in a future version.
 To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
 
Server running on localhost:3000
Error! Error: querySrv ESERVFAIL _mongodb._tcp.cluster0-t3oam.mongodb.net
*/

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ns-user:<password>@cluster0-t3oam.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
