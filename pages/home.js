import React from 'react';
import {Text, SafeAreaView, View, FlatList} from 'react-native';

import {NavbarView, CardView, FilterCard} from '../components';
import categoryList from './jsonData/categoryList.json';

function HomeScreen() {
  const DATA = categoryList;
  console.log(DATA);

  _renderEachItem = ({item}) => {
    return <CardView itemDetails={item} />;
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <NavbarView _isLogo={true} />
        <FilterCard />
        <View style={{flex: 1}}>
          <FlatList
            data={DATA}
            renderItem={_renderEachItem}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
export default HomeScreen;
