import {connect} from 'react-redux';
import {login_out} from '../actions/index';
import Header from '../components/Header';

const mapStateToProps=(state,ownProps)=>({
    login:state.login
});

const mapDispatchToProps=(dispatch,ownProps)=>({
   outLogin:()=>{
       dispatch(login_out());
   }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);