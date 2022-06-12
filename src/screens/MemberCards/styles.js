import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: windowHeight,
  },
  notification: {
    textAlign: 'center',
    fontSize: 16,
    width: '90%',
  },
  wrapContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  img: {
    alignSelf: 'center',
    paddingVertical: 30,
  },
});
