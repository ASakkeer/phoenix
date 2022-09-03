import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';

import {FilterCard} from '../../components';
import categoryList from '../jsonData/categoryList.json';

function CategoryList() {
  const DATA = categoryList;
  return (
    <View style={{flex: 1}}>
      <FilterCard updateSortFilterValue={updateSortFilterValue} />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 16,
            margin: 7,
            fontWeight: 'bold',
          }}>
          Mens category
        </Text>
        <FlatList
          data={DATA}
          renderItem={_renderEachItem}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
      </View>
    </View>
  );
}
export default CategoryList;
