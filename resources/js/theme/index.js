import { createMuiTheme } from '@material-ui/core';
import button from './button';
import card from './card';
import formControl from './formControl';
import textField from './text-field';

const theme = createMuiTheme();
export default createMuiTheme({
    common: {
        headerHeight: '5.5rem',
        bottomBorder: '1px solid rgba(0,0,0,0.12)',
    },
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ overrides ~~~ */
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    minHeight: '100vh',
                    fontSize: '14px',
                    lineHeight: '1.15',
                },
                body: {
                    fontFamily: '"Comfortaa", "Helvetica", "Arial", sans-serif',
                    minHeight: 'inherit',
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: 'inherit',
                    backgroundColor: theme.palette.background.default,

                },
                '#app': {
                    minHeight: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                },
            },
        },
        MuiCardActions: card.actions.overrides
    },
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ props ~~~ */
    props: {
        MuiButton: button.props,
        MuiFormControl: formControl.props,
        MuiTextField: textField.props,
    }
});
