import React from 'react';
import { Button, Card, CardContent, CardHeader } from '@material-ui/core';

function HomeComponent({ langPack, ...props }) {
    return (
        <div>
            <div>{langPack.welcome}</div>
            <Button
                onClick={props.singOut}
                children={'SignOut'}
            />
            <Card>
                <CardHeader title={`Кондиционер unit 1 (${'online'})`}/>
                <CardContent>
                    <div>Temp in: {props.items[0]?.lastvalue || ''} °C</div>
                    <div>Temp out: {props.items[1]?.lastvalue || ''} °C</div>
                    <div>Last update: {Date(props.items[0]?.lastclock) || ''}</div>
                </CardContent>
                <CardHeader title={`Кондиционер unit 2 (${'online'})`}/>
                <CardContent>
                    <div>Temp in: {props.items[2]?.lastvalue || ''} °C</div>
                    <div>Temp out: {props.items[3]?.lastvalue || ''} °C</div>
                    <div>Last update: {Date(props.items[2]?.lastclock) || ''}</div>
                </CardContent>
            </Card>
        </div>
    );
}

export default HomeComponent;
