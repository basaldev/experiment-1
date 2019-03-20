import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from 'components/container/app';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from 'theme';

export default function render() {
  ReactDOM.render(
  <MuiThemeProvider theme={theme}><App /></MuiThemeProvider>,
  document.getElementById('app'));
}

declare const module: {
  hot: {
    accept: (string, Function) => void;
  };
};

if (module.hot) {
  module.hot.accept('components/container/app', () => {
    render();
  });
}
