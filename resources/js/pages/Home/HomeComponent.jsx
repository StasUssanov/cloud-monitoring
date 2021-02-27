import React from 'react';

function HomeComponent({ langPack }) {
    return (
        <div>
            <div>{langPack.welcome}</div>
        </div>
    );
}

export default HomeComponent;
