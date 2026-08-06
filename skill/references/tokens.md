# Hanbit Design System — Token Reference

## Atomic Color Scales

14 scales, each with steps 1-99:

| Scale | CSS Prefix | 대표값 (50) |
|-------|-----------|-------------|
| Common | `--color-common-` | 0=#FFF, 100=#000 |
| Neutral | `--color-neutral-` | #8B95A1 |
| Cool Neutral | `--color-cool-neutral-` | #8B95A1 |
| Red | `--color-red-` | #F04452 |
| Orange | `--color-orange-` | #F97316 |
| Yellow | `--color-yellow-` | #FFC107 |
| Lime | `--color-lime-` | #8BC34A |
| Green | `--color-green-` | #03B26C |
| Emerald | `--color-emerald-` | #10B981 |
| Cyan | `--color-cyan-` | #00BCD4 |
| Sky | `--color-sky-` | #0EA5E9 |
| Blue | `--color-blue-` | #3182F6 |
| Purple | `--color-purple-` | #8B5CF6 |
| Pink | `--color-pink-` | #F472B6 |

## Semantic Tokens (44개)

### Primary
```css
--semantic-primary-normal: var(--color-blue-50);    /* #3182F6 */
--semantic-primary-strong: var(--color-blue-60);
--semantic-primary-heavy: var(--color-blue-70);
```

### Label (Text)
```css
--semantic-label-normal: var(--color-neutral-99);           /* 기본 텍스트 */
--semantic-label-strong: #000000;                           /* 강조 텍스트 */
--semantic-label-alternative: rgba(92,102,118, 0.61);       /* 보조 텍스트 */
--semantic-label-assistive: rgba(92,102,118, 0.28);         /* 약한 텍스트 */
--semantic-label-disable: rgba(92,102,118, 0.16);           /* 비활성 텍스트 */
```

### Background
```css
--semantic-bg-normal: var(--color-common-0);                /* #FFFFFF */
--semantic-bg-elevated: var(--color-common-0);
--semantic-bg-dimmed: rgba(21,23,26, 0.52);
```

### Line (Border)
```css
--semantic-line-normal: rgba(92,102,118, 0.22);             /* 기본 테두리 */
--semantic-line-alternative: rgba(92,102,118, 0.14);
--semantic-line-strong: rgba(92,102,118, 0.32);
```

### Fill (Surface)
```css
--semantic-fill-normal: rgba(92,102,118, 0.08);             /* 표면 채움 */
--semantic-fill-strong: rgba(92,102,118, 0.14);
--semantic-fill-alternative: rgba(92,102,118, 0.04);
```

### Status
```css
--semantic-status-positive: var(--color-green-50);          /* 성공 #03B26C */
--semantic-status-negative: var(--color-red-50);            /* 에러 #F04452 */
--semantic-status-cautionary: var(--color-orange-50);       /* 경고 #F97316 */
--semantic-status-informative: var(--color-blue-50);        /* 정보 #3182F6 */
```

### Static
```css
--semantic-static-white: #FFFFFF;                           /* 항상 흰색 */
--semantic-static-black: #000000;                           /* 항상 검정 */
```

### Inverse
```css
--semantic-inverse-primary: var(--color-blue-40);
--semantic-inverse-label: var(--color-common-0);
--semantic-inverse-bg: var(--color-neutral-95);
```

### Accent
```css
--semantic-accent-red: var(--color-red-50);
--semantic-accent-orange: var(--color-orange-50);
--semantic-accent-yellow: var(--color-yellow-50);
--semantic-accent-lime: var(--color-lime-50);
--semantic-accent-green: var(--color-green-50);
--semantic-accent-emerald: var(--color-emerald-50);
--semantic-accent-cyan: var(--color-cyan-50);
--semantic-accent-sky: var(--color-sky-50);
--semantic-accent-blue: var(--color-blue-50);
--semantic-accent-purple: var(--color-purple-50);
--semantic-accent-pink: var(--color-pink-50);
```

## Typography Scale

Font: **Pretendard** (`--font-family`)

```css
/* Display */
--font-size-display1: 56px;   --line-height-display1: 1.3;   --font-weight-display1: 700;
--font-size-display2: 40px;   --line-height-display2: 1.3;   --font-weight-display2: 700;

/* Title */
--font-size-title1: 36px;     --line-height-title1: 1.35;    --font-weight-title1: 700;
--font-size-title2: 28px;     --line-height-title2: 1.35;    --font-weight-title2: 700;
--font-size-title3: 24px;     --line-height-title3: 1.35;    --font-weight-title3: 700;

/* Heading */
--font-size-heading1: 22px;   --line-height-heading1: 1.4;   --font-weight-heading1: 600;
--font-size-heading2: 20px;   --line-height-heading2: 1.4;   --font-weight-heading2: 600;

/* Headline */
--font-size-headline1: 18px;  --line-height-headline1: 1.45; --font-weight-headline1: 600;
--font-size-headline2: 17px;  --line-height-headline2: 1.45; --font-weight-headline2: 600;

/* Body */
--font-size-body1: 16px;      --line-height-body1: 1.5;      --font-weight-body1: 400;
--font-size-body2: 15px;      --line-height-body2: 1.5;      --font-weight-body2: 400;

/* Label */
--font-size-label1: 14px;     --line-height-label1: 1.5;     --font-weight-label1: 500;
--font-size-label2: 13px;     --line-height-label2: 1.5;     --font-weight-label2: 500;

/* Caption */
--font-size-caption1: 12px;   --line-height-caption1: 1.5;   --font-weight-caption1: 400;
--font-size-caption2: 11px;   --line-height-caption2: 1.5;   --font-weight-caption2: 400;
```

### 유틸리티 CSS 클래스

```css
.text-display1 { font-size: 56px; line-height: 1.3; font-weight: 700; }
.text-body1    { font-size: 16px; line-height: 1.5; font-weight: 400; }
.text-label1   { font-size: 14px; line-height: 1.5; font-weight: 500; }
/* ... 15 scales × 3 weights + bold variants = 54 classes */
```

## Spacing & Layout

```css
/* Viewport sizes */
--viewport-desktop: 1440px;
--viewport-tablet: 768px;
--viewport-mobile: 375px;

/* Modal sizes */
--modal-s: 400px;
--modal-m: 560px;
--modal-l: 720px;
--modal-xl: 960px;

/* Responsive gap */
--gap-responsive: clamp(16px, 2vw, 24px);
```
