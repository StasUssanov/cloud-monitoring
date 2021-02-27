import React from 'react';
import useStyles from './ToastStyles';
import ToastMessage from './ToastMessage';

export const ToastComponent = props => {
    const classes = useStyles();
    return (
        <div className={classes.root} children={
            props.messages.map((content, index) => (
                <ToastMessage
                    key={index}
                    message={content}
                    langPack={props.langPack}
                    onClose={props.onCloseMessage}
                />
            ))
        }/>
    );
}

export default ToastComponent;
