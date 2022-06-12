import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: windowHeight,
  },
  carousel: {
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginBottom: 10,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seemore: {
    color: '#80CD28',
    fontSize: 18,
    paddingRight: 10,
  },
});
