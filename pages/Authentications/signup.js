/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-new-object */
/* eslint-disable no-eval */
import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {TextInputView, Button} from '../../components';
import {Checkbox} from 'react-native-paper';
import backgroundImage from '../../assets/images/AuthBG.png';
// import BackgoundImg from '../assets/images/BackgoundImg.png';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import EntypoIcon from 'react-native-vector-icons/Entypo';
// import EvilIcon from 'react-native-vector-icons/EvilIcons';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import FontistoIcon from 'react-native-vector-icons/Fontisto';
// import FoundationIcon from 'react-native-vector-icons/Foundation';
// import IoniconsIcon from 'react-native-vector-icons/Ionicons';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import OcticonsIcon from 'react-native-vector-icons/Octicons';
// import ZocialIcon from 'react-native-vector-icons/Zocial';
// import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import {Actions} from 'react-native-router-flux';

// Basecolor : #4a6076   #4a6076
const _styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    // borderWidth: 1,
    padding: 15,
  },
  title: {
    fontSize: 40,
    color: '#fff',
  },
});

class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: false,
    };
  }

  onFocusChange = () => {
    console.log('fregerg');
    this.setState({isFocused: true});
  };

  onBlurChange = () => {
    console.log('fregerg');
    this.setState({isFocused: false});
  };

  render() {
    const {isFocused} = this.state;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={_styles.flex}>
        <ScrollView contentContainerStyle={_styles.flex}>
          <ImageBackground
            source={backgroundImage}
            resizeMode="cover"
            style={_styles.flex}>
            <SafeAreaView style={_styles.flex}>
              <View style={_styles.flex}>
                <View
                  style={[
                    _styles.titleContainer,
                    {height: isFocused ? 100 : 300},
                  ]}>
                  <Text style={_styles.title}>Create</Text>
                  <Text style={_styles.title}>Account</Text>
                </View>
                <View
                  style={[
                    _styles.flex,
                    {
                      paddingHorizontal: 20,
                      paddingVertical: isFocused ? 10 : 20,
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <View>
                    <View>
                      <TextInputView
                        placeholder="Your name"
                        maxLength={50}
                        style={{
                          paddingVertical: 20,
                          marginBottom: 15,
                          borderBottomWidth: 1,
                          borderColor: 'lightgrey',
                          fontSize: 16,
                        }}
                        onFocus={this.onFocusChange}
                        onBlur={this.onBlurChange}
                      />
                      <TextInputView
                        placeholder="Your phone number"
                        maxLength={25}
                        secureTextEntry
                        style={{
                          paddingVertical: 20,
                          marginBottom: 15,
                          borderBottomWidth: 1,
                          borderColor: 'lightgrey',
                          fontSize: 16,
                        }}
                        onFocus={this.onFocusChange}
                        onBlur={this.onBlurChange}
                      />
                      <TextInputView
                        placeholder="Your email"
                        maxLength={50}
                        style={{
                          paddingVertical: 20,
                          marginBottom: 15,
                          borderBottomWidth: 1,
                          borderColor: 'lightgrey',
                          fontSize: 16,
                        }}
                        onFocus={this.onFocusChange}
                        onBlur={this.onBlurChange}
                      />
                      <TextInputView
                        placeholder="Your password"
                        maxLength={25}
                        secureTextEntry
                        style={{
                          paddingVertical: 20,
                          marginBottom: 15,
                          borderBottomWidth: 1,
                          borderColor: 'lightgrey',
                          fontSize: 16,
                        }}
                        onFocus={this.onFocusChange}
                        onBlur={this.onBlurChange}
                      />
                    </View>
                    {/* <TouchableOpacity style={{alignItems: 'flex-end'}}>
                    <Text>Forgot password?</Text>
                  </TouchableOpacity> */}
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: isFocused ? 40 : 45,
                      justifyContent: 'center',
                      // borderWidth: 1,
                      flex: 1,
                      left: 0,
                      right: 0,
                      alignItems: 'flex-end',
                      width: '38%',
                      zIndex: 1,
                    }}>
                    <TouchableOpacity
                      style={{alignItems: 'flex-start'}}
                      onPress={() => Actions.Login()}>
                      <Text
                        style={{
                          fontSize: isFocused ? 18 : 22,
                          color: '#4a6076',
                        }}>
                        Login
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 15,
                      justifyContent: 'center',
                      // borderWidth: 1,
                      flex: 1,
                      left: 0,
                      right: 0,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#4a6076',
                        padding: 20,
                        borderRadius: 100,
                        width: isFocused ? 70 : 80,
                        height: isFocused ? 70 : 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 1,
                        shadowRadius: 2,
                        shadowOpacity: 0.4,
                        shadowColor: '#000',
                        shadowOffset: {width: 3, height: 3},
                      }}>
                      <Text
                        style={{fontSize: isFocused ? 20 : 26, color: '#fff'}}>
                        GO
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default SignupScreen;
