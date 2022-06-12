import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: windowHeight,
  },
  wrapPromo: {
    flex: 1,
    paddingTop: 10,
  },
});
