import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {Rating} from 'react-native-ratings';
import {MaterialCommunityIcon} from '../../components/Icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const _styles = StyleSheet.create({
  __p_L_I: {
    width: windowWidth - 30,
    // height: 230,
    padding: 15,
    flex: 1,
    borderRadius: 7,
  },
  title: {
    color: 'grey',
    // fontSize: 12,
    marginBottom: 7,
  },
  mainTitle: {
    color: '#4a6076',
    fontSize: 16,
    marginBottom: 7,
  },
  currentPriceLabel: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  pastPriceLabel: {
    color: 'grey',
    fontSize: 14,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginRight: 5,
  },
  discountLabel: {
    color: '#4a6076',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  __icon: {
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
});
import {NavbarView} from '../../components';

function CategoryDetails(props) {
  const {itemDetails} = props;

  _renderSizeContainer = () => (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
      }}>
      {itemDetails?.size.map(eachSize => (
        <View
          style={{
            borderWidth: 1,
            borderColor: '#4a6076',
            borderRadius: 100,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
          }}>
          <Text style={{fontSize: 16, color: '#4a6076'}}>{eachSize}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={{backgroundColor: '#F9F9F9', flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <NavbarView _isLogo={true} _isSearch={false} _isBackArrow={true} />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              height: windowHeight / 1.9,
              padding: 15,
              shadowColor: '#adadad',
              shadowOpacity: 0.2,
              shadowOffset: {width: 0, height: 5},
              shadowRadius: 3,
              elevation: 3,
              borderRadius: 7,
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
                  width: 45,
                  height: 45,
                  position: 'absolute',
                  top: 25,
                  left: 25,
                }}>
                <Text style={_styles.discountLabel}>
                  {itemDetails?.discount}
                </Text>
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
                width: 45,
                height: 45,
                position: 'absolute',
                top: 25,
                right: 25,
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
          <View
            style={{
              // flex: 0.5,
              paddingHorizontal: 15,
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                padding: 15,
                shadowColor: '#adadad',
                shadowOpacity: 0.2,
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 3,
                elevation: 3,
                borderRadius: 7,
                marginBottom: 15,
              }}>
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
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text style={_styles.currentPriceLabel}>
                  <Text style={{fontSize: 12}}>{'₹'}</Text>
                  {itemDetails?.currentPrice}
                </Text>
                <Text style={_styles.pastPriceLabel}>
                  {itemDetails?.pastPrice}
                </Text>
              </View>
              {/* Size UI start */}
              {itemDetails?.size.length > 0 && _renderSizeContainer()}
              {/* Size UI end */}
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
            </View>
          </View>
        </ScrollView>
        {/* Action Container */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingHorizontal: 15,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              shadowColor: '#adadad',
              backgroundColor: '#fff',
              shadowOpacity: 0.2,
              shadowOffset: {width: 0, height: 5},
              shadowRadius: 3,
              elevation: 3,
              borderRadius: 7,
              height: 60,
              marginRight: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              shadowColor: '#adadad',
              backgroundColor: '#4a6076',
              shadowOpacity: 0.2,
              shadowOffset: {width: 0, height: 5},
              shadowRadius: 3,
              elevation: 3,
              borderRadius: 7,
              height: 60,
              marginLeft: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: '#fff'}}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* {showSort && sortFilter()} */}
    </View>
  );
}
export default CategoryDetails;

CategoryDetails.propTypes = {
  itemDetails: PropTypes.object,
};

CategoryDetails.defaultProps = {
  itemDetails: {},
};
