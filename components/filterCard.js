import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialCommunityIcon} from './Icons';

const _styles = StyleSheet.create({
  __icon: {
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
});

function FilterCard(props) {
  const {updateSortFilterValue} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: '#F2F2F2',
        marginTop: 10,
        margin: 5,
        borderRadius: 7,
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          padding: 5,
          // borderRightWidth: 1,
          // borderColor: '#F2F2F2',
          marginRight: 5,
          backgroundColor: '#fff',
          shadowColor: '#adadad',
          shadowOpacity: 0.2,
          shadowOffset: {width: 0, height: 0},
          shadowRadius: 3,
          elevation: 3,
          borderRadius: 7,
        }}
        onPress={() => updateSortFilterValue(true)}>
        <MaterialCommunityIcon
          style={_styles.__icon}
          name="sort"
          color="#4a6076"
          size={20}
        />
        <Text style={{color: '#4a6076'}}>Sort</Text>
        <View
          style={{
            // position: 'absolute',
            width: 10,
            height: 10,
            backgroundColor: '#4a6076',
            borderRadius: 100,
            left: 5,
            top: -5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          padding: 5,
          // borderRightWidth: 1,
          // borderColor: '#F2F2F2',
          marginLeft: 5,
          backgroundColor: '#fff',
          shadowColor: '#adadad',
          shadowOpacity: 0.2,
          shadowOffset: {width: 0, height: 0},
          shadowRadius: 3,
          elevation: 3,
          borderRadius: 7,
        }}>
        <MaterialCommunityIcon
          style={_styles.__icon}
          name="filter-variant"
          color="#4a6076"
          size={22}
        />
        <Text style={{color: '#4a6076'}}>Filter</Text>
        <View
          style={{
            // position: 'absolute',
            width: 10,
            height: 10,
            backgroundColor: '#4a6076',
            borderRadius: 100,
            left: 5,
            top: -5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default FilterCard;

FilterCard.propTypes = {
  updateSortFilterValue: PropTypes.func,
};

FilterCard.defaultProps = {
  updateSortFilterValue: () => {},
};
