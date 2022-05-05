import React, {Component} from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import PropTypes from 'prop-types';

class HeaderView extends Component {
  constructor() {
    super();
    this.state = {
      _navIconList: [
        {
          id: '1',
          icon: 'magnify',
          func: this._handleSearch,
          active: true,
        },
        {
          id: '2',
          icon: 'dots-vertical',
          func: this._handleMore,
          active: true,
        },
      ],
    };
  }

  renderNavIcons = () => {
    const {_navIconsColor} = this.props;
    const {_navIconList} = this.state;
    return _navIconList.map(data => {
      if (!data.active) {
        return true;
      }
      return (
        <Appbar.Action
          key={data.id}
          icon={data.icon}
          color={_navIconsColor}
          onPress={data.func}
        />
      );
    });
  };

  render() {
    const {
      _goBack,
      _navEnableBackHandler,
      _navTitle,
      _navSubTitle,
      _navBgStyle,
      _navTitleStyle,
      _navSubTitleStyle,
      _navBackActionColor,
    } = this.props;
    const {_navIconList} = this.state;
    return (
      <Appbar.Header style={_navBgStyle}>
        {_navEnableBackHandler && (
          <Appbar.BackAction color={_navBackActionColor} onPress={_goBack} />
        )}
        <Appbar.Content
          titleStyle={_navTitleStyle}
          title={_navTitle}
          subtitle={_navSubTitle}
          subtitleStyle={_navSubTitleStyle}
        />
        {_navIconList.length > 0 && this.renderNavIcons()}
      </Appbar.Header>
    );
  }
}

export default HeaderView;

HeaderView.propTypes = {
  _goBack: PropTypes.func,
  _navTitle: PropTypes.string,
  _navSubTitle: PropTypes.string,
  _navEnableBackHandler: PropTypes.bool,
  _navBgStyle: PropTypes.object,
  _navTitleStyle: PropTypes.object,
  _navSubTitleStyle: PropTypes.object,
  _navBackActionColor: PropTypes.string,
  _navIconsColor: PropTypes.string,
};

HeaderView.defaultProps = {
  _goBack: () => {},
  _navTitle: '',
  _navSubTitle: '',
  _navEnableBackHandler: false,
  _navBgStyle: {backgroundColor: '#4a6076'},
  _navTitleStyle: {fontSize: 24, color: '#fff'},
  _navSubTitleStyle: {},
  _navBackActionColor: '#000',
  _navIconsColor: '#000',
};
