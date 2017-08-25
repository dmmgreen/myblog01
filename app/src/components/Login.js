import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            msg:''
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.islogin){
            nextProps.history.goBack();
        }else{
            alert(nextProps.error);
        }
    }
    handlelogin(e){
        e.preventDefault();
        const {username,email,password} =this.state;
        const {postLogin} =this.props;
        if(username.length<1) return false;
        if(email.length<1) return false;
        if(password.length<1) return false;
        postLogin({username,
            email,
            password});
    }
    render(){
        return (
            <div className="sign">
                <div className="main">
                    <h4 className="title">
                        <div className="normal-title">
                            <Link className="active" to="/login">登录</Link>
                            <b>·</b>
                            <Link id="js-sign-up-btn" className="" to="/register">注册</Link>
                        </div>
                    </h4>
                    <div className="js-sign-up-container">
                        <form>
                            <div className="input-prepend">
                                <input placeholder="用户名" type="text"
                                       onChange={e=>{
                                           this.setState({
                                               username:e.target.value
                                           })
                                       }}
                                />
                            </div>
                            <div className="input-prepend">
                                <input placeholder="邮箱" type="email"
                                       onChange={e=>{
                                           this.setState({
                                               email:e.target.value
                                           })
                                       }}
                                />
                            </div>
                            <div className="input-prepend">
                                <input placeholder="密码" type="password"
                                       onChange={e=>{
                                           this.setState({
                                               password:e.target.value
                                           })
                                       }}
                                />
                            </div>
                            <div className="remember-btn">
                                <input type="checkbox" value="true"/><span>记住我</span>
                            </div>
                            <input type="button" value="登录" className="sign-in-button" onClick={e=>this.handlelogin(e)}/>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}


export default Login;