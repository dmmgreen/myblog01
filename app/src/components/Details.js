import React from 'react';
import {Link} from 'react-router-dom';
import Comment from './Comment';


class Details extends React.Component {
    componentDidMount() {
        const {getDetail, id} = this.props;
        getDetail(id);
    }

    render() {
        const {postComment, id, content, comments, userId, getDetail, getComments, active} = this.props;
        let created = 0, articleUserId = null;
        if (content) {
            created = new Date(Number(content.createAt)).toLocaleDateString();
            articleUserId = content.user._id;
        }
        return (
            <div>
                {
                    content !== null
                        ?
                        <div className="container">
                            <div className="note">
                                <div className="post">
                                    <div className="article">
                                        <h1 className="title">
                                            {content.title}
                                        </h1>
                                        <div className="author">
                                            <Link className="avatar" to="#">
                                                <img
                                                    src={content.user.pic}
                                                    alt="144"/>
                                            </Link>
                                            <div className="info">
                                                <span className="tag">作者</span>
                                                <span className="name">
                                        <Link to="#">
                                            {
                                                content.user.username
                                            }
                                        </Link>
                                    </span>
                                                <div className="meta">
                                                    <span className="publish-time">{created}</span>
                                                    <span className="comments-count">评论 {content.comments.length}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="show-content"
                                             dangerouslySetInnerHTML={{__html: content.content}}></div>
                                    </div>
                                    <Comment articleId={id} active={active} userId={userId} onClickPublish={obj => {
                                        postComment(obj);
                                        getDetail(id);
                                    }} list={comments} onlyAuthor={() => getComments(articleUserId)}/>
                                </div>
                            </div>
                        </div>
                        :
                        <div>loading...</div>
                }
            </div>
        )
    }
}

export default Details;