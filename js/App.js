import React from "react";
import { StackNavigator } from "react-navigation";
import { Image } from 'react-native';
import { Container, Content, Header } from "native-base";

import Login from './components/Login';
import AppTabs from './components/AppTabs';

const MainEntryPoint = StackNavigator(
  {
    Login: { screen: Login },
    AppTabs: { screen: AppTabs },
  },
  {
    initialRouteName: "Login",
  }
);

export default () => 
  <Container>
    <Content style={styles.root}>
      <MainEntryPoint/>
    </Content>
  </Container>;


const styles = {
  wrapper: {
    flex: 1,
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  root: {
    flex: 1,
    backgroundColor: 'rgba(164,210,219,1)',
  }
};
