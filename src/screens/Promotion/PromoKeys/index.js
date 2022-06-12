/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Cross, BoxCircle} from '../../../svg/common';
import styles from './styles';

const data = [
  {
    id: 1,
    title: 'NOW GIẢM 50%',
    sale: '-50%',
    description1: 'Giảm 30% trên tổng hóa đơn',
    description2: 'Giá trị đơn hàng tối thiểu 45.000đ',
    description3: 'Giảm tối đa 15.000đ',
    time: 'Thời gian khuyến mãi đến hết ngày 15/05/2021',
  },
  {
    id: 2,
    title: 'NOW GIẢM 50%',
    sale: '-50%',
    description1: 'Giảm 30% trên tổng hóa đơn',
    description2: 'Giá trị đơn hàng tối thiểu 45.000đ',
    description3: 'Giảm tối đa 15.000đ',
    time: 'Thời gian khuyến mãi đến hết ngày 15/05/2021',
  },
  {
    id: 3,
    title: 'NOW GIẢM 50%',
    sale: '-50%',
    description1: 'Giảm 30% trên tổng hóa đơn',
    description2: 'Giá trị đơn hàng tối thiểu 45.000đ',
    description3: 'Giảm tối đa 15.000đ',
    time: 'Thời gian khuyến mãi đến hết ngày 15/05/2021',
  },
  {
    id: 4,
    title: 'NOW GIẢM 50%',
    sale: '-50%',
    description1: 'Giảm 30% trên tổng hóa đơn',
    description2: 'Giá trị đơn hàng tối thiểu 45.000đ',
    description3: 'Giảm tối đa 15.000đ',
    time: 'Thời gian khuyến mãi đến hết ngày 15/05/2021',
  },
];
const Item = ({item, onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <View style={styles.wrapBox}>
        <BoxCircle />
      </View>
      <View style={styles.saleKeys}>
        <Text style={{color: 'white', fontSize: 20}}>{item.sale}</Text>
      </View>

      <View style={styles.wrapTitle}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{paddingLeft: 70}}>
          <Cross />
        </View>
      </View>
      <View style={styles.decription}>
        <Text style={styles.txtdecrip}>{item.description1}</Text>
        <Text style={styles.txtdecrip}>{item.description2}</Text>
        <Text style={styles.txtdecrip}>{item.description3}</Text>
        <Text style={styles.txtdecrip}>{item.time}</Text>
      </View>
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
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default ListItem;
