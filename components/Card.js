import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import PropTypes from 'prop-types';

class CardView extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      _cardContainerStyle,
      _cardContentStyle,
      _cardActionStyle,
      _topTitle,
      _topSubTitle,
      _enableIcon,
      _IconProps,
      _bottomTitle,
      _bottomSubTitle,
      _actionDoneTitle,
      _actionCancelTitle,
      _actionDonePress,
      _actionCancelPress,
      _topTitleStyle,
      _topSubTitleStyle,
      _bottomTitleStyle,
      _bottomSubTitleStyle,
      _actionDoneTitleStyle,
      _actionCancelTitleStyle,
    } = this.props;
    return (
      <Card style={_cardContainerStyle}>
        <Card.Content style={_cardContentStyle}>
          {_topTitle !== '' && (
            <Title style={_topTitleStyle}>{_topTitle}</Title>
          )}
          {_topSubTitle !== '' && (
            <Paragraph style={_topSubTitleStyle}>{_topSubTitle}</Paragraph>
          )}
          {_enableIcon && (
            <Icon
              name={_IconProps.name}
              size={_IconProps.size}
              color={_IconProps.color}
            />
          )}
          {_bottomTitle !== '' && (
            <Title style={_bottomTitleStyle}>{_bottomTitle}</Title>
          )}
          {_bottomSubTitle !== '' && (
            <Paragraph style={_bottomSubTitleStyle}>
              {_bottomSubTitle}
            </Paragraph>
          )}
        </Card.Content>
        {(_actionDoneTitle !== '' || _actionCancelTitle !== '') && (
          <Card.Actions style={_cardActionStyle}>
            {_actionDoneTitle !== '' && (
              <Button
                mode="contained"
                style={_actionDoneTitleStyle}
                onPress={_actionDonePress}>
                {_actionDoneTitle}
              </Button>
            )}
            {_actionCancelTitle !== '' && (
              <Button
                mode="contained"
                style={_actionCancelTitleStyle}
                onPress={_actionCancelPress}>
                {_actionCancelTitle}
              </Button>
            )}
          </Card.Actions>
        )}
      </Card>
    );
  }
}

export default CardView;

CardView.propTypes = {
  _cardContainerStyle: PropTypes.object,
  _cardContentStyle: PropTypes.object,
  _cardActionStyle: PropTypes.object,
  _topTitle: PropTypes.string,
  _topSubTitle: PropTypes.string,
  _enableIcon: PropTypes.bool,
  _IconProps: PropTypes.object,
  _bottomTitle: PropTypes.string,
  _bottomSubTitle: PropTypes.string,
  _actionDoneTitle: PropTypes.string,
  _actionCancelTitle: PropTypes.string,
  _actionDonePress: PropTypes.func,
  _actionCancelPress: PropTypes.func,
  _topTitleStyle: PropTypes.object,
  _topSubTitleStyle: PropTypes.object,
  _bottomTitleStyle: PropTypes.object,
  _bottomSubTitleStyle: PropTypes.object,
  _actionDoneTitleStyle: PropTypes.object,
  _actionCancelTitleStyle: PropTypes.object,
};

CardView.defaultProps = {
  _cardContainerStyle: {},
  _cardContentStyle: {},
  _cardActionStyle: {},
  _topTitle: '',
  _topSubTitle: '',
  _enableIcon: false,
  _IconProps: {name: '', size: 20, color: 'black'},
  _bottomTitle: '',
  _bottomSubTitle: '',
  _actionDoneTitle: 'Done',
  _actionCancelTitle: 'Cancel',
  _actionDonePress: () => {},
  _actionCancelPress: () => {},
  _topTitleStyle: {},
  _topSubTitleStyle: {},
  _bottomTitleStyle: {},
  _bottomSubTitleStyle: {},
  _actionDoneTitleStyle: {},
  _actionCancelTitleStyle: {},
};
