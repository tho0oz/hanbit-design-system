/**
 * Hanbit DS - AutoComplete
 * Figma: "Auto Complete/Auto Complete"
 * Variants: Variant(Normal|Search|Avatar|Checkbox|Thumbnail)
 */
import React, { useState, useRef, useId } from 'react';

export type AutoCompleteVariant = 'Normal' | 'Search' | 'Avatar' | 'Checkbox' | 'Thumbnail';

export interface AutoCompleteOption {
  value: string;
  label: string;
  description?: string;
  avatar?: string;
  thumbnail?: string;
}

export interface AutoCompleteProps {
  variant?: AutoCompleteVariant;
  options: AutoCompleteOption[];
  value?: string;
  placeholder?: string;
  onSelect?: (option: AutoCompleteOption) => void;
  onInputChange?: (value: string) => void;
  className?: string;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  variant = 'Normal', options, value = '', placeholder = '검색', onSelect, onInputChange, className,
}) => {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const filtered = options.filter(o => o.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={className} data-variant={variant.toLowerCase()} style={{ position: 'relative' }}>
      <input id={id} type="text" value={query} placeholder={placeholder}
        onChange={e => { setQuery(e.target.value); setOpen(true); onInputChange?.(e.target.value); }}
        onFocus={() => setOpen(true)}
        role="combobox" aria-expanded={open} aria-autocomplete="list" />
      {open && filtered.length > 0 && (
        <ul role="listbox" style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10 }}>
          {filtered.map(o => (
            <li key={o.value} role="option" onClick={() => { setQuery(o.label); setOpen(false); onSelect?.(o); }}>
              {variant === 'Avatar' && o.avatar && <img src={o.avatar} alt="" style={{ width: 24, height: 24, borderRadius: '50%' }} />}
              {variant === 'Thumbnail' && o.thumbnail && <img src={o.thumbnail} alt="" style={{ width: 40, height: 40, borderRadius: 4 }} />}
              <span>{o.label}</span>
              {o.description && <span>{o.description}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default AutoComplete;
