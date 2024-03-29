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
} from 'react-native';
import {TextInputView, Button} from '../../components';
import {Checkbox} from 'react-native-paper';

import TTalk_W from '../../assets/images/TTalk_T.png';

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

// Basecolor : #4a6076   #4a6076
const _styles = StyleSheet.create({
  __e_S_C: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#4a6076',
  },
  __tS: {
    marginBottom: 15,
  },
  __tT: {
    fontSize: 40,
    color: '#fff',
  },
  __sTS: {
    marginBottom: 25,
  },
  __sTT: {
    fontSize: 16,
    width: Dimensions.get('window').width / 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  __tIC: {
    // backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical: 15,
    // paddingHorizontal: 15,
    // fontSize: 18,
    width: Dimensions.get('window').width / 1.2,
    // borderRadius: 5,
    color: 'grey',
  },
  __sBtn: {
    width: Dimensions.get('window').width / 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: '#fff',
    borderRadius: 5,
  },
  __SBtnT: {
    fontSize: 18,
    color: '#fff',
  },
  __iC: {
    // marginBottom: 5,
  },
  __p_L_I: {
    width: 200,
    height: 50,
    // borderRadius: 150,
    // borderWidth: 5,
    // borderColor: '#fff',
  },
  __sLg: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

class OtpScreen extends Component {
  constructor() {
    super();
    this.state = {
      userNumber: '',
    };
  }

  render() {
    const {userNumber} = this.state;

    return (
      <SafeAreaView style={[_styles.__e_S_C]}>
        <View style={[_styles.__e_S_C]}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={_styles.__tS}>
              <Image style={_styles.__p_L_I} source={TTalk_W} />
            </View>
            <View>
              <Text style={{color: '#808080', fontSize: 14, marginTop: 20}}>
                Please enter the OTP send to{' '}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#808080',
                  fontSize: 14,
                  marginTop: 5,
                  marginBottom: 30,
                }}>
                8870273579 . change
              </Text>
            </View>
            <View>
              <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <View style={_styles.__sTS}>
                  <TextInputView
                    style={_styles.__tIC}
                    // placeholder="Phone or email"
                    keyboardType="numeric"
                    onChangeText={text => this.setState({userNumber: text})}
                    placeholderTextColor="grey"
                  />
                </View>
              </TouchableWithoutFeedback>

              <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  marginBottom: 15,
                }}></TouchableOpacity>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#4a6076',
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: Dimensions.get('window').width / 1.2,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#fff', fontSize: 16}}>Verify</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
          {/*  <View style={_styles.__iC}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={_styles.__sTS}>
              <TextInputView
                style={_styles.__tIC}
                placeholder="Login with phone number"
                keyboardType="numeric"
                onChangeText={text => this.setState({userNumber: text})}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={_styles.__aC}>
          <TouchableOpacity
            style={_styles.__sBtn}
            onPress={() => {
              alert(userNumber);
              Keyboard.dismiss();
            }}>
            <Text style={_styles.__SBtnT}>Sign in</Text>
          </TouchableOpacity>
        </View> */}
        </View>
      </SafeAreaView>
    );
  }
}

export default OtpScreen;
