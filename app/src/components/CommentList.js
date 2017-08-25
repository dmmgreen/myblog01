import React from 'react';
import {Link} from 'react-router-dom';


export default class CommentList extends React.Component {
    render() {
        const {list,onlyAuthor,active} = this.props;
        let _lists = [];
        if (list && list.length > 0) {
            _lists = list.map(function (value, index) {
                let createAt = new Date(Number((value.createAt))).toLocaleDateString();
                return (
                    <div className="comment" key={index}>
                        <div>
                            <div className="author">
                                <Link to="#" target="_blank" className="avatar">
                                    <img alt="" src={value.pic}/>
                                </Link>
                                <div className="info">
                                    <Link to="#" className="name">
                                        {value.username}
                                    </Link>
                                    <div className="meta">
                                        <span>
                                            {createAt}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-wrap">
                                <p>
                                    {value.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            });
        }
        return (
            <div className="normal-comment-list">
                <div>
                    <div>
                        <div className="top"><span>{list ? list.length : '0'}条评论</span>
                            <a className={active?"author-only active":"author-only"} onClick={()=>onlyAuthor()}>只看作者</a>
                        </div>
                    </div>
                    <div className="ddd">
                        {_lists}
                    </div>
                </div>
            </div>
        )
    }
}