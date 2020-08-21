import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/graphqlreactdb", { //connection param: mongodb protocol,my localhost, db name
  useNewUrlParser: true, //The new url parser does not support connection strings that do not have a port, like mongodb://localhost/dbname, so we can set this with TRUE to use it
  useUnifiedTopology: true //Set to true to opt in to using the MongoDB driver's new connection management engine
})
  .then(db => console.log("database is connected"))
  .catch(err => console.log(err))
