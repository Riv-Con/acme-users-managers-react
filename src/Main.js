import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super();
        this.state = { users: [] };
        this.onManagerSelect = this.onManagerSelect.bind(this);
    }

    componentDidMount() {
        axios.get('api/users')
            .then(response => response.data)
            .then(users => this.setState({ users }));
    }

    onManagerSelect(userID, managerID) {
        if (managerID === '0') managerID = null;
        axios.put('api/users/edit', { userID, managerID })
            .then(response => response.data)
            .then(users => this.setState({ users }))
            .then(this.render())
            .then(() => hashHistory.push('/users'));
    }

    render() {
        let { users } = this.state;
        let userLength = users.length;
        let onManagerSelect = this.onManagerSelect;
        return (
            <div className="container">
                <h3>Acme Users - Managers</h3>
                <ul className="nav nav-tabs">
                    <li><Link to="/users">Users ({ userLength })</Link></li>
                    <li><Link to="/users/edit">Assign Manager</Link></li>
                </ul>
                { React.cloneElement(this.props.children, { users, onManagerSelect  }) }
            </div>
        )
    }
}

export default Main;
