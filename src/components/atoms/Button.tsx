import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';
import Icon from './Icon'; // Assuming Icon atom is in the same directory

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title?: string;
  iconName?: string; // Name of the icon if using Icon component
  iconSize?: number;
  iconColor?: string;
  variant?: 'primary' | 'secondary' | 'transparent' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  testID?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  iconName,
  iconSize = 24,
  iconColor = '#FFFFFF',
  variant = 'primary',
  style,
  textStyle,
  disabled,
  testID,
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButton;
      case 'transparent':
        return styles.transparentButton;
      case 'outline':
        return styles.outlineButton;
      case 'primary':
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButtonText;
      case 'transparent':
        return styles.transparentButtonText;
      case 'outline':
        return styles.outlineButtonText;
      case 'primary':
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonBase, getButtonStyles(), disabled && styles.disabledButton, style]}
      disabled={disabled}
      activeOpacity={0.7}
      testID={testID}
    >
      {iconName && <Icon name={iconName} size={iconSize} color={iconColor} style={styles.icon} />}
      {title && <Text style={[styles.textBase, getTextStyles(), textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minHeight: 44, // Ensure good touch target size
  },
  textBase: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  icon: {
    marginRight: 8, // Space between icon and text if both are present
  },
  primaryButton: {
    backgroundColor: '#007AFF', // Example primary color (iOS blue)
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: '#E5E5EA', // Example secondary color (light gray)
  },
  secondaryButtonText: {
    color: '#007AFF',
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
  transparentButtonText: {
    color: '#007AFF',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  outlineButtonText: {
    color: '#007AFF',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default Button;
