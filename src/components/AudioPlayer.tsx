import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Soft romantic pentatonic note frequencies in Hz (F4, A4, C5, D5, E5, G5, C4)
  const notes = [
    261.63, // C4
    329.63, // E4
    349.23, // F4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
  ];

  // Soft chord progressions for peaceful contemplation
  const chords = [
    [261.63, 329.63, 392.00, 523.25], // C major
    [220.00, 261.63, 329.63, 440.00], // A minor
    [174.61, 261.63, 349.23, 523.25], // F major
    [196.00, 246.94, 293.66, 392.00], // G major
  ];

  const playChime = (freq: number, delay = 0, duration = 3.5) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime + delay;

    // Primary warm sine wave
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Subtle gentle harmonic
    const harmonic = ctx.createOscillator();
    const harmonicGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    harmonic.type = 'triangle';
    harmonic.frequency.setValueAtTime(freq * 2, now);

    // Warm low-pass filter to keep sound cozy and tender
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);

    // Soft envelope with slow attack and graceful decay
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.045, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    harmonicGain.gain.setValueAtTime(0.0001, now);
    harmonicGain.gain.linearRampToValueAtTime(0.008, now + 0.2);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.7);

    osc.connect(gain);
    harmonic.connect(harmonicGain);
    gain.connect(filter);
    harmonicGain.connect(filter);
    filter.connect(ctx.destination);

    osc.start(now);
    harmonic.start(now);
    osc.stop(now + duration + 0.1);
    harmonic.stop(now + duration + 0.1);
  };

  const startMusic = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setIsPlaying(true);
      let chordIndex = 0;

      const triggerSequence = () => {
        const currentChord = chords[chordIndex % chords.length];
        // Play chord notes gently staggered like harp strings
        currentChord.forEach((freq, idx) => {
          playChime(freq, idx * 0.25, 4.0);
        });

        // Add a delicate melody note on top
        const randomMelodyNote = notes[Math.floor(Math.random() * notes.length)];
        playChime(randomMelodyNote, 1.4, 3.2);

        chordIndex++;
      };

      triggerSequence();
      intervalRef.current = window.setInterval(triggerSequence, 4800);
    } catch {
      // AudioContext not supported or blocked
      setIsPlaying(false);
    }
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      type="button"
      className="group flex items-center gap-2 rounded-full border border-[#EDE2E5] bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[#68575B] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#DEC5CB] hover:bg-white hover:text-[#38262A] active:scale-95"
      aria-label={isPlaying ? 'ปิดเสียงดนตรีบรรเลง' : 'เปิดเสียงดนตรีบรรเลงเบาๆ'}
      title={isPlaying ? 'ปิดเสียงดนตรีบรรเลง' : 'เปิดเสียงดนตรีบรรเลงเบาๆ'}
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        {isPlaying ? (
          <Volume2 className="h-3.5 w-3.5 text-[#A86475] transition-transform group-hover:scale-110" />
        ) : (
          <VolumeX className="h-3.5 w-3.5 text-[#9E9094] transition-transform group-hover:scale-110" />
        )}
      </span>
      <span className="tracking-wide">
        {isPlaying ? 'ดนตรีเปิดอยู่' : 'เปิดเสียงบรรเลง'}
      </span>
    </button>
  );
}
