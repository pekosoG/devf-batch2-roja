import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Book from './components/Book';

export default ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/book/:bookId" component={Book}/>
            </Switch>
        </Router>
    )
} 