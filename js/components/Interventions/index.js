import React from 'react';

import { Button, View, List, ListItem, Text } from 'native-base';

import styles from './styles';

class Interventions extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Interventions'
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <List>
          <ListItem>
            <Text>Simon Mignolet</Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan Lovren</Text>
          </ListItem>
        </List>
      </View>
    );
  }
}

export default Interventions;