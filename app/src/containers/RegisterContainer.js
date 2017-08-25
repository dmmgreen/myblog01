import '../static/css/login.css';
import {register} from '../actions/index';
import {connect} from 'react-redux';
import Register from '../components/Register';


const mapStateToProps=(state)=> {
    let {register}=state;
    return register;
};

const mapDispatchToProps=(dispatch,ownProps)=>({
    postRegister:(user)=>{
        dispatch(register(user));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);