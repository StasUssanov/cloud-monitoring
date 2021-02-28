import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    cardContent: {
        'div& > *': {
            marginBottom: theme.spacing(1.5),
            '&:last-child': {
                marginBottom: 'unset',
            }
        }
    },
    cardActions: {
        'div&': {
            justifyContent: 'space-between',
        }
    },
    button: {
        width: '8em',
    }
}));
