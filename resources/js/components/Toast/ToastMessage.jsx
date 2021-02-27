import React, { useEffect } from 'react';
import useStyles from './ToastStyles';
import { Alert, AlertTitle } from '@material-ui/lab';

export const ToastMessage = ({ message, onClose, langPack }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose(message);
            clearTimeout(timeout);
        }, message.lifeTime);
    }, [message, onClose]);

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getTitle ~~~*/

    const getTitle = () => {
        if (message.title) {
            return message.title;
        }
        switch (message.severity) {
            case 'success':
                return langPack.titleSuccess;
            case 'error':
                return langPack.titleError;
            case 'warning':
                return langPack.titleWarning;
            default:
                return langPack.titleInfo;
        }
    }
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~*/

    const classes = useStyles();
    return (message) ? (
        <Alert
            className={classes.message}
            severity={message.severity}
            onClose={() => onClose(message)}
        >
            <AlertTitle children={getTitle()}/>
            {message.message}
        </Alert>
    ) : null;
}

export default ToastMessage;
