/**
 * Hanbit DS - Accordion
 * Figma: "Accordion/Accordion"
 * Variants: Vertical Padding, Fill Width, Complete, Expand
 */
import React, { useState } from 'react';

export interface AccordionItem {
  key: string;
  title: string;
  content: React.ReactNode;
  complete?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  fillWidth?: boolean;
  defaultExpandedKeys?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items, allowMultiple = false, fillWidth = true, defaultExpandedKeys = [], className,
}) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(defaultExpandedKeys));

  const toggle = (key: string) => {
    setExpanded(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  return (
    <div className={className} data-fill={fillWidth}>
      {items.map(item => (
        <div key={item.key} data-complete={item.complete} data-expanded={expanded.has(item.key)}>
          <button onClick={() => toggle(item.key)} aria-expanded={expanded.has(item.key)}>
            <span>{item.title}</span>
            <span>{expanded.has(item.key) ? '▲' : '▼'}</span>
          </button>
          {expanded.has(item.key) && <div role="region">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
