import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App'


renderWithHotReload(App);


if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const RootElement = require('./containers/App').default;
    renderWithHotReload(RootElement);
  });
}

function renderWithHotReload(RootElement) {
  render(
    <AppContainer>
        <RootElement  />
    </AppContainer>,
    document.getElementById('root')
  );
}