/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sokin Fon Musiqasi (Calm Ambient Music Service)
 * Generative soothing ambient synth pads & warm Rhodes-like chords
 * using the Web Audio API. Pure client-side, zero external dependencies,
 * gentle, relaxing, non-intrusive.
 */

type MusicListener = (isPlaying: boolean, volume: number) => void;

class AmbientMusicService {
  private audioCtx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private isRunning: boolean = false;
  private volume: number = 0.45; // Default gentle level (45%)
  private chordTimer: number | null = null;
  private listeners: Set<MusicListener> = new Set();
  private hasUserInteracted: boolean = false;

  // Soothing chord progressions in F Major / D Minor Pentatonic (Frequencies in Hz)
  // [F, A, C, E], [D, F, A, C], [Bb, D, F, A], [C, E, G, B]
  private readonly chordBank: number[][] = [
    [174.61, 220.00, 261.63, 329.63, 523.25], // Fmaj7 (F3, A3, C4, E4, C5)
    [146.83, 174.61, 220.00, 261.63, 440.00], // Dm7 (D3, F3, A3, C4, A4)
    [116.54, 174.61, 233.08, 293.66, 349.23], // Bbmaj7 (Bb2, F3, Bb3, D4, F4)
    [130.81, 164.81, 196.00, 246.94, 392.00], // Cmaj7/E (C3, E3, G3, B3, G4)
    [110.00, 164.81, 220.00, 261.63, 329.63], // Am7 (A2, E3, A3, C4, E4)
    [174.61, 261.63, 329.63, 392.00, 523.25], // Fadd9 (F3, C4, E4, G4, C5)
  ];

  private currentChordIndex: number = 0;

  constructor() {
    // Check saved preference
    const savedVol = localStorage.getItem('ambient_music_volume');
    if (savedVol !== null) {
      this.volume = Math.max(0, Math.min(1, parseFloat(savedVol)));
    }

    const savedAutoPlay = localStorage.getItem('ambient_music_enabled');
    // Default to true for visiting guests unless they explicitly turned it off
    const shouldPlay = savedAutoPlay !== 'false';

    if (typeof window !== 'undefined') {
      const handleFirstInteraction = () => {
        if (!this.hasUserInteracted) {
          this.hasUserInteracted = true;
          // If enabled, initialize and play
          if (shouldPlay && !this.isRunning) {
            this.play();
          } else if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
          }
        }
      };

      // Listen for any subtle user interaction to unlock browser autoplay restriction
      window.addEventListener('click', handleFirstInteraction, { once: true, passive: true });
      window.addEventListener('scroll', handleFirstInteraction, { once: true, passive: true });
      window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
      window.addEventListener('keydown', handleFirstInteraction, { once: true, passive: true });
    }
  }

  private initAudio() {
    if (this.audioCtx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    this.audioCtx = new AudioContextClass();

    // Master Gain for volume
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume * 0.35, this.audioCtx.currentTime);

    // Warm Lowpass Filter for soft cinematic sound
    this.filterNode = this.audioCtx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(850, this.audioCtx.currentTime);
    this.filterNode.Q.setValueAtTime(1.2, this.audioCtx.currentTime);

    // Convolver / Reverb delay simulation
    const delay = this.audioCtx.createDelay();
    delay.delayTime.setValueAtTime(0.48, this.audioCtx.currentTime);

    const feedback = this.audioCtx.createGain();
    feedback.gain.setValueAtTime(0.35, this.audioCtx.currentTime);

    delay.connect(feedback);
    feedback.connect(delay);

    // Connect nodes
    this.filterNode.connect(this.masterGain);
    this.filterNode.connect(delay);
    delay.connect(this.masterGain);

    this.masterGain.connect(this.audioCtx.destination);
  }

  private playAmbientChord() {
    if (!this.isRunning || !this.audioCtx || !this.filterNode) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const chord = this.chordBank[this.currentChordIndex];
    this.currentChordIndex = (this.currentChordIndex + 1) % this.chordBank.length;

    const now = this.audioCtx.currentTime;
    const chordDuration = 7.5; // 7.5 seconds per calm ambient chord transition
    const attack = 2.2; // Slow warm fade-in
    const release = 3.5; // Slow lingering release

    chord.forEach((freq, idx) => {
      if (!this.audioCtx || !this.filterNode) return;

      // Primary warm sine oscillator
      const osc1 = this.audioCtx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);

      // Secondary slightly detuned triangle oscillator for rich pad depth
      const osc2 = this.audioCtx.createOscillator();
      osc2.type = 'triangle';
      // Subtle stereo/chorus detune
      osc2.detune.setValueAtTime(idx % 2 === 0 ? 4 : -4, now);
      osc2.frequency.setValueAtTime(freq, now);

      // Note gain envelope
      const noteGain = this.audioCtx.createGain();
      noteGain.gain.setValueAtTime(0.0001, now);
      // Gentle swell in
      const peakGain = (0.08 / Math.sqrt(idx + 1));
      noteGain.gain.exponentialRampToValueAtTime(peakGain, now + attack);
      // Gentle fade out
      noteGain.gain.setValueAtTime(peakGain, now + chordDuration - release);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + chordDuration);

      // Connect oscillators
      osc1.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(this.filterNode);

      osc1.start(now);
      osc2.start(now);

      osc1.stop(now + chordDuration);
      osc2.stop(now + chordDuration);
    });

    // Schedule next chord with slight overlap for seamless ambient texture
    this.chordTimer = window.setTimeout(() => {
      this.playAmbientChord();
    }, 6000);
  }

  public play() {
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.isRunning = true;
      localStorage.setItem('ambient_music_enabled', 'true');
      this.playAmbientChord();
      this.notify();
    } catch {
      // Ignored if browser blocks before gesture
    }
  }

  public pause() {
    this.isRunning = false;
    localStorage.setItem('ambient_music_enabled', 'false');
    if (this.chordTimer !== null) {
      clearTimeout(this.chordTimer);
      this.chordTimer = null;
    }
    this.notify();
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.pause();
    } else {
      this.play();
    }
    return this.isRunning;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    localStorage.setItem('ambient_music_volume', this.volume.toString());
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(this.volume * 0.35, this.audioCtx.currentTime);
    }
    this.notify();
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsPlaying(): boolean {
    return this.isRunning;
  }

  public subscribe(fn: MusicListener): () => void {
    this.listeners.add(fn);
    fn(this.isRunning, this.volume);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isRunning, this.volume));
  }
}

export const ambientMusic = new AmbientMusicService();
