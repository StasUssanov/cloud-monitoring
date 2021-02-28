import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { appInit } from './store/app/actions';

function App(props) {

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ init ~~~ */

    useEffect(() => {
        props.init();
    }, []);

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
                <Routes/>
            </Suspense>
        </BrowserRouter>
    );
}


const mapDispatchToProps = dispatch => {
    return ({
        init: () => dispatch(appInit()),
    });
}

export default connect(null, mapDispatchToProps)(App);
