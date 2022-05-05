import React, {Component} from 'react';
import {Text, SafeAreaView, View} from 'react-native';

import {NavbarView} from '../components';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <SafeAreaView>
          <NavbarView _isLogo={true} />
          <Text>Hello Home screen</Text>
        </SafeAreaView>
      </View>
    );
  }
}
export default HomeScreen;
