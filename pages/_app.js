import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#000',
}

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
