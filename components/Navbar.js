import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {IoniconsIcon} from './Icons';

const _styles = StyleSheet.create({
  __tS: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    shadowColor: '#adadad',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 3,
    elevation: 3,
  },
  __p_L_I: {
    width: 120,
    height: 40,
  },
  __centerAligned: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  __icon: {
    padding: 5,
  },
});

function NavbarView(props) {
  const {_isLogo} = props;

  const _logo = '/Users/viswa/work/testapps/phoenix/assets/images/logo.png';

  _renderIcons = (onPress, icon, size, color, style) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <IoniconsIcon style={style} name={icon} color={color} size={size} />
        {/* <View
          style={{
            position: 'absolute',
            width: 7,
            height: 7,
            backgroundColor: 'yellow',
            borderRadius: 100,
            right: 5,
            top: 3,
          }}
        /> */}
        <View
          style={{
            position: 'absolute',
            width: 15,
            height: 15,
            backgroundColor: '#4a6076',
            borderRadius: 100,
            right: 0,
            top: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 12, color: '#fff'}}>4</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={_styles.__tS}>
      <View>
        {_isLogo && <Image style={_styles.__p_L_I} source={{uri: _logo}} />}
      </View>
      <View style={_styles.__centerAligned}>
        {_renderIcons(
          () => {},
          'notifications-outline',
          22,
          '#4a6076',
          _styles.__icon,
        )}
        {_renderIcons(() => {}, 'heart-outline', 22, '#4a6076', _styles.__icon)}
        {_renderIcons(() => {}, 'cart-outline', 24, '#4a6076', _styles.__icon)}
      </View>
    </View>
  );
}

export default NavbarView;

NavbarView.propTypes = {
  _isLogo: PropTypes.bool,
};

NavbarView.defaultProps = {
  _isLogo: false,
};
