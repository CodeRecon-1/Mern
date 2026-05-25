const mongoose = require("mongoose");

const searchLogSchema = new mongoose.Schema({
    query:{
        type:String, 
        required:true
    },
    count: {
        type:Number,
        default:1
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model("SearchLog", searchLogSchema);