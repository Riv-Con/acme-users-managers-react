import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class UsersEdit extends Component {
    constructor(props) {
        super();
        this.state = { userID: '', managerID: '' };
        this.onManagerSelect = props.onManagerSelect;
        this.users = props.users;
        this.onManagerChange= this.onManagerChange.bind(this);
    }
    onManagerChange(ev){
        this.onManagerSelect(ev.target.name, ev.target.value);
    }

    render(){
        let users = this.users;
        let onManagerSelect = this.onManagerSelect;
        let managers = users.filter( user => user.isMgr === true);
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5 className="bodyHeading">Users (Assign Manager):</h5>
                        { users.map( user =>
                            (<div className="panel panel-default" key={ user.id }>
                                <div key={ user.id }>
                                    <div>
                                        <div className="panel-heading">
                                            { user.name }
                                        </div>
                                        <form>
                                            <div className="panel-body">
                                                <select name={ user.id } key={ user.id } value={ (user.managerId) ? user.managerId : '0' } onChange={ this.onManagerChange }>
                                                    <option key="0" value="0">{ ' - ' } no manager selected yet { ' - ' }</option>
                                                    { managers.map( manager => {
                                                            if (manager.id !== user.id) {
                                                                return (
                                                                    <option value={ manager.id } key={ manager.id }>
                                                                        { manager.name }
                                                                    </option>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            ))
                        }  
                        <div className="buttons">
                            <Link to="/users">
                                <button className="btn btn-default btn-tan" aria-label="Left Align">
                                    <span className="glyphicon glyphicon-ok-sign" aria-hidden="true" />
                                    Return to the users list page
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
