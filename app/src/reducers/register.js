import * as types from '../constants/ActionTypes';


export default function (state, action) {
    switch (action.type){
        case types.REGISTER:
            return {
                registerstate:1//注册成功
            };
        case types.FAILURE:
            return {
                registerstate:0,//注册失败
                error:action.error
            };
        case types.URL_FAILURE:
            return {
                registerstate:0,//注册失败
                error:action.error
            };
        default:
            return {
                registerstate:0//注册失败
            }
    }
}