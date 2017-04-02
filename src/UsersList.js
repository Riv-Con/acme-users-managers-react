import React from 'react';

const UsersList = ({ users }) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h5 className="bodyHeading">Users (with Manager):</h5>
                <div>
                    <ul className="list-group">
                        { users.map( user => <li className="list-group-item well" key={ user.id }>{ user.name }</li>) }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default UsersList;
