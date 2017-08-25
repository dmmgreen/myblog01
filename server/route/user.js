const express=require('express'),
    formidable=require('formidable'),
    router=express.Router(),
    fs=require('fs');

router.post('/register',function (req, res) {
   const user=req.body;
   Model('user').findOne({username:user.username},function (err, doc) {
       if(err){
           res.send({code:1001,content:'注册失败'});
       }else if(doc){
           res.send({code:1002,content:'用户名已存在'});
       }else{
           Model('user').findOne({email:user.email},function (err, doc) {
               if(err){
                   res.send({code:1001,content:'注册失败'});
               }else if(doc){
                   res.send({code:1003,content:'邮箱已被使用'});
               }else{
                   Model('user').create(user,function (err, doc) {
                       if(err){
                           res.send({code:1001,content:'注册失败'});
                       }else{
                           res.send({code:1000,content:'注册成功'});
                       }
                   })
               }
           })
       }
   })
});

router.post('/login',function (req, res) {
   const user=req.body;
   Model('user').findOne({username:user.username},function (err, doc1) {
       if(doc1){
           Model('user').findOne({username:user.username,email:user.email},function (err, doc2) {
               if(doc2){
                   Model('user').findOne({username:user.username,email:user.email,password:user.password},function (err, doc) {
                       if(doc){
                           console.log({code:1000,content:{id:doc._id,username:doc.username,pic:doc.pic}})
                           res.send({code:1000,content:{id:doc._id,username:doc.username,pic:doc.pic}});
                       }else{
                           res.send({code:1003,content:'密码错误'});
                       }
                   })
               }else{
                   res.send({code:1002,content:'邮箱错误'});
               }
           })
       }else{
           res.send({code:1001,content:'用户名不存在'});
       }
   })
});


router.get('/fetchArticle',function (req, res) {
    var orderBy='createAt';
    var order=-1;
    var orderObj={};
    orderObj[orderBy]=order;
    var userId=req.query.userId;
    Model('article').find({user:userId}).sort(orderObj).exec(function (err, doc) {
        if(err){
            res.send(err);
        }else {
            var json=[];
            doc.forEach(function (item) {
                json.push({
                    articleId:item._id,
                    title:item.title,
                    content:item.content
                })
            });
            res.send({code:1000,content:json})
        }
    })
});

module.exports=router;