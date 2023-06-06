import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ToastContainer, Flip } from 'react-toastify';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import './i18n';
import 'react-toastify/dist/ReactToastify.css';

import { router } from './App';
import store from 'store/store';

import './index.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
            dark: "#683b39",
        },
        secondary: {
            main: "#333333",
            light: "#808080",
        },
        error: {
            main: "#ff0000",
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Roboto',
            'Segoe UI',
            'Oxygen',
            'Ubuntu',
            'sans-serif'
        ].join(','),
    }
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar
                transition={Flip}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </ThemeProvider>
    </Provider>
);

