import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super();
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('api/users')
            .then(response => response.data)
            .then(users => this.setState({ users }));
    }

    render() {
        let { users } = this.state;
        let userLength = users.length;
        return (
            <div className="container">
                <h3>Acme Users - Managers</h3>
                <ul className="nav nav-tabs">
                    <li><Link to="/users">Users ({ userLength })</Link></li>
                    <li><Link to="/users/edit">Assign Manager</Link></li>
                </ul>
                { React.cloneElement(this.props.children, { users }) }
            </div>
        )
    }
}

export default Main;
