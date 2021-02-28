import React from 'react';
import { useStyles } from './LoginFormStyles';
import {
    Card,
    CardActions,
    CardContent,
    Checkbox,
    FormControlLabel,
    TextField
} from '@material-ui/core';
import ButtonLoader from '../../ButtonLoader/ButtonLoader';

function LoginFormComponent({ langPack, fields, changeField, ...props }) {
    const classes = useStyles();
    return (
        <Card component='form' onSubmit={props.onSubmit}>
            {props.header}
            <CardContent className={classes.cardContent}>
                <TextField
                    name='email'
                    label={langPack.email}
                    value={fields.email}
                    onChange={changeField}
                />
                <TextField
                    type='password'
                    name='password'
                    label={langPack.password}
                    value={fields.password}
                    onChange={changeField}
                />
            </CardContent>
            <CardActions className={classes.cardActions}>
                <FormControlLabel
                    control={<Checkbox
                        name='remember'
                        checked={fields.remember}
                        onChange={changeField}
                    />}
                    label={langPack.rememberMe}
                />
                <ButtonLoader
                    className={classes.button}
                    type='submit'
                    children={langPack.submit}
                    disabled={props.disableSubmit}
                    isLoading={props.isLoading}
                />
            </CardActions>
        </Card>
    );
}

export default LoginFormComponent;
