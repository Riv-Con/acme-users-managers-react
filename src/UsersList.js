import React from 'react';

import NavLink from './NavLink';

const UsersList = ({ users }) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h5 className="bodyHeading">Users (with Manager):</h5>
                <div className="panel panel-default">
                    { users.map( user =>
                        (<li className="list-group-item" key={ user.id }>
                            <div className="panel-heading">
                                { user.name }
                            </div>
                            <div className="panel-body">
                                Managed by: 
                                { user.managerId ? 
                                    (<NavLink to="/users/edit">{ user.managerId }</NavLink>) :
                                    (<NavLink to="/users/edit">{ 'nobody' }</NavLink>)
                                }
                            </div>
                        </li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default UsersList;
