require('./bootstrap');

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme';

import App from './App';
import Toast from './components/Toast/Toast';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
            <Toast/>
        </ThemeProvider>
    </Provider>
    , document.getElementById('app'));
