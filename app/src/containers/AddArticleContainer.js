import {connect} from 'react-redux';
import AddArticle from '../components/AddArticle';
import {publishArticles} from '../actions/index';

const mapStateToProps=(state,ownProps)=>({
    islogin:state.login.islogin,
    userId:state.login.id,
    ispublish:state.articles.publisharticle.ispublish
});

const mapDispatchToProps=(dispatch,ownProps)=>({
   postArticle:(articles)=>{
       dispatch(publishArticles(articles));
   }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddArticle);