import React from 'react';
import CommentList from './CommentList';

export default class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comment:''
        }
    }
    handleComment(e){
        e.preventDefault();
        let comment=this.state.comment;
        const {articleId,userId,active}=this.props;
        if(userId){
            this.props.onClickPublish({userId,articleId,comment});
            this.setState({
                comment:''
            })
        }else{
            alert('请先登录')
        }
    }
    render() {
        const {list,onlyAuthor,active}=this.props;
        return (
            <div>
                <div className="comment-list">
                    <div>
                        <form className="new-comment">
                            <a className="avatar">
                                <img
                                    alt="d"
                            src="//upload.jianshu.io/users/upload_avatars/7158301/2a44d190-1707-4a03-a300-6d4d4333ac76?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"/></a>
                            <textarea
                                value={this.state.comment}
                                onChange={e=>this.setState({
                                    comment:e.target.value
                                })}
                                placeholder="写下你的评论...">
                            </textarea>
                            <div className="write-function-block">
                                <a className="btn btn-send" onClick={e=>this.handleComment(e)}>发送</a>
                                <a className="cancel" onClick={()=>this.setState({
                                    comment:''
                                })}>取消</a>
                            </div>
                        </form>
                    </div>
                    <CommentList list={list} active={active} onlyAuthor={()=>onlyAuthor()}/>
                </div>
            </div>
        )
    }
}