import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import AddEmployee from './../pages/AddEmployee';
import EmployeeList from './../pages/EmployeeList';

class PageBody extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/employee-list' component={EmployeeList}/>
                <Route exact path='/add-employee' component={AddEmployee}/>
            </Switch>
        );
    }
}   

export default PageBody;
