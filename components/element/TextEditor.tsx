/**
 * Hanbit DS - TextEditor
 * Figma: "TextEditor/TextEditor"
 * Rich text editor with toolbar
 */
import React, { useId, useRef } from 'react';

export interface TextEditorProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  toolbarItems?: TextEditorToolbarItem[];
  minHeight?: number;
  maxHeight?: number;
  disabled?: boolean;
  className?: string;
}

export type TextEditorToolbarItem =
  | 'bold' | 'italic' | 'underline' | 'strikethrough'
  | 'heading1' | 'heading2' | 'heading3'
  | 'bulletList' | 'orderedList'
  | 'link' | 'image' | 'divider';

const DEFAULT_TOOLBAR: TextEditorToolbarItem[] = [
  'bold', 'italic', 'underline', 'strikethrough', 'divider',
  'heading1', 'heading2', 'heading3', 'divider',
  'bulletList', 'orderedList', 'divider', 'link', 'image',
];

const TOOLBAR_LABELS: Record<TextEditorToolbarItem, string> = {
  bold: 'B', italic: 'I', underline: 'U', strikethrough: 'S',
  heading1: 'H1', heading2: 'H2', heading3: 'H3',
  bulletList: '•', orderedList: '1.', link: '🔗', image: '🖼', divider: '|',
};

export const TextEditor: React.FC<TextEditorProps> = ({
  value = '', placeholder = '내용을 입력해 주세요.', onChange,
  toolbarItems = DEFAULT_TOOLBAR, minHeight = 200, maxHeight = 600, disabled, className,
}) => {
  const id = useId();
  const editorRef = useRef<HTMLDivElement>(null);

  const execCommand = (command: string, val?: string) => {
    document.execCommand(command, false, val);
    if (editorRef.current) onChange?.(editorRef.current.innerHTML);
  };

  const handleToolbarClick = (item: TextEditorToolbarItem) => {
    switch (item) {
      case 'bold': execCommand('bold'); break;
      case 'italic': execCommand('italic'); break;
      case 'underline': execCommand('underline'); break;
      case 'strikethrough': execCommand('strikeThrough'); break;
      case 'heading1': execCommand('formatBlock', 'h1'); break;
      case 'heading2': execCommand('formatBlock', 'h2'); break;
      case 'heading3': execCommand('formatBlock', 'h3'); break;
      case 'bulletList': execCommand('insertUnorderedList'); break;
      case 'orderedList': execCommand('insertOrderedList'); break;
      case 'link': { const url = prompt('URL을 입력하세요'); if (url) execCommand('createLink', url); break; }
      default: break;
    }
  };

  return (
    <div className={className} data-disabled={disabled}>
      <div role="toolbar" aria-label="텍스트 서식" style={{ display: 'flex', gap: 2, padding: '4px 8px', borderBottom: '1px solid rgba(92,102,118,0.16)' }}>
        {toolbarItems.map((item, i) =>
          item === 'divider' ? <span key={`d-${i}`} style={{ width: 1, backgroundColor: 'rgba(92,102,118,0.16)', margin: '0 4px' }} /> :
          <button key={item} type="button" onClick={() => handleToolbarClick(item)} aria-label={item} disabled={disabled}
            style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 14, fontWeight: ['bold','heading1','heading2','heading3'].includes(item) ? 700 : 400 }}>
            {TOOLBAR_LABELS[item]}
          </button>
        )}
      </div>
      <div ref={editorRef} id={id} contentEditable={!disabled} role="textbox" aria-multiline="true" aria-label="텍스트 편집기"
        data-placeholder={placeholder} dangerouslySetInnerHTML={{ __html: value }}
        onInput={() => { if (editorRef.current) onChange?.(editorRef.current.innerHTML); }}
        style={{ minHeight, maxHeight, overflow: 'auto', padding: 16, outline: 'none' }} />
    </div>
  );
};
export default TextEditor;
