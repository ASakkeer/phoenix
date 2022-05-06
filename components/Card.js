import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const _styles = StyleSheet.create({
  __p_L_I: {
    width: windowWidth / 2 - 15,
    height: 230,
    padding: 15,
  },
  title: {
    color: 'grey',
  },
  mainTitle: {
    color: '#4a6076',
    fontSize: 16,
  },
});

function CardView(props) {
  const {itemDetails} = props;
  return (
    <View style={{flex: 0.5}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          style={_styles.__p_L_I}
          resizeMode="stretch"
          source={{
            uri:
              itemDetails?.images?.length > 0
                ? itemDetails?.images[0]?.url
                : null,
          }}
        />
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text style={_styles.title} numberOfLines={1}>
            {itemDetails.brand}
          </Text>
        </View>
        <View>
          <Text style={_styles.mainTitle} numberOfLines={1}>
            {itemDetails.productName}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default CardView;

CardView.propTypes = {
  itemDetails: PropTypes.object,
};

CardView.defaultProps = {
  itemDetails: {},
};
