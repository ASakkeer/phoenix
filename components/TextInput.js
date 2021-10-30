import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

class TextInputView extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      style,
      autoCorrect,
      autoFocus,
      editable,
      defaultValue,
      keyboardType,
      maxLength,
      multiline,
      onBlur,
      onChangeText,
      placeholder,
      placeholderTextColor,
      secureTextEntry,
      onFocus,
    } = this.props;
    return (
      <TextInput
        style={style}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        editable={editable}
        defaultValue={defaultValue}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        onBlur={onBlur}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
      />
    );
  }
}

export default TextInputView;

TextInputView.propTypes = {
  style: PropTypes.object,
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  editable: PropTypes.bool,
  defaultValue: PropTypes.string,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

TextInputView.defaultProps = {
  style: {},
  autoCorrect: false,
  autoFocus: false,
  editable: true,
  defaultValue: '',
  keyboardType: 'default',
  maxLength: null,
  multiline: false,
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
  placeholder: '',
  placeholderTextColor: 'lightgray',
  secureTextEntry: false,
};
