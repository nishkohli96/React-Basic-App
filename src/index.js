import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from 'react-i18next';
import App from './App';
import * as i18next from './i18/i18config';

const ReactApp = () => {
    return (
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <Suspense fallback='app loading.....'>
                    <App />
                </Suspense>
            </I18nextProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(<ReactApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
