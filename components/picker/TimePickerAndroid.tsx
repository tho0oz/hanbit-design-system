/**
 * Hanbit DS - TimePicker/Android
 * Figma: "Time Picker/Android"
 * Variants: Type(Dial|Input|Wheel)
 */
import React, { useState } from 'react';

export type TimePickerAndroidType = 'Dial' | 'Input' | 'Wheel';

export interface TimePickerAndroidProps {
  type?: TimePickerAndroidType;
  hour?: number;
  minute?: number;
  ampm?: 'AM' | 'PM';
  onChange?: (time: { hour: number; minute: number; ampm: 'AM' | 'PM' }) => void;
  onConfirm?: (time: { hour: number; minute: number; ampm: 'AM' | 'PM' }) => void;
  onCancel?: () => void;
  className?: string;
}

export const TimePickerAndroid: React.FC<TimePickerAndroidProps> = ({
  type = 'Dial', hour = 12, minute = 0, ampm = 'AM', onChange, onConfirm, onCancel, className,
}) => {
  const [time, setTime] = useState({ hour, minute, ampm });
  const update = (patch: Partial<typeof time>) => { const next = { ...time, ...patch }; setTime(next); onChange?.(next); };

  return (
    <div className={className} data-type={type.toLowerCase()} role="dialog" aria-label="시간 선택">
      <h3>시간 선택</h3>
      {type === 'Dial' && (
        <div role="group" aria-label="시간 다이얼">
          <div style={{ width: 200, height: 200, borderRadius: '50%', border: '2px solid #e5e7eb', position: 'relative', margin: '0 auto' }}>
            {Array.from({length:12},(_,i)=>{
              const angle=(i*30-90)*(Math.PI/180); const x=80+70*Math.cos(angle); const y=80+70*Math.sin(angle);
              return <button key={i+1} onClick={()=>update({hour:i+1})} style={{position:'absolute',left:x,top:y,width:32,height:32,borderRadius:'50%',border:'none',backgroundColor:time.hour===i+1?'var(--semantic-primary-normal,#3182F6)':'transparent',color:time.hour===i+1?'#fff':'inherit',fontSize:14,cursor:'pointer'}}>{i+1}</button>;
            })}
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:8,marginTop:16}}>
            <button onClick={()=>update({ampm:'AM'})} data-active={time.ampm==='AM'}>AM</button>
            <button onClick={()=>update({ampm:'PM'})} data-active={time.ampm==='PM'}>PM</button>
          </div>
        </div>
      )}
      {type === 'Input' && (
        <div role="group" aria-label="시간 입력" style={{display:'flex',gap:8,alignItems:'center'}}>
          <input type="number" min={1} max={12} value={time.hour} onChange={e=>update({hour:+e.target.value})} aria-label="시" style={{width:60}} />
          <span>:</span>
          <input type="number" min={0} max={59} value={time.minute} onChange={e=>update({minute:+e.target.value})} aria-label="분" style={{width:60}} />
          <select value={time.ampm} onChange={e=>update({ampm:e.target.value as 'AM'|'PM'})}><option value="AM">AM</option><option value="PM">PM</option></select>
        </div>
      )}
      {type === 'Wheel' && (
        <div role="group" aria-label="시간 휠" style={{display:'flex',gap:8}}>
          <select value={time.ampm} onChange={e=>update({ampm:e.target.value as 'AM'|'PM'})} aria-label="오전/오후"><option value="AM">오전</option><option value="PM">오후</option></select>
          <select value={time.hour} onChange={e=>update({hour:+e.target.value})} aria-label="시">{Array.from({length:12},(_,i)=><option key={i+1} value={i+1}>{i+1}시</option>)}</select>
          <select value={time.minute} onChange={e=>update({minute:+e.target.value})} aria-label="분">{Array.from({length:60},(_,i)=><option key={i} value={i}>{i}분</option>)}</select>
        </div>
      )}
      <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:16}}>
        <button onClick={onCancel}>취소</button>
        <button onClick={()=>onConfirm?.(time)}>확인</button>
      </div>
    </div>
  );
};
export default TimePickerAndroid;
