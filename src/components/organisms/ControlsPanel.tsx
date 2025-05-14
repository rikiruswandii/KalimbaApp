import React from 'react';
import { View, StyleSheet } from 'react-native';
import ControlBarButton from '../molecules/ControlBarButton';

interface ControlsPanelProps {
  onRecord?: () => void;
  onPlay?: () => void;
  onStop?: () => void;
  onOpenSettings?: () => void;
  isRecording?: boolean;
  isPlaying?: boolean;
  testID?: string;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  onRecord,
  onPlay,
  onStop,
  onOpenSettings,
  isRecording,
  isPlaying,
  testID,
}) => {
  return (
    <View style={styles.panelContainer} testID={testID}>
      {onRecord && (
        <ControlBarButton
          actionType="record"
          onPress={onRecord}
          isActive={isRecording}
          disabled={isPlaying} // Disable record if playing, for example
          testID="record-button"
        />
      )}
      {onPlay && (
        <ControlBarButton
          actionType={isPlaying ? "pause" : "play"}
          onPress={onPlay}
          disabled={isRecording} // Disable play if recording, for example
          testID="play-pause-button"
        />
      )}
      {onStop && (isPlaying || isRecording) && ( // Show stop if playing or recording
        <ControlBarButton
          actionType="stop"
          onPress={onStop}
          testID="stop-button"
        />
      )}
      {onOpenSettings && (
        <ControlBarButton
          actionType="settings"
          onPress={onOpenSettings}
          testID="settings-button"
        />
      )}
      {/* Add other buttons like save, next, previous as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  panelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#333333', // Dark background for controls
    borderTopWidth: 1,
    borderTopColor: '#555555',
    // position: 'absolute', // If you want it to overlay
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
});

export default ControlsPanel;
