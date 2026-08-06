# Hanbit Design System Reference

UI를 만들거나 수정할 때 Hanbit Design System의 컴포넌트, 토큰, 패턴을 참조하세요.

## 핵심 규칙

1. **시맨틱 토큰만 사용** — `var(--semantic-*)` 사용. hex 하드코딩 금지.
2. **기존 컴포넌트 우선** — `components/index.ts`에서 73개 컴포넌트 확인.
3. **한국어 레이블** — ARIA label, placeholder는 한국어.
4. **data-* 스타일링** — 컴포넌트 상태는 `data-*` 속성 → CSS 속성 선택자.
5. **플랫폼 인식** — `platform` prop으로 iOS/Android/Web 구분.
6. **forwardRef** — 인터랙티브 컴포넌트는 `React.forwardRef`.
7. **타입 export** — Props 인터페이스 + union types 함께 export.

## 임포트

```tsx
import { Button, TextField, Modal, Avatar } from './components';
```

## 시맨틱 토큰

| 토큰 | 용도 |
|------|------|
| `--semantic-primary-normal` | 주요 액션 (#3182F6) |
| `--semantic-label-normal` | 기본 텍스트 |
| `--semantic-label-alternative` | 보조 텍스트 |
| `--semantic-bg-normal` | 배경 (#FFFFFF) |
| `--semantic-line-normal` | 테두리 |
| `--semantic-fill-normal` | 표면 채움 |
| `--semantic-status-positive` | 성공 (#03B26C) |
| `--semantic-status-negative` | 에러 (#F04452) |
| `--semantic-status-cautionary` | 경고 (#F97316) |

## 컴포넌트 카탈로그

- **기본**: Button, ButtonSolid, ButtonOutlined, ButtonText, ButtonIcon, Chip, Essential, IconTab, ProgressTracker, SegmentedControl
- **폼**: TextField, Textarea, Searchfield, Checkbox, CheckMark, Radio, Switch, Select, Slider
- **피드백**: Toast, Snackbar, SectionMessage, Alert, TooltipCompact, TooltipExtended, ProgressIndicator, Circular
- **데이터**: Skeleton, EmptyState, PushBadge, ContentBadge, PlayIconBadge, Thumbnail, Avatar, Table
- **오버레이**: Modal, AutoComplete, ActionSheet, DatePickerWeb, TimePickerWeb
- **내비**: TopNavigation, BottomNavigation, SideNavigation, GNB, Footer, Tab, Pagination, Category, Menu
- **레이아웃**: Cell, Accordion, SectionHeader, Card, Divider, ActionArea, ScrollBar
- **유틸**: Gradient, Interaction, SafeArea, AspectRatio, Keyboard, IconWrapper, TextEditor
- **피커**: DatePickerAndroid, DatePickerIOS, TimePickerAndroid, TimePickerIOS
- **뷰어**: ViewerSideNavi, ViewerBotNavi, ViewerDrawToolbar, VideoPlayer
- **대시보드**: DashboardSideNavi, DashboardTopNavi

상세 API는 `skill/references/components.md` 참조.
토큰 전체 목록은 `skill/references/tokens.md` 참조.
공통 UI 패턴은 `skill/references/patterns.md` 참조.
