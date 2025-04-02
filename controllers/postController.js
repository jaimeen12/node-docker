const Post = require('../models/postModel');

exports.getAllPosts = async (req,res,next) => {
    try{
        const posts = await Posts.find();
        res.status(200).json({
            status:'success',
            data:{posts}
    })
}catch(err){
    res.status(400).json({
        status:'fail',
        message:err.message
    })
}
}

exports.getOnePost = async (req,res,next) => {
    try{
        const post = await Posts.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                status:'fail',
                message:'Post not found'
            })
        }
        res.status(200).json({
            status:'success',
            data:{post}
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.createPost = async (req,res,next) => {
    
    try{
        const post = await Post.create(req.body);
        res.status(201).json({
            status:'success',
            data:{post}
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.updatePost = async (req,res,next) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true});
        if(!post){
            return res.status(404).json({
                status:'fail',
                message:'Post not found'
            })
        }
        res.status(200).json({
            status:'success',
            data:{post}
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.deletePost = async (req,res,next) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post){
            return res.status(404).json({
                status:'fail',
                message:'Post not found'
            })
        }
        res.status(204).json({
            status:'success',
            message:'Post deleted'
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}
