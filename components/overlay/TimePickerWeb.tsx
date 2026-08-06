/**
 * Hanbit DS - TimePicker/Web
 * Figma: "Time Picker/Web"
 * Variants: HH:MM, AA HH, AA HH:MM, AA HH:MM:SS
 */
import React from 'react';

export type TimePickerFormat = 'HH:MM' | 'AA HH' | 'AA HH:MM' | 'AA HH:MM:SS';

export interface TimePickerWebProps {
  format?: TimePickerFormat;
  hour?: number;
  minute?: number;
  second?: number;
  ampm?: 'AM' | 'PM';
  onChange?: (time: { hour: number; minute: number; second?: number; ampm?: 'AM' | 'PM' }) => void;
  className?: string;
}

export const TimePickerWeb: React.FC<TimePickerWebProps> = ({
  format = 'HH:MM', hour = 0, minute = 0, second = 0, ampm = 'AM', onChange, className,
}) => {
  const showAMPM = format.startsWith('AA');
  const showSeconds = format.includes('SS');

  return (
    <div className={className} data-format={format} role="group" aria-label="시간 선택">
      {showAMPM && (
        <select value={ampm} onChange={e => onChange?.({ hour, minute, second, ampm: e.target.value as 'AM' | 'PM' })}>
          <option value="AM">AM</option><option value="PM">PM</option>
        </select>
      )}
      <input type="number" min={0} max={showAMPM ? 12 : 23} value={hour}
        onChange={e => onChange?.({ hour: +e.target.value, minute, second, ampm })} aria-label="시" />
      <span>:</span>
      <input type="number" min={0} max={59} value={minute}
        onChange={e => onChange?.({ hour, minute: +e.target.value, second, ampm })} aria-label="분" />
      {showSeconds && <>
        <span>:</span>
        <input type="number" min={0} max={59} value={second}
          onChange={e => onChange?.({ hour, minute, second: +e.target.value, ampm })} aria-label="초" />
      </>}
    </div>
  );
};
export default TimePickerWeb;
