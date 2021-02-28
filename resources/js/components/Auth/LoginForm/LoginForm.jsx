import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import langPack from '../../../lang/ru/Auth';
import LoginFormComponent from './LoginFormComponent';
import { authSignIn } from '../../../store/auth/actions';
import { isLoading } from '../../../store/app/selectors';

function LoginForm(props) {

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ fields ~~~ */

    const [fields, setFields] = useState({ email: '', password: '', remember: false });
    const changeField = ({ target }) => {
        const { name, value, checked } = target;
        if (name === 'remember') {
            setFields(prevState => ({ ...prevState, [name]: checked }));
            return;
        }
        setFields(prevState => ({ ...prevState, [name]: value }));
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ handleDisableSubmit ~~~ */

    const handleDisableSubmit = () => {
        const { email, password } = fields;
        return (email === '' || password === '');
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ formAction ~~~ */

    const formAction = event => {
        event.preventDefault();
        props.authLoginRequest(fields);
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

    return (<LoginFormComponent
        langPack={langPack}
        header={props.header}
        isLoading={props.isLoading}
        disableSubmit={handleDisableSubmit()}
        fields={fields}
        changeField={changeField}
        onSubmit={formAction}
    />);
}

LoginForm.propTypes = {
    header: PropTypes.node
}

const mapStateToProps = state => ({
    isLoading: isLoading(state),
});

const mapDispatchToProps = dispatch => ({
    authLoginRequest: payload => dispatch(authSignIn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
