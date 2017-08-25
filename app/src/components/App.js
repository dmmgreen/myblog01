import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from '../containers/HeaderContainer';
import List from '../containers/ListContainer';
import AddArticle from '../containers/AddArticleContainer';
import Details from '../containers/DetailContainer';


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main">
                    <Route exact path='/' component={List}/>
                    <Route path='/addArticle' component={AddArticle}/>
                    <Route path='/details/:id' component={Details}/>
                </div>
            </div>
        );
    }
}

export default Main;
