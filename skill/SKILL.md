---
name: hanbit-design
description: Hanbit Design System — React 컴포넌트 & 디자인 토큰 레퍼런스
trigger: always
---

# Hanbit Design System Skill

UI를 만들거나 수정할 때 이 스킬을 참조하라. Hanbit Design System의 컴포넌트, 토큰, 패턴을 우선 사용해야 한다.

## 핵심 규칙

1. **시맨틱 토큰만 사용** — 색상을 하드코딩하지 마라. 항상 `var(--semantic-*)` 사용.
2. **기존 컴포넌트 우선** — 새 UI 요소를 만들기 전에 73개 기존 컴포넌트를 확인하라.
3. **한국어 레이블** — 모든 ARIA 레이블, placeholder는 한국어로 작성.
4. **data-* 스타일링** — 컴포넌트 상태는 `data-*` 속성으로 노출. CSS 속성 선택자로 스타일링.
5. **플랫폼 인식** — `platform` prop이 있는 컴포넌트는 iOS/Android/Web 구분.
6. **forwardRef** — 인터랙티브 컴포넌트는 `React.forwardRef` 사용.
7. **타입 내보내기** — 컴포넌트와 함께 Props 인터페이스, union 타입 항상 export.

## 임포트

```tsx
import { Button, TextField, Modal, Avatar } from '@hanbit/components';
import type { ButtonProps, ButtonSize } from '@hanbit/components';
```

로컬 경로 사용 시:
```tsx
import { Button, TextField } from './components';
```

## 토큰 체계 (3-Layer)

```
Atomic (원시값)  →  Semantic (의미)  →  Component (사용)
--color-blue-50     --semantic-primary-normal     button background
```

### 주요 시맨틱 토큰

| 토큰 | 용도 |
|------|------|
| `--semantic-primary-normal` | 주요 액션 (파란색) |
| `--semantic-label-normal` | 기본 텍스트 |
| `--semantic-label-alternative` | 보조 텍스트 |
| `--semantic-bg-normal` | 페이지 배경 |
| `--semantic-line-normal` | 테두리, 구분선 |
| `--semantic-fill-normal` | 표면 채움 |
| `--semantic-status-positive` | 성공 (초록) |
| `--semantic-status-negative` | 에러 (빨강) |
| `--semantic-status-cautionary` | 경고 (주황) |
| `--semantic-static-white` | 항상 흰색 |
| `--semantic-static-black` | 항상 검정 |

### 타이포그래피

폰트: **Pretendard** (400, 500, 600, 700)

| 스케일 | 크기 | 행간 | CSS 클래스 |
|--------|------|------|------------|
| Display 1 | 56px | 1.3 | `.text-display1` |
| Display 2 | 40px | 1.3 | `.text-display2` |
| Title 1 | 36px | 1.35 | `.text-title1` |
| Title 2 | 28px | 1.35 | `.text-title2` |
| Title 3 | 24px | 1.35 | `.text-title3` |
| Heading 1 | 22px | 1.4 | `.text-heading1` |
| Heading 2 | 20px | 1.4 | `.text-heading2` |
| Headline 1 | 18px | 1.45 | `.text-headline1` |
| Headline 2 | 17px | 1.45 | `.text-headline2` |
| Body 1 | 16px | 1.5 | `.text-body1` |
| Body 2 | 15px | 1.5 | `.text-body2` |
| Label 1 | 14px | 1.5 | `.text-label1` |
| Label 2 | 13px | 1.5 | `.text-label2` |
| Caption 1 | 12px | 1.5 | `.text-caption1` |
| Caption 2 | 11px | 1.5 | `.text-caption2` |

## 컴포넌트 카탈로그 (73개)

### 기본
Button, ButtonSolid, ButtonOutlined, ButtonText, ButtonIcon, Chip, Essential, IconTab, ProgressTracker, SegmentedControl

### 폼 (Form)
TextField, Textarea, Searchfield, Checkbox, CheckMark, Radio, Switch, Select, Slider

### 피드백 (Feedback)
Toast, Snackbar, SectionMessage, Alert, TooltipCompact, TooltipExtended, ProgressIndicator, Circular

### 데이터 표시 (Data Display)
Skeleton, EmptyState, PushBadge, ContentBadge, PlayIconBadge, Thumbnail, Avatar, Table

### 오버레이 (Overlay)
Modal, AutoComplete, ActionSheet, DatePickerWeb, TimePickerWeb

### 내비게이션 (Navigation)
TopNavigation, BottomNavigation, SideNavigation, GNB, Footer, Tab, Pagination, Category, Menu

### 레이아웃 (Layout)
Cell, Accordion, SectionHeader, Card, Divider, ActionArea, ScrollBar

### 유틸리티 (Element)
Gradient, Interaction, SafeArea, AspectRatio, Keyboard, IconWrapper, TextEditor

### 플랫폼 피커 (Picker)
DatePickerAndroid, DatePickerIOS, TimePickerAndroid, TimePickerIOS

### LMS 뷰어 (Viewer)
ViewerSideNavi, ViewerBotNavi, ViewerDrawToolbar, VideoPlayer

### 대시보드 (Dashboard)
DashboardSideNavi, DashboardTopNavi

상세 API는 `references/components.md` 참조.
공통 UI 패턴은 `references/patterns.md` 참조.
토큰 전체 목록은 `references/tokens.md` 참조.
