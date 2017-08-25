import {connect} from 'react-redux';
import Details from '../components/Details';
import {fetchDetail,publishComment,toggleComment} from '../actions/index';

const mapStateToProps=(state,ownProps)=>({
    id:ownProps.match.params.id,
    userId:state.login.id,
    content:state.articles.fetchdetail.content,
    comments:state.articles.fetchdetail.comments,
    active:state.articles.fetchdetail.active
});

const mapDispatchToProps=(dispatch,ownProps)=>({
    getDetail:(id)=>{
        dispatch(fetchDetail(id));
    },
    postComment:(comment)=>{
        dispatch(publishComment(comment));
    },
    getComments:(id)=>{
        return dispatch(toggleComment(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);