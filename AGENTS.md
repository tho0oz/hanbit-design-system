# Hanbit Design System — AI Development Guide

UI를 만들거나 수정할 때 이 가이드를 참조하라. Hanbit Design System의 컴포넌트, 토큰, 패턴을 우선 사용해야 한다.

## 핵심 규칙

1. **시맨틱 토큰만 사용** — 색상을 하드코딩하지 마라. 항상 `var(--semantic-*)` 사용.
2. **기존 컴포넌트 우선** — 새 UI 요소를 만들기 전에 73개 기존 컴포넌트를 확인하라.
3. **한국어 레이블** — 모든 ARIA 레이블, placeholder는 한국어로 작성.
4. **data-* 스타일링** — 컴포넌트 상태는 `data-*` 속성으로 노출. CSS 속성 선택자로 스타일링.
5. **플랫폼 인식** — `platform` prop이 있는 컴포넌트는 iOS/Android/Web 구분.
6. **forwardRef** — 인터랙티브 컴포넌트는 `React.forwardRef` 사용.
7. **타입 내보내기** — 컴포넌트와 함께 Props 인터페이스, union 타입 항상 export.

## 프로젝트 구조

```
tokens/           # 디자인 토큰 (CSS Custom Properties + W3C JSON)
  colors.css      # 14 Atomic 컬러 스케일 (210+ 변수)
  semantic.css    # 44 Semantic 토큰
  typography.css  # 15 타입 스케일 + 54 유틸리티 CSS 클래스
  spacing.css     # Viewport, 모달 크기, 반응형 gap
  tokens.json     # W3C Design Token JSON
components/       # 73 React TSX 컴포넌트
  index.ts        # Barrel exports (여기서 import)
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
docs/             # 디자인 시스템 스펙
```

## 임포트

```tsx
import { Button, TextField, Modal, Avatar } from './components';
import type { ButtonProps, ButtonSize } from './components';
```

## 토큰 체계 (3-Layer)

```
Atomic (원시값)  →  Semantic (의미)  →  Component (사용)
--color-blue-50     --semantic-primary-normal     button background
```

### 주요 시맨틱 토큰

| 토큰 | 용도 |
|------|------|
| `--semantic-primary-normal` | 주요 액션 (파란색 #3182F6) |
| `--semantic-label-normal` | 기본 텍스트 |
| `--semantic-label-alternative` | 보조 텍스트 |
| `--semantic-bg-normal` | 페이지 배경 (#FFFFFF) |
| `--semantic-line-normal` | 테두리, 구분선 |
| `--semantic-fill-normal` | 표면 채움 |
| `--semantic-status-positive` | 성공 (초록 #03B26C) |
| `--semantic-status-negative` | 에러 (빨강 #F04452) |
| `--semantic-status-cautionary` | 경고 (주황 #F97316) |
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

## 주요 컴포넌트 사용 예제

### Button Family
```tsx
<Button variant="Solid" size="Medium">제출</Button>
<ButtonSolid variant="Primary" size="Large">확인</ButtonSolid>
<ButtonOutlined variant="Secondary" size="Medium">취소</ButtonOutlined>
<ButtonText variant="Neutral" size="Small">더보기</ButtonText>
<ButtonIcon icon={<CloseIcon />} variant="Background" size="Medium" />
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
```

### Feedback
```tsx
<Toast variant="Positive">저장되었습니다</Toast>
<Snackbar heading="알림" variant="Icon" icon={<Bell />} duration={5000} />
<SectionMessage variant="Cautionary">주의사항</SectionMessage>
<Alert platform="Web" heading="삭제" actions={[...]} open onClose={close} />
<TooltipCompact label="복사" shortcut="⌘C"><Button>Copy</Button></TooltipCompact>
```

### Data Display
```tsx
<Skeleton type="Text" length="Long" />
<EmptyState heading="결과 없음" description="검색어를 변경해보세요" />
<PushBadge variant="Number" number={5} size="Small" />
<ContentBadge text="NEW" variant="Solid" color="Blue" />
<Avatar src="/photo.jpg" variant="Person" size="Medium" />
<Table columns={[...]} data={[...]} selectable />
```

### Navigation
```tsx
<TopNavigation platform="iOS" title="설정" onBack={goBack} />
<BottomNavigation platform="Web" items={navItems} activeKey="home" onChange={setTab} />
<GNB breakpoint="Desktop" logo={<Logo />} menuItems={[...]} />
<Tab items={[...]} activeKey="tab1" size="Medium" resize="Fill" onChange={setTab} />
<Pagination current={1} total={10} onPageChange={setPage} />
```

### Layout
```tsx
<Card variant="Normal" title="강좌명" description="설명" thumbnail="/img.jpg" />
<Cell title="설정" description="알림 설정" trailingContent={<Switch />} />
<Accordion items={[{ key: '1', title: 'FAQ', content: <p>답변</p> }]} />
<SectionHeader title="인기 강좌" size="Large" />
<Modal variant="Popup" size="M" open={isOpen} onClose={close}>...</Modal>
```

### Dashboard & LMS
```tsx
<DashboardSideNavi role="관리자" full items={adminMenu} activeKey="users" />
<DashboardTopNavi title="대시보드" breadcrumbs={crumbs} userName="김관리" />
<ViewerSideNavi items={courseTree} activeKey="lesson-3" full />
<VideoPlayer src="/video.mp4" size="Large" title="1강 소개" onEnded={markComplete} />
```

## 새 기능 개발 시

1. **시맨틱 토큰 사용** — `var(--semantic-*)` 참조
2. **기존 컴포넌트 확인** — `components/index.ts`에서 검색
3. **data-* 패턴** — variant/state를 data 속성으로 노출
4. **한국어 레이블** — ARIA labels는 한국어
5. **플랫폼 인식** — 크로스 플랫폼 시 `platform` prop 활용
6. **타입 export** — Props 인터페이스 + union types 함께 export
7. **Barrel export 업데이트** — `components/index.ts`에 추가

## CSS 토큰 사용 예시

```css
@import './tokens/colors.css';
@import './tokens/semantic.css';
@import './tokens/typography.css';

.my-component {
  color: var(--semantic-label-normal);
  background: var(--semantic-bg-normal);
  border: 1px solid var(--semantic-line-normal);
  font-size: var(--font-size-body1);
  font-family: var(--font-family);
  border-radius: 8px;
  padding: var(--gap-responsive);
}
```

## 페이지 조합 예시

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
