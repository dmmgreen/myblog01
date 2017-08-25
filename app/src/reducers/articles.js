import * as types from '../constants/ActionTypes';
import {combineReducers} from 'redux';

const fetchlists= (state={lists:{}}, action) =>{
    switch (action.type){
        case types.FETCH_LISTS:
            return {
                ...state,
                lists:action.lists
            };
        case types.FAILURE:
            return {
                ...state,
                error:action.error
            };
        case types.URL_FAILURE:
            return {
                lists:{},
                error:action.error
            };
        default:
            return state;
    }
};
const fetchdetail= (state={content:null,active:false}, action) =>{
    switch (action.type){
        case types.FETCH_DETAIL:
            return {
                ...state,
                content:action.content,
                comments:action.content.comments
            };
        case types.TOGGLE_COMMENT:
            return {
                ...state,
                comments:(
                    state.content.comments.length===state.comments.length
                        ?
                        state.content.comments.filter(comment=>{
                            return (comment.userId===action.userId)
                                ?
                                comment:
                                null
                        })
                        :
                        state.content.comments
                ),
                active: state.content.comments.length===state.comments.length
            };
        case types.FAILURE:
            return {
                content:null,
                error:action.error
            };
        case types.URL_FAILURE:
            return {
                content:null,
                error:action.error
            };
        default:
            return state;
    }
};
const publisharticle= (state={ispublish:false}, action) =>{
    switch (action.type){
        case types.PUBLISH:
            return {
                ...state,
                msg:action.msg,
                ispublish:true
            };
        case types.FAILURE:
            return {
                error:action.error,
                ispublish:false
            };
        case types.URL_FAILURE:
            return {
                error:action.error,
                ispublish:false
            };
        default:return state;
    }
};
const publishcomment= (state={}, action) =>{
    switch (action.type){
        case types.PUBLISH_COMMENT:
            return {
                ...state,
                msg:action.msg
            };
        case types.FAILURE:
            return {
                error:action.error
            };
        case types.URL_FAILURE:
            return {
                error:action.error
            };
        default:return state;
    }
};

export default combineReducers({
    fetchlists,
    fetchdetail,
    publishcomment,
    publisharticle
});