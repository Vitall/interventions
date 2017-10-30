import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  wrapper: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: deviceHeight,
    width: deviceWidth
  },
  from: {
    width: deviceWidth / 3 * 2
  }
}