import React, { Component } from 'react';
import { Link, IndexRedirect } from 'react-router';

import NavLink from './NavLink';
import axios from 'axios';

class Main extends Component {
    constructor() {
        super();
        this.state = { view: '', users: [] };
    }
    render() {
        let userLength = this.state.users.length;
        return (
            <div className="container">
                <h3>Acme Users - Managers</h3>
                <nav>
                    <ul className="nav nav-tabs" role="nav">
                        <li><NavLink to="/users">Users ({ userLength })</NavLink></li>
                        <li><NavLink to="/users/edit">Users ({ userLength })</NavLink></li>
                    </ul>
                </nav>
                { React.cloneElement(this.props.children, 
                    {
                        users: this.state.users
                    }
                  )
                }
            </div>
        )
    }
}

export default Main;
