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
    title: 'Tặng 10k cho đơn từ 60k',
    date: '30/04/2021',
    description:
      'Bún Cay Thái tặng bạn mã khuyến mãi 10k cho hóa đơn từ 60k. Chương trình khuyến mãi có hạn, nhanh tay nhận khuyến mãi nhé...',
    time: 'Thời gian: 30/04 - 15/05/2021',
    img: require('../../../assets/images/sale.jpg'),
  },
  {
    id: 2,
    title: 'Tặng 10k cho đơn từ 60k',
    date: '30/04/2021',
    description:
      'Bún Cay Thái tặng bạn mã khuyến mãi 10k cho hóa đơn từ 60k. Chương trình khuyến mãi có hạn, nhanh tay nhận khuyến mãi nhé...',
    time: 'Thời gian: 30/04 - 15/05/2021',
    img: require('../../../assets/images/sale.jpg'),
  },
  {
    id: 3,
    title: 'Tặng 10k cho đơn từ 60k',
    date: '30/04/2021',
    description:
      'Bún Cay Thái tặng bạn mã khuyến mãi 10k cho hóa đơn từ 60k. Chương trình khuyến mãi có hạn, nhanh tay nhận khuyến mãi nhé...',
    time: 'Thời gian: 30/04 - 15/05/2021',
    img: require('../../../assets/images/sale.jpg'),
  },
  {
    id: 4,
    title: 'Tặng 10k cho đơn từ 60k',
    date: '30/04/2021',
    description:
      'Bún Cay Thái tặng bạn mã khuyến mãi 10k cho hóa đơn từ 60k. Chương trình khuyến mãi có hạn, nhanh tay nhận khuyến mãi nhé...',
    time: 'Thời gian: 30/04 - 15/05/2021',
    img: require('../../../assets/images/sale.jpg'),
  },
  {
    id: 5,
    title: 'Tặng 10k cho đơn từ 60k',
    date: '30/04/2021',
    description:
      'Bún Cay Thái tặng bạn mã khuyến mãi 10k cho hóa đơn từ 60k. Chương trình khuyến mãi có hạn, nhanh tay nhận khuyến mãi nhé...',
    time: 'Thời gian: 30/04 - 15/05/2021',
    img: require('../../../assets/images/sale.jpg'),
  },
];
const Item = ({item, onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image style={styles.img} source={item.img} />
      <View style={styles.wrapHead}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.wrapFoot}>
        <Text style={styles.time}>{item.time}</Text>
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
