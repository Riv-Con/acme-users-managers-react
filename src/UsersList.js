import React from 'react';

import NavLink from './NavLink';

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
                                    { user.managerId ? 
                                        (<NavLink to="/users/edit">{ user.managerId }</NavLink>) :
                                        (<NavLink to="/users/edit">{ 'nobody' }</NavLink>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
                Note: Click the manager name to assign a manager.
            </div>
        </div>
    )
};

export default UsersList;
