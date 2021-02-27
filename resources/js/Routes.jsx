import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './pages/Home/Home';
import NoMatch from './pages/NoMatch/NoMatch';

export const ROUTE_HOME = '/';

function Routes() {
    return (
        <Switch>
            <Route
                exact
                path={ROUTE_HOME}
                component={Home}
            />
            <ProtectedRoute
                condition={false}
                path={ROUTE_HOME}
                altPath={ROUTE_HOME}
                component={Home}
            />
            <Route
                path="*"
                component={NoMatch}
            />
        </Switch>
    );
}

export default Routes;
