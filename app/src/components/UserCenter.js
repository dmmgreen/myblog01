import React from 'react';
import ListItem from './ListItem';

class UserCenter extends React.Component {
    componentDidMount(){
        const {getList}=this.props;
        getList();
    }
    render() {
        const {lists} = this.props;
        let _list = [];
        if (lists　&&　lists.length > 0) {
            _list = lists.map(function (value, index) {
                return (
                    <ListItem key={index} value={value}/>
                )
            })
        }
        return (
            <div className="container">
                <ul className="note-list">
                    {_list}
                </ul>
            </div>
        )
    }
}

export default UserCenter;