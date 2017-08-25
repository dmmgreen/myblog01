import React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    componentWillReceiveProps(nextProps) {
        if(!!nextProps.registerstate && nextProps.registerstate!==this.props.registerstate){
            nextProps.history.push('/login');
        }else{
            console.log(this.props.register);
        }
    }
    handleRegister(e){
        e.preventDefault();
        const {username,email,password}=this.state;
        const {postRegister}=this.props;
        if(username.length<1) return false;
        if(email.length<1) return false;
        if(password.length<1) return false;
        postRegister({
            username,
            email,
            password
        });
    }
    render(){
        return (
            <div className="sign">
                    <div className="main">
                        <h4 className="title">
                            <div className="normal-title">
                                <Link  to="/login">登录</Link>
                                <b>·</b>
                                <Link className="active" to="/register">注册</Link>
                            </div>
                        </h4>
                        <div className="js-sign-up-container">
                            <form className="new_user">
                                <div className="input-prepend restyle">
                                    <input placeholder="用户名" type="text" value={this.state.username}
                                           onChange={e=>{
                                               this.setState({
                                                   username:e.target.value
                                               })
                                           }}
                                    />
                                </div>
                                <div className="input-prepend restyle no-radius js-normal">
                                    <input placeholder="邮箱" type="email" value={this.state.email}
                                           onChange={e=>{
                                               this.setState({
                                                   email:e.target.value
                                               })
                                           }}
                                    />
                                </div>
                                <div className="input-prepend">
                                    <input placeholder="密码" type="password" value={this.state.password}
                                           onChange={e=>{
                                               this.setState({
                                                   password:e.target.value
                                               })
                                           }}
                                    />
                                </div>
                                <input type="button" value="注册" className="sign-up-button"  onClick={e=>this.handleRegister(e)}/>

                            </form>
                        </div>

                    </div>
            </div>
        )
    }
}


export default Register;