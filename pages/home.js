import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {NavbarView, CardView, FilterCard, ModalView} from '../components';
import categoryList from './jsonData/categoryList.json';

function HomeScreen() {
  const DATA = categoryList;
  // console.log(DATA);

  // const [showSort, updateSort] = useState(false);

  _renderEachItem = ({item}) => {
    return <CardView itemDetails={item} />;
  };

  updateSortFilterValue = value => {
    updateSort(value);
  };

  // const sortFilter = () => (
  //   <ModalView
  //     isVisible={true}
  //     supportedOrientations={['portrait', 'landscape']}
  //     animationType="slide"
  //     transparentType={true}
  //     modalStyle={{
  //       backgroundColor: 'rgba(0, 0, 0, 0.6)',
  //       margin: 0, // This is the important style you need to set
  //       alignItems: undefined,
  //       justifyContent: undefined,
  //       flex: 1,
  //     }}
  //     keyboardShouldPersistTaps="always">
  //     <TouchableOpacity
  //       style={{flex: 1}}
  //       onPress={() => updateSortFilterValue(false)}>
  //       <SafeAreaView
  //         style={{
  //           flex: 1,
  //           borderWidth: 3,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>
  //         <View style={{backgroundColor: 'white'}}>
  //           <Text>Hey</Text>
  //         </View>
  //       </SafeAreaView>
  //     </TouchableOpacity>
  //   </ModalView>
  // );

  return (
    <View style={{backgroundColor: '#F9F9F9', flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <NavbarView _isLogo={true} _isSearch={true} _isBackArrow={false} />
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
      </SafeAreaView>
      {/* {showSort && sortFilter()} */}
    </View>
  );
}
export default HomeScreen;
