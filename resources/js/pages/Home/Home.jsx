import React from 'react';
import HomeComponent from './HomeComponent';
import langPack from '../../lang/ru/Home.js'

function Home() {
    return (<HomeComponent
        langPack={langPack}
    />);
}

export default Home;
