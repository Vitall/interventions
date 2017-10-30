import React from "react";
import {
  View,
  Text, Button,
  Form, Item, Input
} from "native-base";

import styles from './styles';

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
          <Button primary onPress={() => this.props.navigation.navigate("Interventions")}>
            <Text> Login </Text>
          </Button>
        </Form>
      </View>
    );
  }
}