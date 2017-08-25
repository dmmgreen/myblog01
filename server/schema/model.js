var mongoose=require('mongoose');
var url='mongodb://localhost/myblog';
var db=mongoose.connect(url);
db.connection.on("open", function () {
    console.log("——数据库连接成功！——");
});

//user模块
mongoose.model('user',new mongoose.Schema({
    username:{type:String,isRequired:true},
    password:{type:String,isRequired:true},
    email:{type:String,isRequired:true},
    pic:{type:String,default:'http://www.qdaily.com/images/missing_face.png'}
}));

//article模块
mongoose.model('article',new mongoose.Schema({
    title:{type:String,isRequired:true},
    content:{type:String,isRequired:true},
    createAt:{type:String,isRequired:true},
    tag:{type:String},
    pv:{type:Number,default:0},
    user:{type:Object,ref:'user'},
    pic:{type:String,default:'http://www.qdaily.com/images/missing_face.png'},
    comments:[{
        user:{type:Object,ref:'user'},//评论人
        content:{type:String,isRequired:true}, //评论的内容
        createAt:{type:String,isRequired:true}
    }]
}));




global.Model=function(modelName){
    return mongoose.model(modelName);
};
