import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface KeyLabelProps {
  noteName: string;
  testID?: string;
}

const KeyLabel: React.FC<KeyLabelProps> = ({ noteName, testID }) => {
  return (
    <View style={styles.labelContainer} testID={testID}>
      <Text style={styles.labelText}>{noteName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    bottom: 5, // Adjust as needed to position on the Tine
    // backgroundColor: 'rgba(0,0,0,0.1)', // Optional: slight background for readability
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
  },
  labelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for good contrast on dark tines
    textAlign: 'center',
  },
});

export default KeyLabel;
