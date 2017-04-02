import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Main from './Main';

const RouteContainer = () => {
    return (
        <Router history={ hashHistory }>
            <Route path="/" component={ Main }>
                <IndexRedirect to="/users" />
                <Route path="/users" component={ UsersList } />
                <Route path="/Users/Edit" component={ UsersEdit } />
            </Route>
        </Router>
    )
};

let root document.getElementById('root');
render(<RouteContainer />, root);
