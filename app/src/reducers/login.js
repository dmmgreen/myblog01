import * as types from '../constants/ActionTypes';

const initialState={
    islogin:false,
    user:null,
    id:null
};
export default function (state=initialState, action) {
    switch (action.type){
        case types.LOGIN:
            return {
                ...state,
                loginstate:0,//登录成功
                user:action.users,
                id:action.id,
                islogin:true
            };
        case types.LOGIN_OUT:
            return {
                ...state,
                loginstate:1,//退出登录
                user:null,
                id:null,
                islogin:false
            };
        case types.FAILURE:
            return {
                ...state,
                loginstate:-1,//登录失败
                user:null,
                id:null,
                islogin:false,
                error:action.error
            };
        case types.URL_FAILURE:
            return {
                ...state,
                loginstate:-2,//登录失败
                user:null,
                id:null,
                islogin:false,
                error:action.error
            };
        default:
            return state;
    }
}