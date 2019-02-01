import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import './components/pages.css'
import store from './ducks/store'
import Nav from './components/Nav/Nav';
import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            {routes}
          </div>
        </HashRouter>
      </Provider>

    );
  }
}

export default App;


// baseline app ready to roll