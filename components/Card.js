import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {Rating} from 'react-native-ratings';

import {MaterialCommunityIcon} from './Icons';
import {Actions} from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const _styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderWidth: 1,
    margin: 5,
    borderColor: '#F2F2F2',
    borderRadius: 7,
    backgroundColor: '#fff',
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
    fontSize: 10,
    textAlign: 'center',
  },
  __icon: {
    paddingVertical: 5,
    paddingHorizontal: 7,
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
      {!!itemDetails?.discount && (
        <View
          style={{
            backgroundColor: '#fff',
            shadowColor: '#adadad',
            shadowOpacity: 0.2,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 3,
            elevation: 3,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            width: 35,
            height: 35,
            position: 'absolute',
            top: 5,
            left: 5,
          }}>
          <Text style={_styles.discountLabel}>{itemDetails?.discount}</Text>
        </View>
      )}
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          shadowColor: '#adadad',
          shadowOpacity: 0.2,
          shadowOffset: {width: 0, height: 0},
          shadowRadius: 3,
          elevation: 3,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          width: 35,
          height: 35,
          position: 'absolute',
          top: 5,
          right: 5,
        }}>
        {!itemDetails?.isInWishlist && (
          <MaterialCommunityIcon
            style={{}}
            name="heart-outline"
            color="#4a6076"
            size={22}
          />
        )}
        {itemDetails?.isInWishlist && (
          <MaterialCommunityIcon
            style={{}}
            name="heart"
            color="red"
            size={22}
          />
        )}
      </TouchableOpacity>
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
        marginBottom: 10,
      }}>
      <Text style={_styles.currentPriceLabel}>
        <Text style={{fontSize: 12}}>{'₹'}</Text>
        {itemDetails?.currentPrice}
      </Text>
      <Text style={_styles.pastPriceLabel}>{itemDetails?.pastPrice}</Text>
    </View>
  );

  _renderAddButtonContainer = () => (
    <TouchableOpacity
      style={{
        backgroundColor: '#4a6076',
        shadowColor: '#adadad',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        elevation: 3,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        position: 'absolute',
        bottom: 5,
        right: 5,
        zIndex: 1,
      }}>
      <MaterialCommunityIcon style={{}} name="plus" color="#fff" size={22} />
    </TouchableOpacity>
  );

  return (
    <TouchableOpacity
      style={_styles.container}
      activeOpacity={0.8}
      onPress={() => Actions.CategoryDetails({itemDetails: itemDetails})}>
      {_renderImageContainer()}
      <View style={{padding: 10}}>
        {_renderAddButtonContainer()}
        {_renderBranchContainer()}
        {_renderProductContainer()}
        {/* Size UI start */}
        {/* {itemDetails?.size.length > 0 && _renderSizeContainer()} */}
        {/* Size UI end */}
        {_renderPriceContainer()}
        {_renderRatingContainer()}
      </View>
    </TouchableOpacity>
  );
}

export default CardView;

CardView.propTypes = {
  itemDetails: PropTypes.object,
};

CardView.defaultProps = {
  itemDetails: {},
};
