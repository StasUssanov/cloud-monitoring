import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        'main&': {
            flexGrow: '1',
            display: 'flex',
            alignItems: 'center',
        }
    }
}));
