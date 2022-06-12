import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {CheckIcon} from '../../svg/membercard';
import {Header} from '../../components';
import styles from './styles';
import CodeChecked from './CodeChecked';

const Cards = () => {
  return (
    <View style={styles.container}>
      <Header
        isDefault
        containerStyle={{
          paddingVertical: 10,
        }}
        leftStyle={{
          fontWeight: 'bold',
        }}
        middleComponent={
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            THẺ THÀNH VIÊN
          </Text>
        }
      />
      <CodeChecked />
      <View style={styles.wrapContent}>
        <Text style={styles.notification}>
          Mã thành viên này được áp dụng giảm 5% trên tổng hóa đơn khi thanh
          toán tại quầy.
        </Text>
        <View style={styles.img}>
          <CheckIcon />
        </View>
        <Text style={styles.notification}>
          Vui lòng liên hệ thu ngân để được quét mã thành viên mổi khi bạn thanh
          toán hóa đơn tại các chi nhánh của T&T Foods
        </Text>
      </View>
    </View>
  );
};

export default Cards;
