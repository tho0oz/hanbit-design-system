# Hanbit Design System — AI Development Guide

This is the Hanbit Design System codebase: React TSX components + CSS design tokens, auto-generated from Figma.

## Project Structure

```
tokens/           # Design tokens (CSS Custom Properties + W3C JSON)
components/       # 73 React TSX components
  index.ts        # Barrel exports (import everything from here)
  form/           # Textarea, Searchfield, CheckMark, Slider
  feedback/       # Snackbar, Tooltip*, Alert, ProgressIndicator, Circular
  data-display/   # Skeleton, EmptyState, *Badge, Thumbnail, Avatar, Table
  overlay/        # AutoComplete, ActionSheet, DatePickerWeb, TimePickerWeb
  navigation/     # TopNav, BottomNav, SideNav, GNB, Footer, Tab, Pagination, Category, Menu
  layout/         # Cell, Accordion, SectionHeader, Card, Divider, ActionArea, ScrollBar
  element/        # Gradient, Interaction, SafeArea, AspectRatio, Keyboard, IconWrapper, TextEditor
  picker/         # DatePickerAndroid, DatePickerIOS, TimePickerAndroid, TimePickerIOS
  viewer/         # ViewerSideNavi, ViewerBotNavi, ViewerDrawToolbar, VideoPlayer
  dashboard/      # DashboardSideNavi, DashboardTopNavi
docs/             # Design system spec
```

## Design Token Architecture

**3-Layer system: Atomic → Semantic → Component**

### Atomic (raw values)
14 color scales in `tokens/colors.css`:
- Common, Neutral, Cool Neutral
- Emerald, Red, Orange, Yellow, Lime, Green, Cyan, Sky, Blue, Purple, Pink
- Each scale: steps 1-99 (e.g. `--color-blue-50: #3182F6`)
- Special: `--color-common-0: #FFFFFF`, `--color-common-100: #000000`

### Semantic (meaning-based)
44 tokens in `tokens/semantic.css` referencing atomic values:
```css
--semantic-primary-normal: var(--color-blue-50);      /* Primary action */
--semantic-label-normal: var(--color-neutral-99);      /* Default text */
--semantic-label-alternative: rgba(92,102,118, 0.61);  /* Secondary text */
--semantic-bg-normal: var(--color-common-0);           /* Background */
--semantic-line-normal: rgba(92,102,118, 0.22);        /* Borders */
--semantic-fill-normal: rgba(92,102,118, 0.08);        /* Surface fills */
--semantic-status-positive: var(--color-green-50);     /* Success */
--semantic-status-negative: var(--color-red-50);       /* Error */
--semantic-status-cautionary: var(--color-orange-50);  /* Warning */
--semantic-static-white: #FFFFFF;                      /* Always white */
--semantic-static-black: #000000;                      /* Always black */
--semantic-inverse-primary: var(--color-blue-40);      /* Inverse context */
```

### Typography
Font: **Pretendard** (weights: 400, 500, 600, 700)
15 scales in `tokens/typography.css`:
| Scale | Size | Line Height |
|-------|------|-------------|
| Display 1 | 56px | 1.3 |
| Display 2 | 40px | 1.3 |
| Title 1-3 | 36/28/24px | 1.35 |
| Heading 1-2 | 22/20px | 1.4 |
| Headline 1-2 | 18/17px | 1.45 |
| Body 1-2 | 16/15px | 1.5 |
| Label 1-2 | 14/13px | 1.5 |
| Caption 1-2 | 12/11px | 1.5 |

## Component Conventions

### Import Pattern
```tsx
import { Button, TextField, Modal, Avatar } from './components';
```

### Figma → Code Mapping
| Figma Concept | React Pattern |
|---------------|---------------|
| Variant property | TypeScript union type (`'Primary' \| 'Secondary'`) |
| Boolean property | `boolean` prop |
| Instance swap slot | `React.ReactNode` prop |
| Component Set | Named export + `Props` interface + `type` exports |
| Figma variable | CSS Custom Property (`var(--semantic-*)`) |

### Styling Pattern
Components expose state via `data-*` attributes (not inline styles):
```css
[data-variant="primary"] { ... }
[data-size="small"] { ... }
[data-active="true"] { ... }
[data-disabled="true"] { opacity: 0.4; pointer-events: none; }
[data-platform="ios"] { ... }
```

### Accessibility
All components include:
- ARIA roles: `role="tab"`, `role="menu"`, `role="dialog"`, `role="progressbar"`, etc.
- State attributes: `aria-selected`, `aria-expanded`, `aria-disabled`, `aria-checked`
- Korean labels: `aria-label="검색"`, `aria-label="닫기"`, etc.
- Keyboard support: `tabIndex`, `onKeyDown` handlers

## Key Components Quick Reference

### Button Family
```tsx
// Generic (original)
<Button variant="Solid" size="Medium" loading={false}>제출</Button>

// Specialized
<ButtonSolid variant="Primary" size="Large">Primary Solid</ButtonSolid>
<ButtonOutlined variant="Secondary" size="Medium">Outlined</ButtonOutlined>
<ButtonText variant="Neutral" size="Small">Text Only</ButtonText>
<ButtonIcon icon={<MyIcon />} variant="Background" size="Medium" />
```

### Form Controls
```tsx
<TextField label="이메일" status="Negative" errorText="형식 오류" required />
<Textarea resize="Limit" maxLength={500} showCharCount />
<Searchfield size="Medium" onSearch={handleSearch} onClear={handleClear} />
<Checkbox size="M" state="Checked" label="동의" />
<Radio size="M" label="옵션 A" />
<Switch platform="iOS" size="M" />
<Select options={[...]} render="Chip" />
<Slider min={0} max={100} value={50} label="볼륨" />
<SegmentedControl variant="Solid" size="M" items={[...]} />
```

