import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

interface MainAppLayoutProps {
  kalimbaBoardSection: React.ReactNode;
  controlsPanelSection: React.ReactNode;
  headerSection?: React.ReactNode;
  testID?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  kalimbaBoardSection,
  controlsPanelSection,
  headerSection,
  testID,
}) => {
  return (
    <SafeAreaView style={styles.safeArea} testID={testID}>
      <StatusBar barStyle="light-content" backgroundColor="#2C2C2C" />
      {headerSection && <View style={styles.headerContainer}>{headerSection}</View>}
      <View style={styles.kalimbaContainer}>{kalimbaBoardSection}</View>
      <View style={styles.controlsContainer}>{controlsPanelSection}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2C2C2C', // A slightly lighter dark background for the overall app
  },
  headerContainer: {
    // Styles for an optional header section
    paddingHorizontal: 15,
    paddingTop: 10, // Or adjust as per status bar height if not using SafeAreaView for this part
    paddingBottom: 5,
    // backgroundColor: '#1E1E1E', // Darker header background
  },
  kalimbaContainer: {
    flex: 1, // Takes up most of the space
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Padding around the Kalimba board itself
  },
  controlsContainer: {
    // Controls panel is typically at the bottom
    // backgroundColor: '#1E1E1E', // Match header or specific control panel color
    // No specific flex needed if it's a fixed height, otherwise adjust
  },
});

export default MainAppLayout;
