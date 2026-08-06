/**
 * Hanbit DS - Searchfield
 * Figma: "Searchfield/Searchfield"
 * Variants: Size(Small|Medium), Active
 */
import React, { useId, useState } from 'react';

export type SearchfieldSize = 'Small' | 'Medium';

export interface SearchfieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SearchfieldSize;
  onSearch?: (value: string) => void;
  onClear?: () => void;
}

export const Searchfield: React.FC<SearchfieldProps> = ({
  size = 'Medium', placeholder = '검색어를 입력해 주세요.', value, onSearch, onClear, className, ...props
}) => {
  const id = useId();
  const [active, setActive] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch?.(internalValue as string);
  };

  return (
    <div className={className} data-size={size.toLowerCase()} data-active={active}>
      <span role="img" aria-label="검색">🔍</span>
      <input
        id={id} type="search" placeholder={placeholder}
        value={internalValue}
        onChange={e => { setInternalValue(e.target.value); setActive(!!e.target.value); }}
        onKeyDown={handleKeyDown}
        {...props}
      />
      {active && <button type="button" onClick={() => { setInternalValue(''); setActive(false); onClear?.(); }} aria-label="지우기">✕</button>}
    </div>
  );
};
export default Searchfield;
