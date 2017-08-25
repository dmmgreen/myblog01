import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    handleQuit(e){
        const {outLogin}=this.props;
        outLogin();
    }
    render(){
        const {islogin}=this.props.login;
        return (
            <header>
                <div className="container">
                    <Link to="/" className="logo">首页</Link>
                    <Link to="/addArticle" className="add-article">写文章</Link>
                    {
                        islogin
                            ?
                            <div className="user">
                                <a  className="avator">我的</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="/u/66be7a50b091">
                                            <i className="iconfont ic-navigation-profile"></i><span>我的主页</span>
                                        </a>          </li>
                                    <li>
                                        <a onClick={e=>this.handleQuit(e)}>
                                            <i className="iconfont ic-navigation-signout"></i><span>退出</span>
                                        </a>          </li>
                                </ul>
                            </div>
                            :
                            <span>
                                <Link to='/register' className="register">注册</Link>
                                <Link to="/login" className="login">登录</Link>
                            </span>
                    }

                </div>
            </header>
        )
    }
}


export default Header;