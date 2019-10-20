import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

/* Common SASS styles */
import 'normalize.css/normalize.css';
import 'animate.css/animate.css';
import '../styles/main.scss';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/base/_variables.scss');
// Require sass variables using sass-extract-loader and specify the plugin

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        );
    }
}

export default MyApp;
