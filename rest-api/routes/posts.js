const express=require('express');
const router = express.Router();
const Post=require('../models/Post');

//GETS BACK ALL THE POSTS
router.get('/',async(req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});

//GET A SPECIFIC POST
router.get('/:postId',async(req,res)=>{
    try{
    const post=await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json(err);
    }
})

//POSTS
router.post('/',async (req,res)=>{
    const post=new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try{
        
        const savedPost=await post.save();
        res.json({message: "posted !"});
    }catch(err){
        res.json({message: err});
    }

})

//DELETES POST
router.delete('/:postId',async (req,res)=>{
    try{
        const removed= await Post.remove({_id: req.params.postId});
        res.json(removed);
    }catch(err){
        res.json({message: err});
    }
}
)

//UPDATE
router.patch('/:postId',async (req,res)=>{
    try{
        const updated=await Post.updateOne(
            {_id: req.params.postId},
            {$set :{title: req.body.title}}
        );
        res.json(updated);


    }catch(err){
        res.json({message:err});
    }
})

module.exports=router;