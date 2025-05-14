import React from 'react';
import { View, Alert } from 'react-native';
import MainAppLayout from '../components/templates/MainAppLayout';
import KalimbaBoard from '../components/organisms/KalimbaBoard';
import ControlsPanel from '../components/organisms/ControlsPanel';
import InfoDisplay from '../components/molecules/InfoDisplay'; // Example for header
import { playSoundFile } from '../services/sound.service'; // Import the actual sound service

const KalimbaScreen: React.FC = () => {
  const [isRecording, setIsRecording] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentOctave, setCurrentOctave] = React.useState('C Major'); // Example state

  const handlePlayNote = (note: string) => {
    // Construct a simple filename from the note. e.g., C4 -> c4.mp3, C#4 -> cs4.mp3
    // User will need to add actual .mp3 files with these names to the native asset folders.
    const soundFileName = `${note.toLowerCase().replace('#', 's').replace('b', 'f')}.mp3`;
    playSoundFile(soundFileName);
    console.log(`Attempting to play note: ${note} as ${soundFileName}`);
    // Potentially add to recording if isRecording is true
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      Alert.alert('Recording Started', 'Press record again to stop.');
    } else {
      Alert.alert('Recording Stopped', 'Recording saved (placeholder).');
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      Alert.alert('Playback Started', 'Playing recorded session (placeholder).');
    } else {
      Alert.alert('Playback Paused', 'Session paused.');
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsRecording(false);
    Alert.alert('Stopped', 'Playback/Recording stopped.');
  };

  const handleOpenSettings = () => {
    Alert.alert('Settings', 'Settings screen would open here.');
    // navigation.navigate('SettingsScreen'); // If using react-navigation
  };

  const headerContent = (
    <View style={{ alignItems: 'center', paddingBottom: 5 }}>
      <InfoDisplay label="Tuning" value={currentOctave} />
    </View>
  );

  return (
    <MainAppLayout
      headerSection={headerContent}
      kalimbaBoardSection={<KalimbaBoard onPlayNote={handlePlayNote} testID="kalimba-board" />}
      controlsPanelSection={
        <ControlsPanel
          onRecord={handleRecord}
          onPlay={handlePlayPause}
          onStop={handleStop}
          onOpenSettings={handleOpenSettings}
          isRecording={isRecording}
          isPlaying={isPlaying}
          testID="controls-panel"
        />
      }
      testID="kalimba-screen"
    />
  );
};

export default KalimbaScreen;
