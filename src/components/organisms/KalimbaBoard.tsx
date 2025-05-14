import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import KalimbaKey from '../molecules/KalimbaKey';

// Standard 17-key Kalimba in C Major tuning (can be made configurable)
const DEFAULT_TUNING_17_C_MAJOR = [
  // Lower row (longer tines)
  { note: 'D6', height: 100 }, { note: 'B5', height: 105 }, { note: 'G5', height: 110 }, { note: 'E5', height: 115 }, { note: 'C5', height: 120 }, { note: 'A4', height: 125 }, { note: 'F4', height: 130 }, { note: 'D4', height: 135 }, 
  // Center tine (longest)
  { note: 'C4', height: 140 },
  // Upper row (shorter tines, mirrored from lower but one octave up typically, or specific notes)
  { note: 'E4', height: 130 }, { note: 'G4', height: 125 }, { note: 'B4', height: 120 }, { note: 'D5', height: 115 }, { note: 'F5', height: 110 }, { note: 'A5', height: 105 }, { note: 'C6', height: 100 }, { note: 'E6', height: 95 }
];

interface KalimbaBoardProps {
  tuning?: Array<{ note: string; height: number }>;
  onPlayNote: (note: string) => void;
  testID?: string;
}

const KalimbaBoard: React.FC<KalimbaBoardProps> = ({ tuning = DEFAULT_TUNING_17_C_MAJOR, onPlayNote, testID }) => {
  // Kalimba tines are typically arranged with the longest in the center and shorter ones fanning out.
  // The default tuning array is structured left-to-right as you'd see it.
  // For visual representation, we might need to adjust layout or tine heights more dynamically.
  // This example just lays them out in order.

  // Split tines for a more realistic layout (longer in middle, shorter outwards)
  // A common 17-key layout has 8 tines on one side, 1 in the middle, 8 on the other.
  // Let's re-order for a more visually appealing layout if the default array isn't already.
  // The provided DEFAULT_TUNING_17_C_MAJOR is already in a playable left-to-right order.

  return (
    <View style={styles.boardContainer} testID={testID}>
      <ScrollView horizontal contentContainerStyle={styles.keysScrollContainer} showsHorizontalScrollIndicator={false}>
        {tuning.map((keyInfo, index) => (
          <KalimbaKey
            key={`${keyInfo.note}-${index}`}
            note={keyInfo.note}
            onPlayNote={onPlayNote}
            tineHeight={keyInfo.height}
            testID={`kalimba-key-${keyInfo.note}`}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end', // Tines usually extend downwards from a bridge
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D2B48C', // Tan color for the wooden board
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8B4513', // SaddleBrown for border
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    minHeight: 180, // Ensure enough space for tines
  },
  keysScrollContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end', // Align tines at their base (top of the tine component)
    justifyContent: 'center',
  },
});

export default KalimbaBoard;
