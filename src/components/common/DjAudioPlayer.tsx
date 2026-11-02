import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Radio } from 'lucide-react';

export const DjAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  // Web Audio synthesizer references
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize and play rhythmic electronic beat via Web Audio API
  const startBeat = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (!gainNodeRef.current) {
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(isMuted ? 0 : volume, ctx.currentTime);
        gainNode.connect(ctx.destination);
        gainNodeRef.current = gainNode;
      }

      let step = 0;
      // 126 BPM rhythm loop
      const tempoInterval = (60 / 126 / 4) * 1000;

      intervalRef.current = window.setInterval(() => {
        if (!audioCtxRef.current || !gainNodeRef.current) return;
        const now = audioCtxRef.current.currentTime;

        // Kick drum on beats 0, 4, 8, 12
        if (step % 4 === 0) {
          const osc = audioCtxRef.current.createOscillator();
          const kickGain = audioCtxRef.current.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(140, now);
          osc.frequency.exponentialRampToValueAtTime(38, now + 0.12);
          kickGain.gain.setValueAtTime(0.7, now);
          kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.connect(kickGain);
          kickGain.connect(gainNodeRef.current);
          osc.start(now);
          osc.stop(now + 0.25);
        }

        // Hi-hat on offbeats
        if (step % 2 === 1) {
          const osc = audioCtxRef.current.createOscillator();
          const hatGain = audioCtxRef.current.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(8000, now);
          hatGain.gain.setValueAtTime(0.12, now);
          hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          osc.connect(hatGain);
          hatGain.connect(gainNodeRef.current);
          osc.start(now);
          osc.stop(now + 0.05);
        }

        // Melodic bass synth pulse
        if (step % 4 === 2) {
          const bassOsc = audioCtxRef.current.createOscillator();
          const bassGain = audioCtxRef.current.createGain();
          bassOsc.type = 'sawtooth';
          const notes = [65.41, 73.42, 87.31, 98.0]; // C2, D2, F2, G2
          const note = notes[Math.floor((step / 4) % notes.length)];
          bassOsc.frequency.setValueAtTime(note, now);
          bassGain.gain.setValueAtTime(0.2, now);
          bassGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
          bassOsc.connect(bassGain);
          bassGain.connect(gainNodeRef.current);
          bassOsc.start(now);
          bassOsc.stop(now + 0.2);
        }

        step = (step + 1) % 16;
      }, tempoInterval);

      setIsPlaying(true);
    } catch {
      // AudioContext fallback
    }
  };

  const stopBeat = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopBeat();
    } else {
      startBeat();
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const nextMute = !isMuted;
      setIsMuted(nextMute);
      gainNodeRef.current.gain.setValueAtTime(
        nextMute ? 0 : volume,
        audioCtxRef.current.currentTime
      );
    } else {
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted) setIsMuted(false);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(val, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-16 sm:bottom-24 right-3 sm:right-5 z-40 max-w-[calc(100vw-24px)]">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 shadow-md hover:shadow-lg transition-all hover:scale-105 group"
          title="Kartik DJ Audio Preview"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isPlaying ? 'animate-ping bg-emerald-400' : 'bg-violet-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isPlaying ? 'bg-emerald-500' : 'bg-violet-600'
              }`}
            />
          </span>
          <Radio className="w-3.5 h-3.5 text-violet-600 group-hover:rotate-12 transition-transform shrink-0" />
          <span className="text-[11px] sm:text-xs truncate max-w-[120px] sm:max-w-none">
            {isPlaying ? 'Live Audio Active' : 'Sound Engine'}
          </span>
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-3 ml-0.5 sm:ml-1 shrink-0">
              <span className="w-0.5 bg-emerald-500 animate-eq-1 h-full" />
              <span className="w-0.5 bg-emerald-500 animate-eq-2 h-full" />
              <span className="w-0.5 bg-emerald-500 animate-eq-4 h-full" />
            </div>
          )}
        </button>
      ) : (
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl w-[calc(100vw-24px)] sm:w-72 shadow-xl border border-zinc-200 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-violet-600 animate-pulse" />
              <span className="text-xs font-bold tracking-tight text-zinc-950 uppercase">Sound Synthesizer</span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-zinc-500 hover:text-zinc-950 text-xs px-1.5 py-0.5 rounded hover:bg-zinc-100"
            >
              Minimize
            </button>
          </div>

          <div className="text-[11px] text-zinc-600 mb-3">
            Real-time 126 BPM festival bassline preview synthesized via Web Audio.
          </div>

          <div className="flex items-center justify-between mb-3 bg-zinc-50 p-2.5 rounded-xl border border-zinc-200/80">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-zinc-950 hover:bg-zinc-800 flex items-center justify-center text-white shadow-xs hover:scale-105 active:scale-95 transition-all"
                aria-label={isPlaying ? 'Pause DJ beat preview' : 'Play DJ beat preview'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
              </button>
              <div>
                <p className="text-xs font-semibold text-zinc-900">
                  {isPlaying ? 'Bass Groove Running' : 'Synthesizer Standby'}
                </p>
                <p className="text-[10px] text-zinc-500 font-mono">126 BPM • Phagwara Mix</p>
              </div>
            </div>

            {/* Dynamic Equalizer visual */}
            <div className="flex items-end gap-1 h-5 px-1">
              <span className={`w-1 rounded-full bg-violet-600 ${isPlaying ? 'animate-eq-1' : 'h-2'}`} />
              <span className={`w-1 rounded-full bg-indigo-500 ${isPlaying ? 'animate-eq-2' : 'h-3'}`} />
              <span className={`w-1 rounded-full bg-emerald-500 ${isPlaying ? 'animate-eq-3' : 'h-1.5'}`} />
              <span className={`w-1 rounded-full bg-violet-500 ${isPlaying ? 'animate-eq-4' : 'h-4'}`} />
              <span className={`w-1 rounded-full bg-cyan-500 ${isPlaying ? 'animate-eq-5' : 'h-2'}`} />
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={toggleMute}
              className="text-zinc-500 hover:text-zinc-900 p-1 rounded hover:bg-zinc-100 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
              aria-label="Volume slider"
            />
            <span className="text-[10px] text-zinc-500 w-8 text-right font-mono">
              {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
