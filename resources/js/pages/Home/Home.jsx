import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import langPack from '../../lang/ru/Home.js'
import { authSignOut } from '../../store/auth/actions';

function Home(props) {
    return (
        <HomeComponent
            langPack={langPack}
            singOut={props.singOut}
        />
    );
}

const mapDispatchToProps = dispatch => ({
    singOut: () => dispatch(authSignOut()),
});

export default connect(null, mapDispatchToProps)(Home);
