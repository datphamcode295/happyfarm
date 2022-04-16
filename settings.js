import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from './theme';

export default {
  'light': {
    name: 'Light',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="lightbulb-outline"
        {...props}
      />
    ),
  },
  'lighton': {
    name: 'Lighton',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="lightbulb-on-outline"
        {...props}
      />
    ),
  },
  'pump': {
    name: 'Pump',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="water-pump"
        {...props}
      />
    ),
  },
  'humidity': {
    name: 'Humidity',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="water"
        {...props}
      />
    ),
  },
  'open': {
    name: 'Door',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="door-open"
        {...props}
      />
    ),
  },
  'close': {
    name: 'Close',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="door-closed"
        {...props}
      />
    ),
  },
  'ac': {
    name: 'AC',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="air-conditioner"
        {...props}
      />
    ),
  },
  'temperature': {
    name: 'Temperature',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="temperature-celsius"
        {...props}
      />
    ),
  },
  'fan': {
    name: 'Fan',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="fan"
        {...props}
      />
    ),
  },
  'wi-fi': {
    name: 'Wi-Fi',
    icon: ({size, color, ...props}) => (
      <FontAwesome
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="wifi"
        {...props}
      />
    ),
  },
  'electricity': {
    name: 'Electricity',
    icon: ({size, color, ...props}) => (
      <MaterialIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="power"
        {...props}
      />
    ),
  },
};