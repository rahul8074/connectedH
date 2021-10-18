const mongoose = require('mongoose');
 
//for local mongodb connection
var mongoDB = 'mongodb://127.0.0.1/connectedh';


 
const connectionParams ={
    useNewUrlParser: true,
    useUnifiedTopology : true
}

mongoose.connect(mongoDB,connectionParams)
    .then( () => {
        console.log("Database connection successful")
    })
    .catch( (err) => {
        console.error('Error connecting database'+err)
    })