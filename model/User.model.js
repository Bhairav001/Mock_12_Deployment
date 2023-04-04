const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    Name:String,
    Email:String,
    Password:String

})

const UserModel = mongoose.model("user",postSchema)

module.exports={
    UserModel
}
