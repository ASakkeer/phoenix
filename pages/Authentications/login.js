/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-new-object */
/* eslint-disable no-eval */
import React, {Component} from 'react';
import {
  ImageBackground,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInputView} from '../../components';
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
  __e_S_C: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#500472',
  },
  __tS: {
    marginBottom: 30,
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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 5,
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
    width: 230,
    height: 50,
    // borderRadius: 150,
    // borderWidth: 5,
    // borderColor: '#fff',
  },
});

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      userNumber: '',
    };
  }

  render() {
    const {userNumber} = this.state;
    const TTalk_W = '/Users/mongrov/work/apps/mini5/assets/images/TTalk_W.png';
    return (
      // <ImageBackground
      //   source={BackgoundImg}
      //   style={{
      //     flex: 1,
      //     resizeMode: 'cover',
      //     justifyContent: 'center',
      //   }}>
      <View style={[_styles.__e_S_C]}>
        {/* <HeaderView
          _goBack={this._goBack}
          _navIconList={defaultHeaderViewIconList}
          _navTitle="Calculator"
          _navSubTitle=""
          _navEnableBackHandler={true}
        /> */}
        <View style={_styles.__tS}>
          <Image style={_styles.__p_L_I} source={{uri: TTalk_W}} />
          {/* <Text style={_styles.__tT}>TroopTalk</Text> */}
        </View>
        <View style={_styles.__iC}>
          {/* <View style={_styles.__sTS}>
              <Text style={_styles.__sTT}>Login with phone number</Text>
            </View> */}
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={_styles.__sTS}>
              <TextInputView
                style={_styles.__tIC}
                placeholder="Login with phone number"
                // maxLength={10}
                keyboardType="numeric"
                onChangeText={(text) => this.setState({userNumber: text})}
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
        </View>
      </View>
      //  </ImageBackground>
    );
  }
}

export default LoginScreen;
