import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

class Button extends Component {
  constructor() {
    super();
  }

  render() {
    const {style, children, onPress} = this.props;
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
}

export default Button;

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  style: {},
  children: null,
  onPress: () => {},
};
