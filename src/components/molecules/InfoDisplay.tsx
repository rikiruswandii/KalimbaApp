import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../atoms/Text'; // Assuming Text atom is in ../atoms/

interface InfoDisplayProps {
  label: string;
  value: string;
  labelStyle?: object;
  valueStyle?: object;
  containerStyle?: object;
  testID?: string;
}

const InfoDisplay: React.FC<InfoDisplayProps> = ({ label, value, labelStyle, valueStyle, containerStyle, testID }) => {
  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <Text style={[styles.label, labelStyle]} fontSize={14} color="#666666">
        {label}
      </Text>
      <Text style={[styles.value, valueStyle]} fontSize={18} fontWeight="bold" color="#333333">
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
    marginVertical: 4,
    alignItems: 'flex-start', // Default alignment
  },
  label: {
    marginBottom: 2,
  },
  value: {
    // Additional styling for value if needed
  },
});

export default InfoDisplay;
