import Modal from 'react-native-modal';
import React, {Component} from 'react';
// import { styles } from "react-native-theme";
import PropTypes from 'prop-types';
// import { ScrollView, View, Image } from "react-native";

export default class ModalView extends Component {
  render() {
    const {
      isVisible,
      backDropPress,
      backDropColor,
      onModalHide,
      children,
      animationIn,
      animationOut,
      coverScreenValue,
      backdropOpacity,
      animationType,
      transparentType,
      modalVisible,
      onRequestClose,
      supportedOrientations,
      onSwipeComplete,
      modalStyle,
      animationInTiming,
      animationOutTiming,
    } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        onModalHide={onModalHide}
        style={modalStyle}
        supportedOrientations={supportedOrientations}
        onBackdropPress={backDropPress}
        animationIn={animationIn}
        animationOut={animationOut}
        coverScreen={coverScreenValue}
        backdropColor={backDropColor}
        backdropOpacity={backdropOpacity}
        animationType={animationType}
        transparent={transparentType}
        visible={modalVisible}
        onRequestClose={onRequestClose}
        animationInTiming={animationInTiming}
        animationOutTiming={animationOutTiming}
        onSwipeComplete={onSwipeComplete}>
        {children}
      </Modal>
    );
  }
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  onModalHide: PropTypes.func,
  backDropPress: PropTypes.func,
  backDropColor: PropTypes.string,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  children: PropTypes.node,
  coverScreenValue: PropTypes.bool,
  backdropOpacity: PropTypes.any,
  animationType: PropTypes.string,
  transparentType: PropTypes.bool,
  modalVisible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  supportedOrientations: PropTypes.array,
  onSwipeComplete: PropTypes.object,
  modalStyle: PropTypes.object,
  animationInTiming: PropTypes.number,
  animationOutTiming: PropTypes.number,
};

Modal.defaultProps = {
  isVisible: false,
  onModalHide: () => {},
  backDropPress: () => {},
  backDropColor: '#fff',
  children: null,
  animationIn: 'slideInDown',
  animationOut: 'slideOutUp',
  coverScreenValue: false,
  backdropOpacity: 0.35,
  animationType: 'slide',
  transparentType: true,
  modalVisible: false,
  onRequestClose: () => {},
  supportedOrientations: ['portrait', 'landscape'],
  onSwipeComplete: {},
  modalStyle: {margin: 0},
  animationInTiming: 300,
  animationOutTiming: 300,
};
