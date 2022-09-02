const mongoose = require("mongoose");
require('dotenv').config();


module.exports.connectDB = async () => {

    connectDB();
    function connectDB(){
      mongoose.connect(process.env.MONGO_URI,
        {
         useNewUrlParser: true
        },function(err, db){
          if(err){
            console.log("Error in Connectiion to DB : ",err);
            setTimeout(()=>{
              connectDB();
            },5000)
          }else{
            return(db);
          }
        }); 
      mongoose
      .connection
      .once('connected', () => console.log('Connected to database'));
    }
};