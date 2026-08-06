# Hanbit Design System

Figma 디자인 시스템에서 자동 추출된 React 컴포넌트 라이브러리 + 디자인 토큰.

[![Components](https://img.shields.io/badge/components-73-blue)](#컴포넌트-목록)
[![Tokens](https://img.shields.io/badge/tokens-CSS%20%2B%20W3C%20JSON-green)](#디자인-토큰)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](#)
[![Figma](https://img.shields.io/badge/Figma-synced-purple)](#)

---

## AI 도구 연동

이 레포는 주요 AI 코딩 도구와 연동되어, UI 개발 시 Hanbit 디자인 시스템의 컴포넌트·토큰·패턴을 자동으로 참조합니다.

### 지원 도구

| AI 도구 | 자동 로드 | 슬래시 호출 | 참조 파일 |
|---------|----------|------------|----------|
| **Claude Code** | ✅ 레포 열면 자동 | ✅ `/hanbit-design` | `CLAUDE.md` + `.claude/commands/` |
| **OpenAI Codex** | ✅ 레포 열면 자동 | ✅ `/hanbit-design` | `AGENTS.md` + `.codex/commands/` |
| **Cursor** | ✅ 레포 열면 자동 | — | `.cursorrules` |
| **GitHub Copilot** | ✅ 레포 열면 자동 | — | `.github/copilot-instructions.md` |

### 사용 방법

#### 방법 1: 레포 열기 (자동 로드)

레포를 클론하거나 작업 디렉토리로 열면, 각 AI 도구가 자동으로 디자인 시스템 컨텍스트를 로드합니다.

```bash
git clone https://github.com/tho0oz/hanbit-design-system.git
cd hanbit-design-system
# 이후 Claude Code, Codex, Cursor 등을 열면 자동 인식
```

#### 방법 2: 슬래시 명령으로 호출

Claude Code 또는 Codex 세션에서 슬래시 명령으로 명시적으로 호출할 수 있습니다:

```
/hanbit-design
```

이 명령을 입력하면 디자인 시스템의 핵심 규칙, 토큰, 컴포넌트 카탈로그가 컨텍스트에 로드됩니다.

#### 방법 3: 글로벌 설치 (Claude Code 전용)

레포를 열지 않아도 어떤 프로젝트에서든 Hanbit DS를 참조하려면:

```bash
git clone https://github.com/tho0oz/hanbit-design-system.git
cd hanbit-design-system
chmod +x install.sh
./install.sh
```

설치 스크립트가 `~/.claude/skills/hanbit-design/`에 스킬을 배포합니다. 기존 설치가 있으면 자동 백업(`hanbit-design.bak.<timestamp>`)합니다.

**설치 확인:**
```bash
ls ~/.claude/skills/hanbit-design/
# SKILL.md  references/
```

**업데이트:**
```bash
cd hanbit-design-system
git pull
./install.sh
```

### AI 도구 연동 파일 구조

```
hanbit-design-system/
├── CLAUDE.md                          # Claude Code 자동 로드
├── AGENTS.md                          # Codex 자동 로드
├── .cursorrules                       # Cursor 자동 로드
├── .claude/
│   └── commands/
│       └── hanbit-design.md           # /hanbit-design 슬래시 명령 (Claude Code)
├── .codex/
│   └── commands/
│       └── hanbit-design.md           # /hanbit-design 슬래시 명령 (Codex)
├── .github/
│   └── copilot-instructions.md        # GitHub Copilot 자동 로드
├── skill/
│   ├── SKILL.md                       # 글로벌 스킬 정의 (install.sh로 배포)
│   └── references/
│       ├── components.md              # 73개 컴포넌트 API 레퍼런스
│       ├── tokens.md                  # 디자인 토큰 전체 목록
│       └── patterns.md                # 공통 UI 패턴 & 레시피
└── install.sh                         # 글로벌 설치 스크립트 (Claude Code 전용)
```

---

## 개요

| 항목 | 내용 |
|------|------|
| **소스** | Figma “Hanbit Design System” (`usRZn9VKhXQ9MedDWw1u57`) |
| **컴포넌트** | 73개 React TSX (Figma variants → TypeScript union types) |
| **토큰** | CSS Custom Properties + W3C Design Token JSON |
| **폰트** | Pretendard (15 type scales) |
| **플랫폼** | iOS, Android, Web (responsive) |
| **접근성** | ARIA roles/attributes, keyboard navigation |

---

## 디렉토리 구조

```
hanbit-design-system/
├── tokens/
│   ├── colors.css          # 14 Atomic 색상 스케일 (210+ 변수)
│   ├── semantic.css        # 44 Semantic 토큰 (Primary, Label, BG, etc.)
│   ├── typography.css      # 15 타입 스케일 + 54 유틸리티 클래스
│   ├── spacing.css         # Viewport, Modal, Gap 반응형 변수
│   └── tokens.json         # W3C Design Token Format
├── components/
│   ├── index.ts            # Barrel exports (전체)
│   ├── Button.tsx          # 기본 컴포넌트
│   ├── TextField.tsx
│   ├── ...
│   ├── form/               # 폼 컨트롤
│   ├── feedback/           # 피드백
│   ├── data-display/       # 데이터 표시
│   ├── overlay/            # 오버레이
│   ├── navigation/         # 내비게이션
│   ├── layout/             # 레이아웃
│   ├── element/            # 유틸리티/엘리먼트
│   ├── picker/             # 플랫폼별 피커
│   ├── viewer/             # LMS 뷰어
│   └── dashboard/          # 대시보드
└── docs/
    └── design-system-spec.md   # 전체 스펙 문서
```

---

## 디자인 토큰

### 색상 체계 (Layered Architecture)

```
Atomic (원시값) → Semantic (의미론적) → Component (컴포넌트)
```

#### Atomic 색상 스케일 (14개)

| 스케일 | 단계 | 예시 |
|--------|------|------|
| Common | 0, 100 | `--color-common-0: #FFFFFF` |
| Neutral | 1~99 | `--color-neutral-5: #F7F8FA` |
| Cool Neutral | 1~99 | `--color-cool-neutral-10: #F2F3F6` |
| Emerald | 1~99 | `--color-emerald-50: #30D877` |
| Red | 1~99 | `--color-red-50: #F04452` |
| Orange | 1~99 | `--color-orange-50: #F97B22` |
| Yellow | 1~99 | `--color-yellow-50: #FDBD12` |
| Lime | 1~99 | `--color-lime-50: #5BC82E` |
| Green | 1~99 | `--color-green-50: #1FC077` |
| Cyan | 1~99 | `--color-cyan-50: #00BFD4` |
| Sky | 1~99 | `--color-sky-50: #00AAFF` |
| Blue | 1~99 | `--color-blue-50: #3182F6` |
| Purple | 1~99 | `--color-purple-50: #9B6EF3` |
| Pink | 1~99 | `--color-pink-50: #F553B9` |

#### Semantic 토큰 (44개)

```css
/* 예시 */
--semantic-primary-normal: var(--color-blue-50);      /* 주요 액션 */
--semantic-label-normal: var(--color-neutral-99);     /* 기본 텍스트 */
--semantic-bg-normal: var(--color-common-0);          /* 배경 */
--semantic-line-normal: rgba(92,102,118, 0.22);       /* 구분선 */
--semantic-status-positive: var(--color-green-50);    /* 성공 */
--semantic-status-negative: var(--color-red-50);      /* 에러 */
--semantic-status-cautionary: var(--color-orange-50); /* 경고 */
```

### 타이포그래피

| 스케일 | 크기 | 행간 |
|--------|------|------|
| Display 1 | 56px | 1.3 |
| Display 2 | 40px | 1.3 |
| Title 1 | 36px | 1.35 |
| Title 2 | 28px | 1.35 |
| Title 3 | 24px | 1.35 |
| Heading 1 | 22px | 1.4 |
| Heading 2 | 20px | 1.4 |
| Headline 1 | 18px | 1.45 |
| Headline 2 | 17px | 1.45 |
| Body 1 | 16px | 1.5 |
| Body 2 | 15px | 1.5 |
| Label 1 | 14px | 1.5 |
| Label 2 | 13px | 1.5 |
| Caption 1 | 12px | 1.5 |
| Caption 2 | 11px | 1.5 |

폰트: **Pretendard** (Regular 400, Medium 500, SemiBold 600, Bold 700)

### 스페이싱

```css
--viewport-max-width: 1200px;         /* Desktop */
--viewport-mobile-max: 767px;         /* Mobile breakpoint */
--modal-size-s: 380px;
--modal-size-m: 480px;
--modal-size-l: 640px;
--modal-size-xl: 780px;
--gap-responsive: clamp(16px, 4vw, 32px);
```

---

## 컴포넌트 목록

### Form Controls (11개)

| 컴포넌트 | Figma 이름 | 주요 Props |
|----------|-----------|------------|
| `Button` | Button/Solid, Outlined, Ghost | `size`: XS~XL, `variant`: Solid/Outlined/Ghost, `loading` |
| `TextField` | Textinput/Textfield | `status`: Normal/Positive/Negative, `focus`, `disable` |
| `Textarea` | Textinput/Textarea | `status`, `resize`: Normal/Limit/Fixed, `maxLength` |
| `Searchfield` | Searchfield | `size`: Small/Medium, `onSearch`, `onClear` |
| `Checkbox` | Checkbox | `size`: S/M, `state`: Unchecked/Checked/Indeterminate |
| `Radio` | Radio | `size`: S/M, `tight`, `disable` |
| `CheckMark` | Input/Check Mark | `size`: Small/Medium, `tight`, `disable` |
| `Switch` | Switch | `platform`: iOS/Normal, `size`: XS/S/M |
| `Select` | Select | `render`: Text/Chip, `negative`, `disable` |
| `Slider` | Slider | `min`, `max`, `value`, `minLabel`, `maxLabel` |
| `SegmentedControl` | Segmented Control | `variant`: Solid/Outlined, `size`: S/M/L |

### Buttons (4개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `ButtonSolid` | `variant`: Primary/Secondary/Neutral, `size`: XS~XL, `iconOnly` |
| `ButtonOutlined` | 동일 variants, outlined 스타일 |
| `ButtonText` | 텍스트 전용, leading/trailing 아이콘 |
| `ButtonIcon` | `variant`: Normal/Background/Outlined/Solid, `size`: Small/Medium |

### Feedback (8개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `Toast` | `variant`: Normal/Positive/Cautionary/Negative |
| `Snackbar` | `variant`: Normal/Icon, `duration`, auto-dismiss |
| `SectionMessage` | `variant`: Normal/Info/Positive/Cautionary/Negative |
| `Alert` | `platform`: iOS/Android/Web, `actions[]` |
| `TooltipCompact` | `variant`: Normal/Inverse, `shortcut` |
| `TooltipExtended` | `showCloseButton`, 12 arrow positions |
| `ProgressIndicator` | `percent` (0~100), progressbar role |
| `Circular` | `variant`: Default/Hanbit, spinning animation |

### Data Display (8개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `Skeleton` | `type`: Text/Rectangle/Circle, `length`: Full/Long/Medium/Short |
| `EmptyState` | `platform`: Desktop/Mobile, `padding` |
| `PushBadge` | `variant`: Dot/Number/New, `size`: XS/S/M |
| `ContentBadge` | `variant`: Solid/Outlined, 8 colors |
| `PlayIconBadge` | `size`: S/M/L, `alternative` |
| `Thumbnail` | `radius`: Square/Rounded/Circle |
| `Avatar` / `AvatarGroup` | `variant`: Person/Academy, 5 sizes, `max` |
| `Table` | `columns[]`, `data[]`, `selectable`, row selection |

### Overlays (5개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `Modal` | `variant`: Popup/BottomSheet/Full, `size`: S/M/L/XL |
| `AutoComplete` | `variant`: Normal/Search/Avatar/Checkbox/Thumbnail |
| `ActionSheet` | `platform`: iOS/Android, `actions[]` with destructive |
| `DatePickerWeb` | `view`: Day/Month/Year, `variant`: Normal/Range |
| `TimePickerWeb` | `format`: HH:MM / AA HH / AA HH:MM / AA HH:MM:SS |

### Navigation (9개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `TopNavigation` | `platform`: iOS/Android/Web, back button |
| `BottomNavigation` | `platform`, `items[]` with badges |
| `SideNavigation` | hierarchical `items[]`, `collapsed` |
| `GNB` | `breakpoint`: Desktop/Mobile, `menuItems[]` |
| `Footer` | `breakpoint`: Desktop/Tablet/Mobile, `linkGroups[]` |
| `Tab` | `resize`: Hug/Fill, `size`: S/M/L |
| `Pagination` | Dot / Counter / Navigation (3 sub-components) |
| `Category` | `variant`: Normal/Alternative, 4 sizes |
| `Menu` | `variant`: Normal/Checkbox/Radio, ARIA roles |

### Layout (7개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `Cell` | `verticalPadding`, `verticalAlign`, `textEllipsis` |
| `Accordion` | `allowMultiple`, expandable `items[]` |
| `SectionHeader` | `platform`, `size`: S/M/L |
| `Card` | `variant`: Normal/List, `platform`, `skeleton` |
| `Divider` | `variant`: Normal/Strong/Navigation, `vertical` |
| `ActionArea` | primary + secondary actions + extra content |
| `ScrollBar` | `size`: Normal/Compact, `orientation` |

### Element / Utility (7개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `Gradient` | `type`: Solid/Multiple, `direction`: Top/Right/Bottom/Left |
| `Interaction` | `variant`: Normal/Light/Strong, `state` overlay |
| `SafeArea` | `type`: Status/Bottom, `platform` |
| `AspectRatio` | `ratio`: 17 presets (16:9, 4:3, etc.) |
| `Keyboard` | `platform`: iOS/Android (visual placeholder) |
| `IconWrapper` | `size`: XS~XL (16~32px) |
| `TextEditor` | Rich text with toolbar, `toolbarItems[]` |

### Platform Pickers (4개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `DatePickerAndroid` | `type`: Input/Picker/Wheel |
| `DatePickerIOS` | `type`: Calendar/Wheel |
| `TimePickerAndroid` | `type`: Dial/Input/Wheel |
| `TimePickerIOS` | iOS wheel style |

### Viewer / LMS (4개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `ViewerSideNavi` | `items[]` tree, `full`, completion state |
| `ViewerBotNavi` | `breakpoint`, `progressBar`, page navigation |
| `ViewerDrawToolbar` | `tools[]`, `scrollable`, menu toggle |
| `VideoPlayer` | `size`: S/M/L, progress bar, play/pause |

### Dashboard (2개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `DashboardSideNavi` | `role`: 관리자/교강사, `full`, nested menu |
| `DashboardTopNavi` | `breadcrumbs[]`, user profile |

### Misc (4개)

| 컴포넌트 | 주요 Props |
|----------|------------|
| `Chip` | `type`: Action/Filter, `active`, `onRemove` |
| `ProgressTracker` | `steps[]`, `currentStep`, `direction` |
| `IconTab` | `size`: S/M/L, `variant`: Normal/Alternative |
| `Essential` | `platform`: iOS/Android/Web wrapper |

---

## 사용법

### 토큰 사용

```html
<!-- CSS 변수 import -->
<link rel="stylesheet" href="tokens/colors.css" />
<link rel="stylesheet" href="tokens/semantic.css" />
<link rel="stylesheet" href="tokens/typography.css" />
<link rel="stylesheet" href="tokens/spacing.css" />
```

```css
/* 컴포넌트 스타일링에서 사용 */
.button-primary {
  background-color: var(--semantic-primary-normal);
  color: var(--semantic-static-white);
  font-family: var(--font-family);
  font-size: var(--font-size-label1);
}

.error-message {
  color: var(--semantic-status-negative);
}
```

### 컴포넌트 사용

```tsx
import {
  Button,
  TextField,
  Modal,
  Avatar,
  Tab,
  Card,
  DashboardSideNavi,
} from './components';

// Button
<Button variant="Solid" size="Medium" loading={false}>
  제출하기
</Button>

// TextField with validation
<TextField
  label="이메일"
  placeholder="example@hanbit.co.kr"
  status="Negative"
  errorText="올바른 이메일 형식이 아닙니다."
  required
/>

// Modal
<Modal variant="Popup" size="M" open={isOpen} onClose={() => setIsOpen(false)}>
  <h2>확인</h2>
  <p>변경사항을 저장하시겠습니까?</p>
</Modal>
```

### 플랫폼별 분기

```tsx
import { DatePickerIOS, DatePickerAndroid, DatePickerWeb } from './components';

const DatePicker = platform === 'ios'
  ? <DatePickerIOS type="Calendar" onChange={handleDate} />
  : platform === 'android'
    ? <DatePickerAndroid type="Picker" onConfirm={handleDate} />
    : <DatePickerWeb variant="Normal" onChange={handleDate} />;
```

---

## Figma ↔ Code 매핑 규칙

| Figma | React Code |
|-------|------------|
| Variant property | TypeScript union type (`'A' \| 'B' \| 'C'`) |
| Boolean property | `boolean` prop |
| Instance swap | `React.ReactNode` prop |
| Component Set | Named export + Props interface |
| Auto Layout | Flexbox via `style` or `data-*` attributes |
| Figma variables | CSS Custom Properties |
| Interaction states | `data-state` attributes for CSS targeting |

### 스타일링 훅 (data-* attributes)

모든 컴포넌트는 `data-*` 속성으로 상태를 노출합니다:

```css
[data-variant="primary"] { background: var(--semantic-primary-normal); }
[data-size="small"] { padding: 4px 8px; }
[data-active="true"] { font-weight: 600; }
[data-disabled="true"] { opacity: 0.4; pointer-events: none; }
```

---

## 접근성 (A11y)

모든 컴포넌트는 다음을 준수합니다:

- 적절한 ARIA roles (`role="tab"`, `role="menu"`, `role="dialog"`, etc.)
- `aria-selected`, `aria-expanded`, `aria-disabled` 상태 속성
- `aria-label` 한국어 레이블
- Keyboard navigation 지원 (focus, tabIndex)
- `role="alert"` / `aria-live="polite"` for notifications
- `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax`

---

## 기술 스택

- **React 18+** with TypeScript
- **forwardRef** 패턴 (Button 계열)
- **Controlled/Uncontrolled** 하이브리드 패턴
- **CSS Custom Properties** for theming
- **Zero dependencies** (React peer dep only)
- **Tree-shakeable** barrel exports

---

## Figma 소스

- **파일**: [Hanbit Design System](https://figma.com/design/usRZn9VKhXQ9MedDWw1u57)
- **컴포넌트 셋**: 508개 (아이콘/플래그/로고/일러스트 제외 → 73개 코드화)
- **Variable Collections**: Atomic Colors, Semantic, Typography, Spacing
- **모드**: Light (Dark mode 준비 완료 — semantic layer 분리)

---

## 향후 계획

- [ ] Storybook 연동 (각 컴포넌트 인터랙티브 문서)
- [ ] CSS Modules / Tailwind 기반 스타일 시트 생성
- [ ] Dark mode 토큰 매핑
- [ ] npm 패키지 배포 (`@hanbit/design-system`)
- [ ] Figma Code Connect 연동
- [ ] 자동 동기화 CI/CD (Figma → GitHub Actions)

---

## 라이선스

Private — Hanbit internal use only.
