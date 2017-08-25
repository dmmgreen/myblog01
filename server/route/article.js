var express=require('express');
var router=express.Router();



router.post('/publish',function (req, res) {
   var info=req.body;
   if(info.article){
       Model('article').update({_id:info.article},{$set:{title:info.title,content:info.content}},function (err, result) {
           if(err){
               res.send(err);
           }else {
               res.send({code:1000,content:'修改成功'});
           }
       })
   }else{
       info.createAt=Date.now();
       info.user=info.token;
       Model('user').findById(info.user,function (err, doc) {
           if(err){
               res.send(err);
               return;
           }else{
               info.username=doc.username;
           }
           Model('article').create(info,function (err, doc) {
               if(err){
                   res.send(err);
               }else if(doc){
                   res.send({code:1000,content:'发表成功'});
               }
           })
       })
   }
});


router.get('/fetchList',function (req, res) {
   var orderBy='createAt';
   var order=-1;
   var orderObj={};
   orderObj[orderBy]=order;
   Model('article').find().sort(orderObj).populate('user').exec(function (err, docs) {
       var articleList=[];
       docs.forEach(function (item) {
           articleList.push({
               title:item.title,
               content:item.content,
               createAt:item.createAt,
               user:{
                   _id:item.user._id,
                   pic:item.user.pic,
                   username:item.user.username
               },
               _id:item._id,
               pv:item.pv,
               commentNum:item.comments.length
           })
       });
       res.send({code:1000,content:articleList});
   })
});

router.get('/fetchArticle/:id',function (req,res) {
    var article_id=req.params.id;
    var article = {};
    Model('article').findById(article_id).populate('user').populate('comments.user').exec(function (err,doc) {
        if(err){
            res.send(err)
        }else{
            if(doc){
                var comments = doc.comments;
                var commentsList = [];
                comments.forEach(function (item) {
                    commentsList.push({
                        username:item.user.username,
                        userId:item.user._id,
                        pic:item.user.pic,
                        createAt:item.createAt,
                        comment:item.content,
                    })
                });
                article = {
                    title:doc.title,
                    content:doc.content,
                    createAt:doc.createAt,
                    pv : doc.pv,
                    article_id:doc._id,
                    user:{_id:doc.user._id,pic:doc.user.pic,username:doc.user.username},
                    comments:commentsList
                };
                res.send({code:1000,content:article})
            }
        }
    })
});

router.post('/comment',function (req, res) {
    var info=req.body;
    var articleId=info.articleId;
    var userId=info.userId;
    var comment=info.comment;
    var createAt=Date.now();
    Model('article').update({_id:articleId},{
        $push:{
            comments:{
                user:userId,
                content:comment,
                createAt:createAt
            }
        }
    },function (err, newdoc) {
        if(err){
            res.send({code:1001,content:'评论失败'});
        }else{
            res.send({code:1000,content:'评论成功'});
        }
    })
});

module.exports=router;