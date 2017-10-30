import React from 'react';
import { TabNavigator } from "react-navigation";

import Interventions from '../Interventions';

const AppTabs = TabNavigator(
  {
    Interventions: {
      screen: Interventions,
    },
  },
  {
    initialRouteName: "Interventions",
  }
);

export default AppTabs;
