import {UserModel,ArticleModel} from '../data/dataModel';
import * as types from '../constants/ActionTypes';

//获取失败
const failure=(error)=>({
    type:types.FAILURE,
    error
});
const url_failure=(error)=>({
    type:types.URL_FAILURE,
    error
});
/******************登录************************/
const log_in=(users,id)=>({
    type:types.LOGIN,
    users,
    id
});
const log_out=()=>({
    type:types.LOGIN_OUT
});

export const login_in=(users)=>dispatch=>{
    UserModel.login(users,_success=>{
        if(_success.code===1000){
            dispatch(log_in(users,_success.content.id));
        }else{
            dispatch(failure(_success.content));
        }
    },_error=>{
        dispatch(url_failure(_error));
    })
};
export const login_out=()=>dispatch=>{
    dispatch(log_out());
};
/******************注册************************/
const regist=()=>({
    type:types.REGISTER
});
export const register=(user)=>dispatch=>{
    UserModel.register(user,_success=>{
        if(_success.code===1000){
            dispatch(regist());
        }else{
            dispatch(failure(_success.content));
        }
    },_error=>{
        dispatch(url_failure(_error));
    })
};
/******************获取所有列表************************/
const fetchAll=(lists)=>({
    type:types.FETCH_LISTS,
    lists
});
export const fetchLists=()=>dispatch=>{
    ArticleModel.fetchList({},_success=>{
        if(_success.code===1000){
            dispatch(fetchAll(_success.content));
        }else{
            dispatch(failure(_success.content));
        }
    },_error=>{
        dispatch(url_failure(_error));
    })
};
/******************获取详情************************/
const detail=(content)=>({
    type:types.FETCH_DETAIL,
    content
});

export const fetchDetail=(articleId)=>dispatch=>{
    ArticleModel.fetchDetail({id:articleId},_success=>{
        if(_success.code===1000){
            dispatch(detail(_success.content));
        }else{
            dispatch(failure(_success.content));
        }
    },_error=>{
        dispatch(url_failure(_error));
    })

};

/******************发布文章************************/
const publish=(article)=>({
    type:types.PUBLISH,
    article
});

export const publishArticles=(article)=>dispatch=>{
    ArticleModel.publish(article,_success=>{
        if(_success.code===1000){
            dispatch(publish(article));
        }else{
            dispatch(failure(_success.content));
        }
    },_error=>{
        dispatch(url_failure(_error));
    })
};
/******************发表评论************************/
const publishcomment=(msg)=>({
    type:types.PUBLISH_COMMENT,
    msg
});
//获取评论
export const toggleComment=(userId)=>({
    type:types.TOGGLE_COMMENT,
    userId
});
export const publishComment=(comment)=>dispatch=>{
    ArticleModel.comment(comment,_success=>{
        if(_success.code===1000){
            dispatch(publishcomment("发布成功"));
        }else{
            dispatch(failure(_success.content));
        }
    },_error=>{
        dispatch(url_failure(_error));
    })
};


//只看作者评论
 /*export const onlyAuthorCommnent=()=>(dispatch,getState)=>{
    const comments=getState().articles.fetchdetail.content.comments;
    const userId=getState().articles.fetchdetail.content.user._id;
    let rs= comments.filter((comment,i)=>{
        if(comment.userId===userId){
            return comment;
        }
    });
    return rs;
};*/
