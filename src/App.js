import React, { Component } from 'react';
import Titul from './authorization/Titul'
import {Router, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Login from "./authorization/Login";
import Employees from "./authorization/Employees";

const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <div>
                <Navigat />
            </div>

        );
    }
}

class Navigat extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="routers">
                    <Route exact path='/' component={Titul}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/employees' component={Employees}/>

                </div>
            </Router>
        );
    }
}

export default App;
