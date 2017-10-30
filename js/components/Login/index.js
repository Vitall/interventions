import React from "react";
import {
  View,
  Text, Button,
  Form, Item, Input
} from "native-base";
import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Form style={styles.from}>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
          <Button primary onPress={() => this.props.navigation.navigate("AppTabs")}>
            <Text> Login </Text>
          </Button>
        </Form>
      </View>
    );
  }
}

const styles = {
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
};