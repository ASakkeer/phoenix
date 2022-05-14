import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {IoniconsIcon} from './Icons';
import SearchInputView from './SearchInput';

const _styles = StyleSheet.create({
  __tS: {
    backgroundColor: '#F9F9F9',
    paddingVertical: 10,
    paddingHorizontal: 5,
    shadowColor: '#adadad',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 3,
    elevation: 3,
  },
  __tSc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    paddingVertical: 5,
    paddingHorizontal: 7,
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
          <Text style={{fontSize: 12, color: '#F9F9F9'}}>4</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={_styles.__tS}>
      <View style={_styles.__tSc}>
        <View>
          {_isLogo && <Image style={_styles.__p_L_I} source={{uri: _logo}} />}
        </View>
        <View style={_styles.__centerAligned}>
          {_renderIcons(
            () => {},
            'notifications-outline',
            24,
            '#4a6076',
            _styles.__icon,
          )}
          {_renderIcons(
            () => {},
            'heart-outline',
            24,
            '#4a6076',
            _styles.__icon,
          )}
          {_renderIcons(
            () => {},
            'cart-outline',
            26,
            '#4a6076',
            _styles.__icon,
          )}
        </View>
      </View>
      <View style={{marginTop: 15, backgroundColor: '#F9F9F9'}}>
        <SearchInputView
          placeholder="Just one tap to search"
          maxLength={50}
          style={{
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: 'lightgrey',
            fontSize: 16,
            borderRadius: 100,
            paddingHorizontal: 20,
            height: 45,
            backgroundColor: '#F9F9F9',
          }}
        />
        <View
          style={{
            position: 'absolute',
            right: 0,
            backgroundColor: '#4a6076',
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            paddingVertical: 5,
            paddingHorizontal: 5,
            height: 45,
          }}>
          <IoniconsIcon
            style={_styles.__icon}
            name="search-outline"
            color="#F9F9F9"
            size={22}
          />
        </View>
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
