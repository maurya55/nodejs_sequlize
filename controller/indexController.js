// const User = require('../models/user.model');
// const Post=require("../models/post.model");
const db=require('../config/db.config');
const User=db.User;
const Post=db.Post;
const fs = require('fs');

exports.userInsert = (req, res) => {
    // res.send('Hello Worl2d!');

    // const data = fs.readFileSync('test.js',{encoding:'utf-8'});
    // console.log(data)

    // return res.status(200).json({
    //     data: data
    // });


    // const content = 'Some content!'
    // fs.appendFile('test.js', content, err => {
    //     if (err) {
    //         console.error(err)
    //         return
    //     }
    // })

    // User.create({
    //     name: "wap",
    //     email: "wa1p@gmail.com"
    // })
    User.create(req.body)
        .then((data) => {
            // res.send(data);
            res.status(200).json({
                status:true,
                data:data,
            })
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the address.',
            });
        });
}


exports.postInsert=(req,res)=>{
    // console.log(req.body);
    Post.create(req.body)
    .then((data)=>{
        return res.status(200).json({
            status:true,
            data:data
        })
    })
    .catch((error)=>{
        res.status(500).send({
            message:
                err.message || 'Some error occurred while creating the address.',
        });
    })

}


exports.userGet=async (req,res)=>{



        let data=await User.findAll({
            include:Post,
            // where:{
            //     id:30,
            // }
        })

        return res.status(200).json({
            status:true,
         data:data
        })

}


exports.postGet=async (req,res)=>{

   

    let data=await Post.findAll({
        include:User,
        // where:{
        //     id:30,
        // }
    })

    return res.status(200).json({
        status:true,
     data:data
    })

}