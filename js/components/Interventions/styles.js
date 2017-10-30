import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  wrapper: {
    flex: 1,
    height: deviceHeight,
    width: deviceWidth
  }
};