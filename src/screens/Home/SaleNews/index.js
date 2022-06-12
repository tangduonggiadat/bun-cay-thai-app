/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Image, FlatList, View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const data = [
  {
    id: 1,
    title: 'Giảm giá 10k cho đơn hàng từ 60k, nhanh tay nhận ...',
    img: require('../../../assets/images/banner.jpg'),
  },
  {
    id: 2,
    title: 'Giảm giá 10k cho đơn hàng từ 60k, nhanh tay nhận ...',
    img: require('../../../assets/images/banner.jpg'),
  },
  {
    id: 3,
    title: 'Giảm giá 10k cho đơn hàng từ 60k, nhanh tay nhận ...',
    img: require('../../../assets/images/banner.jpg'),
  },
  {
    id: 4,
    title: 'Giảm giá 10k cho đơn hàng từ 60k, nhanh tay nhận ...',
    img: require('../../../assets/images/banner.jpg'),
  },
  {
    id: 5,
    title: 'Giảm giá 10k cho đơn hàng từ 60k, nhanh tay nhận ...',
    img: require('../../../assets/images/banner.jpg'),
  },
];
const Item = ({item, onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image style={styles.banner} source={item.img} />
      <Text style={styles.name}>{item.title}</Text>
    </View>
  );
};
const ListItem = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default ListItem;
