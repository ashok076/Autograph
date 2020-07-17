import { Root } from "native-base";
import React, { Component } from "react";
// import { Provider } from "react-redux";
import store from "./src/config/store";
import Routes from "./src/Navigation/App";
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';


class App extends Component { 
  render() {
    return (
      <Root>
        <Provider store={store}>
          {/* <NavigationContainer> */}
          <Routes />
          {/* </NavigationContainer> */}
        </Provider>
      </Root>
    );
  }
}
module.exports = App;