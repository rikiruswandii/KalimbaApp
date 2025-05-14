import Sound from 'react-native-sound';

// Enable playback in silence mode (iOS only)
Sound.setCategory('Playback');

/**
 * Plays a sound file.
 * @param soundPath The path to the sound file (e.g., 'c4.mp3').
 *                  These files should be placed in the Android 'main/res/raw' or iOS project.
 *                  For bundled sounds, ensure they are correctly linked in the native projects.
 * @param basePath (Optional) Base path for the sound files, defaults to Sound.MAIN_BUNDLE for bundled assets.
 */
const playSoundFile = (soundPath: string, basePath: any = Sound.MAIN_BUNDLE) => {
  const sound = new Sound(soundPath, basePath, (error) => {
    if (error) {
      console.log('Failed to load the sound', soundPath, error);
      return;
    }
    // Loaded successfully
    console.log('Duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

    sound.play((success) => {
      if (success) {
        console.log('Successfully finished playing', soundPath);
      } else {
        console.log('Playback failed due to audio decoding errors', soundPath);
      }
      // Release the audio player resource once the sound has finished playing
      sound.release();
    });
  });
};

/**
 * Preloads a sound file for faster playback later.
 * @param soundPath The path to the sound file.
 * @param basePath Base path for the sound files.
 * @returns A promise that resolves with the Sound instance or rejects with an error.
 */
const preloadSoundFile = (soundPath: string, basePath: any = Sound.MAIN_BUNDLE): Promise<Sound> => {
  return new Promise((resolve, reject) => {
    const sound = new Sound(soundPath, basePath, (error) => {
      if (error) {
        console.log('Failed to load the sound for preloading', soundPath, error);
        reject(error);
        return;
      }
      console.log('Successfully preloaded sound:', soundPath);
      resolve(sound);
    });
  });
};

// Example of how to use a preloaded sound
// let preloadedNote: Sound | null = null;
// preloadSoundFile('c4.mp3').then(sound => preloadedNote = sound).catch(e => console.error(e));
// if (preloadedNote) { preloadedNote.play(); }

export {
  playSoundFile,
  preloadSoundFile,
};

// Manual type declaration if @types/react-native-sound is not available or causing issues
// You might need to expand this based on your usage of the library
declare module 'react-native-sound' {
  interface Sound {
    _filename: string;
    _loaded: boolean;
    _duration: number;
    _numberOfChannels: number;
    _volume: number;
    _pan: number;
    _numberOfLoops: number;
    _mainBundle: string | null;
    _playerPool: any; // Type this more accurately if known
    _key: string | number;

    constructor(filename: string, basePath?: string | null, callback?: (error: any, sound?: Sound) => void);

    play(onEnd?: (success: boolean) => void): void;
    pause(callback?: () => void): void;
    stop(callback?: () => void): void;
    reset(): void;
    release(): void;
    getDuration(): number;
    getNumberOfChannels(): number;
    getVolume(): number;
    setVolume(value: number): Sound;
    getPan(): number;
    setPan(value: number): Sound;
    getNumberOfLoops(): number;
    setNumberOfLoops(value: number): Sound;
    getCurrentTime(callback: (seconds: number, isPlaying: boolean) => void): void;
    setCurrentTime(seconds: number): Sound;
    isLoaded(): boolean;
    isPlaying(): boolean;

    static setCategory(value: string, mixWithOthers?: boolean): void;
    static enable(enabled: boolean): void;
    static enableInSilenceMode(enabled: boolean): void;
    static setMode(value: string): void;
    static MAIN_BUNDLE: string | null;
    static DOCUMENT: string;
    static LIBRARY: string;
    static CACHES: string;
  }

  const Sound: Sound;
  export default Sound;
}

