import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

import {
  LoginScreen,
  SignupScreen,
  ResetPassword,
  OtpScreen,
} from './pages/Authentications';

import {CategoryDetails} from './pages/category';

import {HomeScreen} from './pages';

import {Router, Stack, Scene} from 'react-native-router-flux';
console.reportErrorsAsExceptions = false;

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Scene
            key="root"
            navigationOptions={{
              headerShown: false,
            }}>
            <Scene
              key="Login"
              component={LoginScreen}
              title="Login"
              hideNavBar={true}
            />
            <Scene
              key="Register"
              component={SignupScreen}
              title="Register"
              hideNavBar={true}
            />
            <Scene
              key="Reset"
              component={ResetPassword}
              title="ResetPassword"
              hideNavBar={true}
            />
            <Scene
              key="OtpScreen"
              component={OtpScreen}
              title="Otp"
              hideNavBar={true}
            />
            <Scene
              key="HomeScreen"
              component={HomeScreen}
              title="Home"
              hideNavBar={true}
            />
            <Scene
              key="CategoryDetails"
              component={CategoryDetails}
              title="Category Details"
              hideNavBar={true}
            />
          </Scene>
        </Router>
      </>
    );
  }
}
export default App;
