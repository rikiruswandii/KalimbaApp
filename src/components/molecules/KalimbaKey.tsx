import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Tine from '../atoms/Tine';
import KeyLabel from '../atoms/KeyLabel';

interface KalimbaKeyProps {
  note: string; // e.g., "C4", "D#5"
  onPlayNote: (note: string) => void;
  tineHeight?: number; // Allow dynamic height for different tines
  testID?: string;
}

const KalimbaKey: React.FC<KalimbaKeyProps> = ({ note, onPlayNote, tineHeight = 150, testID }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    onPlayNote(note);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    // Sound might stop on release or have a decay, handled by onPlayNote or sound engine
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} testID={testID}>
      <View style={styles.keyContainer}>
        <Tine note={note} onPress={() => { /* Press handled by TouchableWithoutFeedback */ }} isPressed={isPressed} height={tineHeight} />
        <KeyLabel noteName={note.replace(/[0-9#b]/g, '')} />{/* Display only note name like C, D, E */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  keyContainer: {
    alignItems: 'center',
    marginHorizontal: 1, // Small gap between keys
    // backgroundColor: 'transparent', // Ensure no unexpected background
  },
});

export default KalimbaKey;
