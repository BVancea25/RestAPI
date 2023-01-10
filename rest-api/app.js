const express= require('express');
const mongoose=require('mongoose');
require('dotenv/config');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());

//Import routes
const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);

app.get('/',(req,res)=>{
    res.send('WE are on home');
});


mongoose.connect(process.env.DB_CONNECTION,function(err){
    if(err){
        console.log(err);
    }
})


app.listen(3200);