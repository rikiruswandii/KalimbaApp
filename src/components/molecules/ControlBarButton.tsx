import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon'; // Assuming Icon is correctly set up

interface ControlBarButtonProps {
  actionType: 'play' | 'record' | 'settings' | 'stop' | 'pause' | 'next' | 'previous' | 'save'; // Added more common actions
  onPress: () => void;
  disabled?: boolean;
  isActive?: boolean; // e.g., to show record button is active
  style?: ViewStyle;
  testID?: string;
}

const ControlBarButton: React.FC<ControlBarButtonProps> = ({
  actionType,
  onPress,
  disabled,
  isActive,
  style,
  testID,
}) => {
  let iconName: string | undefined;
  let buttonTitle: string | undefined;
  let iconColor = isActive ? '#FF0000' : '#FFFFFF'; // Example: Red when active for record

  switch (actionType) {
    case 'play':
      iconName = 'play-arrow';
      buttonTitle = 'Play';
      break;
    case 'pause':
      iconName = 'pause';
      buttonTitle = 'Pause';
      break;
    case 'stop':
      iconName = 'stop';
      buttonTitle = 'Stop';
      break;
    case 'record':
      iconName = 'fiber-manual-record'; // Material icon for record
      buttonTitle = 'Record';
      iconColor = isActive ? '#FF0000' : '#000000'; // Red when recording, black otherwise
      break;
    case 'settings':
      iconName = 'settings';
      buttonTitle = 'Settings';
      break;
    case 'next':
      iconName = 'skip-next';
      buttonTitle = 'Next';
      break;
    case 'previous':
      iconName = 'skip-previous';
      buttonTitle = 'Previous';
      break;
    case 'save':
      iconName = 'save';
      buttonTitle = 'Save';
      break;
    default:
      iconName = 'error'; // Fallback icon
      buttonTitle = 'Action';
  }

  return (
    <Button
      onPress={onPress}
      title={!iconName ? buttonTitle : undefined} // Show title if no icon, or for accessibility
      iconName={iconName}
      iconSize={28}
      iconColor={iconColor}
      variant="transparent" // Control bar buttons are often transparent with just icons
      style={[styles.controlButton, style]}
      disabled={disabled}
      testID={testID}
    />
  );
};

const styles = StyleSheet.create({
  controlButton: {
    paddingHorizontal: 10, // Adjust padding for icon-only buttons
    paddingVertical: 8,
    marginHorizontal: 5,
    // backgroundColor: 'rgba(255,255,255,0.1)', // Slight background for visibility on dark themes
    // borderRadius: 25, // Circular buttons if desired
  },
});

export default ControlBarButton;
