import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import AddEmployee from '../pages/AddEmployee';
import EmployeeList from '../pages/EmployeeList';
import EmployeeDetails from '../pages/EmployeeDetails';
import StyledComponents from './../pages/StyledComponents';

class pageBody extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/employee-list' component={EmployeeList} />
                <Route exact path='/add-employee' component={AddEmployee} />
                <Route exact path='/styled-components' component={StyledComponents} />
                <Route exact path='/employee-details/:id' component = {EmployeeDetails} />
            </Switch>
        );
    }
}

export default pageBody;