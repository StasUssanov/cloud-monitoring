import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { token } from './store/auth/selectors';
import RefreshToken from './components/Auth/RefreshToken/RefreshToken';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import NoMatch from './pages/NoMatch/NoMatch';

export const ROUTE_HOME = '/';

function Routes({ isAuth }) {

    if (isAuth === false) {
        return (<SignIn/>);
    }

    return (
        <Fragment>
            <Switch>
                <Route
                    exact
                    path={ROUTE_HOME}
                    component={Home}
                />
                {/*<ProtectedRoute*/}
                {/*    condition={false}*/}
                {/*    path={ROUTE_HOME}*/}
                {/*    altPath={ROUTE_HOME}*/}
                {/*    component={Home}*/}
                {/*/>*/}
                <Route
                    path="*"
                    component={NoMatch}
                />
            </Switch>
            <RefreshToken/>
        </Fragment>
    );
}

const mapStateToProps = store => {
    return ({
        isAuth: token(store) || false,
    });
}

export default connect(mapStateToProps)(Routes);
