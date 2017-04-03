import React from 'react';
import { Link } from 'react-router';

const UsersList = ({ users }) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h5 className="bodyHeading">Users (with Manager):</h5>
                { users.map( user =>
                    (<div className="panel panel-default" key={ user.id }>
                        <div key={ user.id }>
                            <div>
                                <div className="panel-heading">
                                    { user.name }
                                </div>
                                <div className="panel-body">
                                    Managed by: { '  ' }
                                    <Link to="/users/edit">
                                        { user.managerId ? user.managerId : 'manager not assigned'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
                Note: Click the manager name or tab-link to assign a manager.
            </div>
        </div>
    )
};

export default UsersList;
