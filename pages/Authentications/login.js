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
} from 'react-native';
import {TextInputView, Button} from '../../components';
import {Checkbox} from 'react-native-paper';
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

// import {HeaderView} from '../components';
// Basecolor : #500472   #500472
const _styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'flex-end',
    height: 300,
    justifyContent: 'center',
    // borderWidth: 1,
    padding: 15,
  },
  title: {
    fontSize: Dimensions.get('window').width / 9,
    color: '#fff',
  },
});

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {userNumber} = this.state;
    const _backgroundImage = {
      uri: '/Users/viswa/work/testapps/phoenix/assets/images/AuthBG.png',
    };
    return (
      <View style={_styles.flex}>
        <ImageBackground
          source={_backgroundImage}
          resizeMode="cover"
          style={_styles.flex}>
          <SafeAreaView style={_styles.flex}>
            <View style={_styles.flex}>
              <View style={_styles.titleContainer}>
                <Text style={_styles.title}>Welcome</Text>
                <Text style={_styles.title}>Back!</Text>
              </View>
              <View
                style={[
                  _styles.flex,
                  {
                    padding: 20,
                    justifyContent: 'space-between',
                    paddingVertical: 25,
                  },
                ]}>
                <View>
                  <View>
                    <TextInputView
                      placeholder="Username or email"
                      maxLength={50}
                      style={{
                        paddingVertical: 20,
                        marginBottom: 15,
                        borderBottomWidth: 1,
                        borderColor: 'lightgrey',
                        fontSize: 16,
                      }}
                    />
                    <TextInputView
                      placeholder="Password"
                      maxLength={25}
                      secureTextEntry
                      style={{
                        paddingVertical: 20,
                        marginBottom: 15,
                        borderBottomWidth: 1,
                        borderColor: 'lightgrey',
                        fontSize: 16,
                      }}
                    />
                  </View>
                  <TouchableOpacity style={{alignItems: 'flex-end'}}>
                    <Text>Forgot password?</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 45,
                    justifyContent: 'center',
                    // borderWidth: 1,
                    flex: 1,
                    left: 0,
                    right: 0,
                    alignItems: 'flex-end',
                    width: '38%',
                    zIndex: 1,
                  }}>
                  <TouchableOpacity style={{alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 22, color: '#500472'}}>Signup</Text>
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
                      backgroundColor: '#500472',
                      padding: 20,
                      borderRadius: 100,
                      width: 80,
                      height: 80,
                      alignItems: 'center',
                      justifyContent: 'center',
                      elevation: 1,
                      shadowRadius: 2,
                      shadowOpacity: 0.4,
                      shadowColor: '#000',
                      shadowOffset: {width: 3, height: 3},
                    }}>
                    <Text style={{fontSize: 26, color: '#fff'}}>GO</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

export default LoginScreen;
