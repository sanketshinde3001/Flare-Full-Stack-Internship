const mongoose = require( "mongoose");
const plm = require("passport-local-mongoose");
require('dotenv').config();

mongoose.connect(process.env.mongo_pass);
// it will create the db name - practicekaro

const userschema = mongoose.Schema({
  username: String,
  email:String,
  password: String,
});


userschema.plugin(plm);
// each document have above three things

module.exports = mongoose.model("user",userschema);