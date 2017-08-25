const API='http://localhost:3600/';
const USER_TOKEN='userToken';

let Tools={
  checkStates:function (response) {
      if(response.ok){
          return response;
      }else {
          let error=new Error(response.statusText);
          error.state=response;
          error.response=response;
          throw error;
      }
  }  ,
    parseJSON:function (response) {
        return response.json();
    },
    _getSearchFromObject:function (param, key) {
        if(param==null)
            return '';
        let _search='?';
        for(let key in param){
            _search+=`${key}=${encodeURIComponent(param[key])}&`;
        }
        return _search.slice(0,-1);
    }
};



/**
 * fetch请求数据Model
 * @param _method
 * @param _api
 * @param _params
 * @param _onSuccess
 * @param _onError
 * @private
 */

function _request(_method, _api, _params, _onSuccess, _onError) {
    let _options={
        method:_method,
        mode:'cors',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:(_method.toUpperCase()==='GET')?null:JSON.stringify(_params)
    };
    if(_method.toLowerCase()==='get'){
        _api+=Tools._getSearchFromObject(_params)
    }
    fetch(_api,_options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then(data=>{
            _onSuccess(data);
        })
        .catch(err=>{
            if(err.state===401){
                console.log('登录过期，请重新登录');
                window.location.hash='login';
                return;
            }
            if(err.response){
                err.response.json().then(data=>{
                    if(data.message){
                        _onError(data.message);
                    }
                })
            }
        })
}

let UserModel={
    storeToken:(token)=>{
        localStorage.setItem(USER_TOKEN,token);
    },
    fetchToken:()=>{
        return localStorage.getItem(USER_TOKEN);
    },
    clearToken:()=>{
        localStorage.removeItem(USER_TOKEN);
    },
    register:(_params,_succ,_err)=>{
        _request('POST',`${API}user/register`,_params,_succ,_err);
    },
    login:(_params,_succ,_err)=>{
        _request('POST',`${API}user/login`,_params,_succ,_err);
    },
    fetchArticle:(_params,_succ,_err)=>{
        _request('POST',`${API}user/fetchArticle`,_params,_succ,_err);
    }
};

let ArticleModel={
    publish:(_params,_succ,_err)=>{
        _request('POST',`${API}article/publish`,_params,_succ,_err);
    },
    fetchList:(_params,_succ,_err)=>{
        _request('GET',`${API}article/fetchList`,_params,_succ,_err);
    },
    fetchDetail:(_params,_succ,_err)=>{
        _request('GET',`${API}article/fetchArticle/${_params.id}`,null,_succ,_err);
    },
    comment:(_params,_succ,_err)=>{
        _request('POST',`${API}article/comment`,_params,_succ,_err);
    }
};

export {UserModel,ArticleModel};