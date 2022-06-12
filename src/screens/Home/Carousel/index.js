/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Image, FlatList, View} from 'react-native';
import styles from './styles';

const data = [
  {
    id: 1,
    img: require('../../../assets/images/banner.jpg'),
  },
  {
    id: 2,
    img: require('../../../assets/images/banner.jpg'),
  },
  {
    id: 3,
    img: require('../../../assets/images/banner.jpg'),
  },
  {
    id: 4,
    img: require('../../../assets/images/banner.jpg'),
  },
  {
    id: 5,
    img: require('../../../assets/images/banner.jpg'),
  },
];
const Item = ({item, onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image style={styles.banner} source={item.img} />
    </View>
  );
};
const Carousel = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={Platform.OS === 'ios' ? true : false}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};

export default Carousel;
