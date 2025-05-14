import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
// For this example, we'll assume you're using a library like react-native-vector-icons
// If not, you'd implement SVG or custom font icon handling here.
// Let's mock it for now if the library isn't set up.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Example library

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000000', style, testID }) => {
  // This is a placeholder. In a real app, you would integrate an icon library.
  // For example, using react-native-vector-icons:
  // return <MaterialIcons name={name} size={size} color={color} style={style} testID={testID} />;

  // Mock implementation if react-native-vector-icons is not installed or for simplicity
  // In a real scenario, you'd need to ensure the icon font or SVGs are linked.
  // For now, we'll use a simple Text component as a placeholder if MaterialIcons is not available.
  if (typeof MaterialIcons !== 'function') {
    const MockText = require('react-native').Text;
    return <MockText style={[{ fontSize: size, color: color }, style]} testID={testID}>{name.substring(0,1)}</MockText>;
  }

  return <MaterialIcons name={name} size={size} color={color} style={style} testID={testID} />;
};

// To make this component work, you'd need to install react-native-vector-icons
// and link it: npm install react-native-vector-icons && npx react-native link react-native-vector-icons
// Or if using Expo: expo install @expo/vector-icons

export default Icon;
