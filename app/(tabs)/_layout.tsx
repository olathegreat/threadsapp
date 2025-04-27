import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home screen',
          tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Tab Two',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIconStyle: {
            backgroundColor: '#f1f5f9',
            borderRadius: 16,
            width: 48,
            marginTop: 4,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color ,size}) => <TabBarIcon name="user"  color={color} />  
        }}
      />
    </Tabs>
  );
}
