import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './views/home/home';

import { Provider } from "react-redux"
import store from "./store/todoistStore"


injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#2c2c2c"}
  });

  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>

      <Router history={hashHistory}>


        <Route path="/" component={Home}>


        </Route>


      </Router>
    </Provider>

    </MuiThemeProvider>,
    document.getElementById('mountapp')
  );
