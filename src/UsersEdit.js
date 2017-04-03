import React, { Component } from 'react';
import { Link } from 'react-router';

class UsersEdit extends Component {
    constructor({ users }) {
        super();
        this.users = users;
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5 className="bodyHeading">Users (Assign Manager):</h5>
                    { this.users.map( user =>
                        (<div className="panel panel-default" key={ user.id }>
                            <div key={ user.id }>
                                <div>
                                    <div className="panel-heading">
                                        { user.name }
                                    </div>
                                    <div className="panel-body">
                                        Managed by:
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                        <div className="buttons">
                            <button className="btn btn-default btn-tan" aria-label="Left Align">
                                <span className="glyphicon glyphicon-ok-sign" aria-hidden="true" />
                                Submit
                            </button>
                            <Link to="/users">
                                <button className="btn btn-default btn-white" aria-label="Left Align">
                                    <span className="glyphicon glyphicon-remove-sign" aria-hidden="true" />
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    Note: Submit to assign or cancel.
                </div>
            </div>
        )
    }
}

export default UsersEdit;
