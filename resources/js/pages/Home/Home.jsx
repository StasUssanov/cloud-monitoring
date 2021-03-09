import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import langPack from '../../lang/ru/Home.js'
import { authSignOut } from '../../store/auth/actions';
import { zabbixRequestData } from '../../store/app/actions';
import { getZabbixItems } from '../../store/app/selectors';

function Home(props) {

    useEffect(() => {
        props.refresh();
        const timer = setInterval(() => props.refresh(), 60000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <HomeComponent
            langPack={langPack}
            items={props.items}
            singOut={props.singOut}
        />
    );
}

const mapStateToProps = store => ({
    items: getZabbixItems(store)
});

const mapDispatchToProps = dispatch => ({
    refresh: () => dispatch(zabbixRequestData()),
    singOut: () => dispatch(authSignOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
