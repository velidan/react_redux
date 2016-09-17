import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import 'react-hot-loader/patch';
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import './styles/app.css'

import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore();
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
		<Provider store={store}>
			<RootElement  />
		</Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}