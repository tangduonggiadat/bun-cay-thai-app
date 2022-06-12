import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {Header} from '../../components';
import styles from './styles';
import ListNews from './PromoNews';
import Listkeys from './PromoKeys';
import {theme} from '../../theme';

const Promotion = () => {
  const PromoIDRoute = () => (
    <View style={styles.wrapPromo}>
      <Listkeys />
    </View>
  );

  const PromoNewsRoute = () => (
    <View style={styles.wrapPromo}>
      <ListNews />
    </View>
  );

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'MaKM', title: 'Mã khuyến mãi'},
    {key: 'TinKM', title: 'Tin khuyến mãi'},
  ]);

  const renderScene = SceneMap({
    MaKM: PromoIDRoute,
    TinKM: PromoNewsRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      getLabelText={({route}) => route.title}
      activeColor={'#80CD28'}
      inactiveColor={theme.colors.black}
      style={{backgroundColor: theme.colors.white}}
      indicatorStyle={{borderColor: theme.colors.green, borderWidth: 2}}
      pressColor={'white'}
    />
  );
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
            KHUYẾN MÃI
          </Text>
        }
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        backgroundColor={'transparent'}
      />
    </View>
  );
};

export default Promotion;
