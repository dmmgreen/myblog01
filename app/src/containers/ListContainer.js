import {connect} from 'react-redux';
import List from '../components/List';
import {fetchLists} from '../actions/index';

const mapStateToProps=(state,ownProps)=>({
    lists:state.articles.fetchlists.lists
});

const mapDispatchToProps=(dispatch,ownProps)=>({
    getList:()=>{
        dispatch(fetchLists());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);