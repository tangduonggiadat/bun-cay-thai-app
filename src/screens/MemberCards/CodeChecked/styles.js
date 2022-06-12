import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: '95%',
    height: windowHeight / 3.7,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  wrapper: {
    backgroundColor: '#80CD28',
    height: '90%',
    width: '95%',
    margin: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  name: {
    width: '50%',
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  wrapperImg: {
    backgroundColor: 'white',
    height: '65%',
    width: '94%',
    margin: 10,
    borderRadius: 20,
    padding: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});
