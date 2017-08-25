import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import App from './App';
import Register from '../containers/RegisterContainer';
import Login from '../containers/LoginContainer';

class  MyRoute extends React.Component{
    render(){
        return (
           <div>
               <BrowserRouter>
                   <div>
                       <Switch>
                           <Route path="/register" component={Register}/>
                           <Route path="/login" component={Login}/>
                           <Route path="/" component={App}/>
                       </Switch>
                   </div>
               </BrowserRouter>
           </div>
        )
    }
}

export default MyRoute;