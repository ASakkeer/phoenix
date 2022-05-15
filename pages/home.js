import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useBackHandler} from '@react-native-community/hooks';

import {CategoryList} from '../pages/category';
import {NavbarView, CardView, FilterCard, ModalView} from '../components';
import categoryList from './jsonData/categoryList.json';
import {Actions} from 'react-native-router-flux';

function HomeScreen() {
  const DATA = categoryList;
  // console.log(DATA);

  // const [showSort, updateSort] = useState(false);

  useBackHandler(() => {
    Actions.pop();
  });

  const _renderEachItem = ({item}) => {
    return <CardView itemDetails={item} />;
  };

  const updateSortFilterValue = value => {
    // updateSort(value);
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
        <CategoryList />
        {/* <View style={{flex: 1}}>
          <Text>Home page</Text>
        </View> */}
      </SafeAreaView>
      {/* {showSort && sortFilter()} */}
    </View>
  );
}
export default HomeScreen;
