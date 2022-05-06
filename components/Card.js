import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {Rating, AirbnbRating} from 'react-native-ratings';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const _styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderWidth: 1,
    margin: 3,
    borderColor: '#F2F2F2',
    borderRadius: 3,
  },
  __p_L_I: {
    width: windowWidth / 2 - 15,
    height: 230,
    padding: 15,
  },
  title: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 7,
  },
  mainTitle: {
    color: '#4a6076',
    // fontSize: 16,
    marginBottom: 7,
  },
  currentPriceLabel: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  pastPriceLabel: {
    color: 'grey',
    fontSize: 12,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginRight: 5,
  },
  discountLabel: {
    color: '#4a6076',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

function CardView(props) {
  const {itemDetails} = props;

  _renderBranchContainer = () => (
    <View>
      <Text style={_styles.title} numberOfLines={1}>
        {itemDetails.brand}
      </Text>
    </View>
  );

  _renderProductContainer = () => (
    <View>
      <Text style={_styles.mainTitle} numberOfLines={1}>
        {itemDetails.productName}
      </Text>
    </View>
  );

  _renderImageContainer = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#F2F2F2',
        paddingVertical: 5,
      }}>
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
  );

  _renderSizeContainer = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {itemDetails?.size.map(eachSize => (
        <View
          style={{
            borderWidth: 1,
            borderColor: '#4a6076',
            borderRadius: 100,
            width: 35,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
            padding: 3,
          }}>
          <Text style={{fontSize: 16, color: '#4a6076'}}>{eachSize}</Text>
        </View>
      ))}
    </View>
  );

  _renderRatingContainer = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
      }}>
      <Rating
        onFinishRating={() => {}}
        isDisabled={true}
        startingValue={itemDetails?.productRating}
        imageSize={15}
        readonly
      />
      <Text
        style={{
          fontSize: 12,
          color: 'grey',
          marginLeft: 5,
        }}>
        ({itemDetails?.customerRatingCount})
      </Text>
    </View>
  );

  _renderPriceContainer = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={_styles.currentPriceLabel}>
        <Text style={{fontSize: 12}}>{'₹'}</Text>
        {itemDetails?.currentPrice}
      </Text>
      <Text style={_styles.pastPriceLabel}>{itemDetails?.pastPrice}</Text>
      <Text style={_styles.discountLabel}>{itemDetails?.discount} off</Text>
    </View>
  );

  return (
    <View style={_styles.container}>
      {_renderImageContainer()}
      <View style={{padding: 10}}>
        {_renderBranchContainer()}
        {_renderProductContainer()}
        {/* Size UI start */}
        {/* {itemDetails?.size.length > 0 && _renderSizeContainer()} */}
        {/* Size UI end */}
        {_renderRatingContainer()}
        {_renderPriceContainer()}
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
