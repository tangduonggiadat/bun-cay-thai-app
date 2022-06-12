import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {Pin} from '../../../svg/common';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Giao hàng đến</Text>
      <View style={styles.address}>
        <Pin />
        <Text style={styles.tittle}>
          434 Trường Chinh, Phường 13, Quận Tân Bình ...
        </Text>
      </View>
    </View>
  );
};

export default Header;
