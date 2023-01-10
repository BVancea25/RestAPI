const mongoose = require('mongoose');

// mongoose.connect(process.env.DB_CONNECTION,function(err){
//     console.log(err);
// })

const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});

module.exports=mongoose.model('Posts',PostSchema);