import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    paddingBottom: 7,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },
  banner: {
    width: 150,
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  name: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  priceWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  price: {
    color: '#80CD28',
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceOr: {
    color: '#80CD28',
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  pricesale: {
    fontSize: 12,
  },
  btnBuy: {
    backgroundColor: '#80CD28',
    marginHorizontal: 5,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
  },
});
