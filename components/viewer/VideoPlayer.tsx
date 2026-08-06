/**
 * Hanbit DS - Viewer/Player/VideoPlayer
 * Figma: "Viewer/Player/VideoPlayer"
 * Variants: Size(Small|Medium|Large)
 */
import React, { useRef, useState } from 'react';

export type VideoPlayerSize = 'Small' | 'Medium' | 'Large';

export interface VideoPlayerProps {
  src?: string;
  poster?: string;
  size?: VideoPlayerSize;
  title?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  className?: string;
}

const SIZE_MAP: Record<VideoPlayerSize, { width: number; height: number }> = {
  Small: { width: 480, height: 270 }, Medium: { width: 720, height: 405 }, Large: { width: 1080, height: 608 },
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src, poster, size = 'Medium', title, onPlay, onPause, onEnded, onTimeUpdate, className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); onPause?.(); } else { videoRef.current.play(); onPlay?.(); }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    setProgress(duration > 0 ? (currentTime / duration) * 100 : 0);
    onTimeUpdate?.(currentTime, duration);
  };

  const dims = SIZE_MAP[size];
  return (
    <div className={className} data-size={size.toLowerCase()} style={{ width: dims.width, maxWidth: '100%', position: 'relative', backgroundColor: '#000', borderRadius: 8, overflow: 'hidden' }}>
      <video ref={videoRef} src={src} poster={poster} onTimeUpdate={handleTimeUpdate}
        onEnded={() => { setPlaying(false); onEnded?.(); }} style={{ width: '100%', height: 'auto', display: 'block' }} aria-label={title || '비디오 플레이어'} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 12px', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div role="progressbar" aria-valuenow={progress} style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 2, cursor: 'pointer' }}
          onClick={e => { if (!videoRef.current) return; const rect = e.currentTarget.getBoundingClientRect(); videoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * videoRef.current.duration; }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: 'var(--semantic-primary-normal, #3182F6)', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={togglePlay} aria-label={playing ? '일시정지' : '재생'} style={{ color: '#fff', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18 }}>{playing ? '⏸' : '▶'}</button>
          {title && <span style={{ color: '#fff', fontSize: 14, flex: 1 }}>{title}</span>}
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