### Feedback
```tsx
<Toast variant="Positive">저장되었습니다</Toast>
<Snackbar heading="알림" variant="Icon" icon={<Bell />} duration={5000} />
<SectionMessage variant="Cautionary">주의사항</SectionMessage>
<Alert platform="Web" heading="삭제" actions={[...]} open onClose={...} />
<TooltipCompact label="복사" shortcut="⌘C"><Button>Copy</Button></TooltipCompact>
<ProgressIndicator percent={75} />
<Circular variant="Hanbit" size={40} />
```

### Data Display
```tsx
<Skeleton type="Text" length="Long" />
<EmptyState heading="결과 없음" description="검색어를 변경해보세요" />
<PushBadge variant="Number" number={5} size="Small" />
<ContentBadge text="NEW" variant="Solid" color="Blue" />
<Avatar src="/photo.jpg" variant="Person" size="Medium" />
<AvatarGroup avatars={[...]} max={4} size="Small" />
<Table columns={[...]} data={[...]} selectable />
```

### Navigation
```tsx
<TopNavigation platform="iOS" title="설정" onBack={goBack} />
<BottomNavigation platform="Web" items={navItems} activeKey="home" onChange={setTab} />
<GNB breakpoint="Desktop" logo={<Logo />} menuItems={[...]} />
<Tab items={[...]} activeKey="tab1" size="Medium" resize="Fill" onChange={setTab} />
<Category items={[...]} activeKey="all" variant="Normal" size="Normal" />
<Menu variant="Checkbox" items={menuItems} onSelect={handleSelect} />
<PaginationNavigation current={1} total={10} onPageChange={setPage} />
```

### Layout
```tsx
<Card variant="Normal" platform="Desktop" title="강좌명" description="설명" thumbnail="/img.jpg" />
<Cell title="설정" description="알림 설정" trailingContent={<Switch />} />
<Accordion items={[{ key: '1', title: 'FAQ', content: <p>답변</p> }]} />
<SectionHeader title="인기 강좌" size="Large" />
<Divider variant="Strong" />
```

### Overlays
```tsx
<Modal variant="Popup" size="M" open={isOpen} onClose={close}>...</Modal>
<AutoComplete variant="Search" options={[...]} onSelect={handleSelect} />
<ActionSheet platform="iOS" actions={[...]} open onClose={close} />
<DatePickerWeb variant="Range" onChange={handleDate} />
```

### Platform-specific Pickers
```tsx
// Choose by platform
const DatePicker = {
  ios: <DatePickerIOS type="Calendar" onChange={handleDate} />,
  android: <DatePickerAndroid type="Picker" onConfirm={handleDate} />,
  web: <DatePickerWeb variant="Normal" onChange={handleDate} />,
}[platform];
```

### LMS Viewer
```tsx
<ViewerSideNavi items={courseTree} activeKey="lesson-3" full onSelect={navigate} />
<ViewerBotNavi breakpoint="Desktop" showProgressBar progress={60} currentPage={3} totalPages={10} />
<VideoPlayer src="/video.mp4" size="Large" title="1강 소개" onEnded={markComplete} />
<ViewerDrawToolbar tools={drawTools} activeToolKey="pen" onToolSelect={setTool} />
```

### Dashboard
```tsx
<DashboardSideNavi role="관리자" full items={adminMenu} activeKey="users" onSelect={navigate} />
<DashboardTopNavi title="대시보드" breadcrumbs={[{ label: '홈' }, { label: '학습관리' }]} userName="김관리" />
```

## When Building New Features

1. **Always use semantic tokens** — never hardcode colors. Use `var(--semantic-*)` from `tokens/semantic.css`.
2. **Use existing components** — check `components/index.ts` before creating new UI elements.
3. **Follow the data-* pattern** — expose variant/state via data attributes for CSS styling.
4. **Korean labels** — all user-facing ARIA labels should be in Korean.
5. **Platform awareness** — many components accept a `platform` prop (iOS/Android/Web). Use it for cross-platform UIs.
6. **forwardRef** — Button-family components use `React.forwardRef`. New interactive components should too.
7. **Type exports** — always export the Props interface and union types alongside the component.

## Common Tasks

### Add a new component
1. Create `components/[category]/NewComponent.tsx`
2. Export types: `Props`, variant union types
3. Add data-* attributes for styling hooks
4. Add ARIA roles and Korean labels
5. Add to `components/index.ts` barrel export

### Use tokens in a new stylesheet
```css
@import '../tokens/colors.css';
@import '../tokens/semantic.css';
@import '../tokens/typography.css';

.my-component {
  color: var(--semantic-label-normal);
  background: var(--semantic-bg-normal);
  border: 1px solid var(--semantic-line-normal);
  font-size: var(--font-size-body1);
  border-radius: 8px;
  padding: var(--gap-responsive);
}
```

### Build a page with these components
```tsx
import { GNB, Footer, SectionHeader, Card, Tab, Button } from './components';

const CoursePage = () => (
  <>
    <GNB breakpoint="Desktop" logo={<Logo />} menuItems={menu} />
    <main>
      <SectionHeader title="인기 강좌" size="Large" />
      <Tab items={categories} activeKey={tab} onChange={setTab} />
      <div className="grid">
        {courses.map(c => (
          <Card key={c.id} title={c.title} description={c.desc} thumbnail={c.img}
            trailingContent={<Button size="Small">수강하기</Button>} />
        ))}
      </div>
    </main>
    <Footer breakpoint="Desktop" copyright="© Hanbit" linkGroups={footerLinks} />
  </>
);
```
