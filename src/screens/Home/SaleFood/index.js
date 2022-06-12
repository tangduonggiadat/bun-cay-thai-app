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
import styles from './styles';

const data = [
  {
    id: 1,
    name: 'BÚN CAY HẢI SẢN',
    price: '150.000',
    priceSale: '120.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
  {
    id: 2,
    name: 'BÚN CAY HẢI SẢN',
    price: '150.000',
    priceSale: '120.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
  {
    id: 3,
    name: 'BÚN CAY HẢI SẢN',
    price: '150.000',
    priceSale: '120.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
  {
    id: 4,
    name: 'BÚN CAY HẢI SẢN',
    price: '150.000',
    priceSale: '120.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
  {
    id: 5,
    name: 'BÚN CAY HẢI SẢN',
    price: '150.000',
    priceSale: '120.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
];
const Item = ({item, onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image style={styles.banner} source={item.img} />
      <Text style={styles.name}>{item.name}</Text>

      <View style={styles.priceWrap}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.priceOr}>|</Text>
        <Text style={styles.pricesale}>{item.priceSale}</Text>
      </View>
      <TouchableOpacity style={styles.btnBuy}>
        <Text style={{color: 'white'}}>Chọn mua</Text>
      </TouchableOpacity>
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
