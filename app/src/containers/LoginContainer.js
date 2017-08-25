import '../static/css/login.css';
import {connect} from 'react-redux';
import {login_in} from '../actions/index';
import Login from '../components/Login';

const mapStateToProps=(state,ownProps)=>{
    let {login}=state;
    return login;
};

const mapDispatchToProps=(dispatch,ownProps)=> ({
    postLogin:(user)=>{
        dispatch(login_in(user))
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);