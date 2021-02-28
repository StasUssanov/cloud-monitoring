import React from 'react';
import { Button } from '@material-ui/core';

function HomeComponent({ langPack, ...props }) {
    return (
        <div>
            <div>{langPack.welcome}</div>
            <Button
                onClick={props.singOut}
                children={'SignOut'}
            />
        </div>
    );
}

export default HomeComponent;
