import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
import {theme} from '../../../theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 13,

    borderWidth: 1,
    borderColor: theme.colors.gray,
    marginVertical: 8,
    backgroundColor: theme.colors.white,
  },
  wrapTitle: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    color: theme.colors.darkred,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  decription: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  txtdecrip: {
    fontSize: 16,
    paddingVertical: 2,
  },
  wrapBox: {
    position: 'absolute',
    left: -17,
    top: -8,
  },
  saleKeys: {
    position: 'absolute',
    backgroundColor: theme.colors.darkred,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    top: -1,
    left: 2,
    borderRadius: 64,
    borderColor: '#BDBDBD',
    borderWidth: 1,
  },
});
