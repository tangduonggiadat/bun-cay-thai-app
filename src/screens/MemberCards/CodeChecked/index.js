import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Code = () => {
  return (
    <LinearGradient colors={['#437E00', '#63B900']} style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.name}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            LÊ MINH THUẬN
          </Text>
        </View>
        <View style={styles.wrapperImg}>
          <Image
            style={styles.img}
            source={require('../../../assets/images/code.jpg')}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Code;
