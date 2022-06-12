import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
import {theme} from '../../../theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    height: windowHeight / 2,
    marginVertical: 7,
    backgroundColor: theme.colors.white,
  },
  img: {
    width: '100%',
    height: '50%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    color: theme.colors.green,
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: theme.colors.gray,
    fontSize: 16,
    fontStyle: 'italic',
    paddingVertical: 5,
  },
  description: {
    fontSize: 16,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  wrapHead: {
    padding: 10,
  },
  wrapFoot: {
    backgroundColor: theme.colors.green,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
});
