const mongoose = require("mongoose");
const connect = () => {
    mongoose.connect("http//:localhost:3007");
}
module.exports = connect;