import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Maps from '../screens/maps';
import List from '../screens/list';
import Task from '../screens/task';
import { Icon } from '@rneui/themed';

const Tab = createMaterialBottomTabNavigator();
const PRIMARY_COLOR = '#0da9ba';

export const Tabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: PRIMARY_COLOR }}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon 
                name='home'
                type='font-awesome-5'
                color='#03535c'
            />
            ),
        }}/>
    <Tab.Screen name="Task" component={Task} options={{
          tabBarLabel: 'Task',
          tabBarIcon: ({ color }) => (
            <Icon 
                name='tasks'
                type='font-awesome-5'
                color='#03535c'
            />
            ),
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon 
                name='user'
                type='font-awesome-5'
                color='#03535c'
            />
            ),
        }} />
      <Tab.Screen name="Maps" component={Maps} options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color }) => (
            <Icon 
                name='map'
                type='font-awesome-5'
                color='#03535c'
            />
            ),
        }}/>
      <Tab.Screen name="List" component={List} options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Icon 
                name='list'
                type='font-awesome-5'
                color='#03535c'
            />
            ),
        }} />
    </Tab.Navigator>
  );
}