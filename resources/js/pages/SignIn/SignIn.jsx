import React from 'react';
import { useStyles } from './SignInStyles';
import { CardContent, Container } from '@material-ui/core';
import { LoginForm } from '../../components/Auth';

function SignIn() {
    const classes = useStyles();

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ header ~~~ */

    const header = (
        <CardContent>
            Авторизация
        </CardContent>
    );

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

    return (
        <Container
            className={classes.container}
            component='main'
            maxWidth='xs'
            children={
                <LoginForm
                    header={header}
                />
            }
        />
    );
}

export default SignIn;
