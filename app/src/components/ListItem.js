import React from 'react';
import {Link} from 'react-router-dom';
import {dateDiff} from '../Tools/index';


class ListItem extends React.Component{
    render(){
        const {value}=this.props;
        let title = value.content.replace(/<[^>]+>/g,"");//去掉所有的html标记
        let imgflag=value?value.content.match((/<img[^>]+>/g)):'';
        if(title.length > 100) {
            title = title.substring(0,100)+'...';
        }
        return (
            <li className={imgflag?"have-img":""}>
                {
                    imgflag
                        ?
                        <Link className="wrap-img" to="#" dangerouslySetInnerHTML={{__html:imgflag}}></Link>
                        :
                        null
                }
                <div className="content">
                    <div className="author">
                        <Link className="avatar"  to="#">
                            <img src={value.user.pic} alt="96"/>
                        </Link>
                        <div className="name">
                            <Link className="blue-link"  to="#">
                                {value.user.username}
                            </Link>
                            <span className="time">
                                        {dateDiff(value.createAt)}
                                    </span>
                        </div>
                    </div>
                    <Link className="title"  to={`/details/${value._id}`}>{value.title}</Link>
                    <p className="abstract">
                        {title}
                    </p>
                    <div className="meta">
                        <Link  to="#">
                            评论:<i className="iconfont ic-list-comments"></i> {value.commentNum}
                        </Link>
                    </div>
                </div>
            </li>
        )
    }
}

export  default  ListItem;