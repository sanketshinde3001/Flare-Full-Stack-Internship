const mongoose = require( "mongoose");
const plm = require("passport-local-mongoose");
require('dotenv').config();
mongoose.set("strictQuery", true);
// async function connectToMongoDB(url) {
//   return mongoose.connect(url);
// }

const connectToMongoDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

try {
  connectToMongoDB(process.env.mongo_pass).then(() =>
  console.log("Mongodb connected")
);
} catch (error) {
  console.log(error);
}



const userschema = mongoose.Schema({
  username: String,
  email:String,
  password: String,
});


userschema.plugin(plm);
// each document have above three things

module.exports = mongoose.model("user",userschema);