import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

import Tasks from './Tasks';
import Notes from './Notes';
import Settings from './Reminder';

// MARK: - TabNavigator

const Nav = createMaterialTopTabNavigator(
  {
    Tasks: {
      screen: Tasks,
    },
    Notes: {
      screen: Notes,
    },
    Settings: {
      screen: Settings,
    },
  },

  {
    initialRouteName: 'Tasks',
    tabBarOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: 'gray',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      showLabel: false,
      showIcon: false,
      style: {
        backgroundColor: 'black',
      },
    },
  },
);

export default createAppContainer(Nav);
