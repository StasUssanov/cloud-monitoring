import React from 'react';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, component: Component, condition, altPath, ...rest }) {
    return (
        <Route {...rest} render={({ location }) =>
            condition ? (
                (children) ? children : <Component/>
            ) : (
                <Redirect to={{ pathname: altPath, state: { from: location } }}/>
            )
        }/>
    );
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
    condition: PropTypes.bool,
    altPath: PropTypes.string
}

ProtectedRoute.defaultProps = {
    altPath: '/login'
}

export default ProtectedRoute;
