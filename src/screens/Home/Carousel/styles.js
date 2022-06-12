import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  banner: {
    width: windowWidth - 22,
    height: 222,
    borderRadius: 10,
  },
});
