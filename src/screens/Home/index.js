import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from './Header';
import Carousel from './Carousel';
import SaleFood from './SaleFood';
import SaleNews from './SaleNews';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.headerBox}>
            <Text style={styles.title}>ĐANG KHUYẾN MÃI</Text>
            <Text style={styles.seemore}>Xem thêm</Text>
          </View>
          <SaleFood />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.headerBox}>
            <Text style={styles.title}>TIN KHUYẾN MÃI</Text>
            <Text style={styles.seemore}>Xem thêm</Text>
          </View>
          <SaleNews />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
