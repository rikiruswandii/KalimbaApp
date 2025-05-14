import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

interface TineProps {
  isPressed?: boolean;
  onPress: () => void;
  note: string; // Not used directly in this atom, but good for context or future use
  height: number;
  testID?: string;
}

const Tine: React.FC<TineProps> = ({ isPressed, onPress, note, height, testID }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} testID={testID}>
      <View style={[styles.tine, { height }, isPressed && styles.tinePressed]}>
        {/* Visual representation of a tine. Could be an Image or a styled View */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tine: {
    width: 30,
    backgroundColor: '#7B3F00', // A brownish color for wood/metal
    borderRadius: 5,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#5C2E00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // For potential future elements inside tine
    justifyContent: 'flex-end', // To align KeyLabel at the bottom if combined here
  },
  tinePressed: {
    backgroundColor: '#A0522D', // Lighter color when pressed
    transform: [{ translateY: 2 }], // Slight press down effect
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default Tine;
