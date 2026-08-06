# Hanbit Design System Specification

> Source: Figma `usRZn9VKhXQ9MedDWw1u57` | Generated: 2026-08-06

---

## 1. Architecture

```
Foundation (Atomic Tokens)
  └─ Element (Gradient, Interaction, SafeArea, Ratio)
       └─ Component (210 component sets, 324 standalone components)
```

**Pages**: Overview | 1 Theme | 2 Element | 3 Component | Foundation (Color Atomic/Semantic, Typography, Grid)

---

## 2. Color System

### 2.1 Atomic Palette (199 variables)

14 color scales with consistent 5-95 step numbering:

| Scale | Range | Key Color |
|-------|-------|----------|
| Common | 0, 100 | White, Black |
| Neutral | 5-95 (18 steps) | Warm gray |
| Cool Neutral | 5-95 (18 steps) | Blue-gray |
| **Emerald** | 5-95 (18 steps) | **Brand #03aea0** |
| Red | 5-95 (11 steps) | #fb2c36 |
| Orange | 5-95 (11 steps) | #ff6900 |
| Yellow | 5-95 (11 steps) | #f0b100 |
| Lime | 5-95 (11 steps) | #7ccf00 |
| Green | 5-95 (11 steps) | #00c950 |
| Cyan | 5-95 (11 steps) | #00b8db |
| Sky | 5-95 (11 steps) | #00a6f4 |
| Blue | 5-95 (11 steps) | #2b7fff |
| Purple | 5-95 (11 steps) | #ad46ff |
| Pink | 5-95 (11 steps) | #f6339a |

### 2.2 Semantic Tokens (44 variables, Light mode)

| Category | Tokens | Purpose |
|----------|--------|--------|
| **Primary** | Normal/Strong/Heavy | Brand CTA, hover, pressed |
| **Label** | Normal/Strong/Neutral/Alternative/Assistive/Disable | Text hierarchy |
| **Background** | Normal/Alternative/Elevated Normal/Elevated Alt | Surface layers |
| **Interaction** | Inactive/Disable | Interactive state colors |
| **Line** | Normal/Neutral/Alternative | Border/divider hierarchy |
| **Fill** | Normal/Strong/Alternative | Background fill hierarchy |
| **Status** | Positive/Cautionary/Negative | Green/Orange/Red feedback |
| **Static** | White/Black | Theme-independent |
| **Accent** | 7 colors x Background + Foreground | Decorative/tag colors |
| **Material** | Dimmer | Modal overlay |
| **Inverse** | Primary/Background/Label | Dark-on-light contexts |

**Rule**: Always use Semantic tokens in production. Atomic tokens are for building Semantic references only.

---

## 3. Typography

**Font**: Pretendard (single family across all scales)

| Scale | Size | Weight | Line Height | Letter Spacing | Use |
|-------|------|--------|-------------|----------------|----|
| Display 1 | 56px | B/M/R | 128.6% | -3.19% | Hero |
| Display 2 | 40px | B/M/R | 130% | -2.82% | Sub-hero |
| Title 1 | 36px | B/M/R | 133.4% | -2.7% | Page title |
| Title 2 | 28px | B/M/R | 135.8% | -2.36% | Section title |
| Title 3 | 24px | B/M/R | 133.4% | -2.3% | Sub-section |
| H1 | 22px | SB/M/R | 136.4% | -1.94% | Heading 1 |
| H2 | 20px | SB/M/R | 140% | -1.2% | Heading 2 |
| H3 | 18px | SB/M/R | 144.5% | ~0% | Heading 3 |
| H4 | 17px | SB/M/R | 141.2% | 0% | Heading 4 |
| Body 1 | 16px | SB/M/R | 150% / 162.5%* | +0.57% | Main body |
| Body 2 | 15px | SB/M/R | 146.7% / 160%* | +0.96% | Secondary body |
| Label 1 | 14px | SB/M/R | 142.9% / 157.1%* | +1.45% | Buttons, labels |
| Label 2 | 13px | SB/M/R | 138.5% | +1.94% | Small labels |
| Caption 1 | 12px | SB/M/R | 133.4% | +2.52% | Captions |
| Caption 2 | 11px | SB/M/R | 127.3% | +3.11% | Tiny captions |

> *Body/Label scales have Normal and Reading line-height variants.
> B=Bold(700), SB=SemiBold(600), M=Medium(500), R=Regular(400)

---

## 4. Opacity Scale

15-step non-linear scale: 0, 5, 8, 12, 16, 22, 28, 35, 43, 52, 61, 74, 88, 97, 100

---

## 5. Shadows (Effect Styles)

| Token | Use |
|-------|----|
| Shadow/Normal | Minimal depth (card hover) |
| Shadow/Emphasize | Medium (floating elements) |
| Shadow/Strong | Strong (dropdown, popover) |
| Shadow/Heavy | Max (modal, dialog) |

---

## 6. Variable Collections

### Component (Mobile / Desktop modes)
| Variable | Mobile | Desktop |
|----------|--------|--------|
| Space/Gap/Normal | 16px | 20px |
| Padding/Card/Tiny | 4px | 6px |
| Margin/Platform | 20px | 20px |
| Viewport/lg | 1100px | 1100px |
| Viewport/xl | 1440px | 1440px |

### Modal (4 size modes)
| Variable | Small | Medium | Large | XLarge |
|----------|-------|--------|-------|-------|
| Width | 360px | 400px | 480px | 560px |
| Radius | 12px | 12px | 20px | 20px |
| Nav Margin | 16px | 20px | 20px | 24px |
| Action Horizontal | 16px | 20px | 24px | 32px |
| Content | 20px | 20px | 24px | 32px |

---

## 7. Component Catalog (210 sets)

### 7.1 Form Controls
| Component | Variants | Key Props |
|-----------|----------|----------|
| **TextField** | Status(Normal/Positive/Negative), Active, Focus, Disable | Label, Placeholder, Required, Error/Success Text, Leading/Trailing |
| **Textarea** | Status(Normal/Negative), Resize(Normal/Limit/Fixed), Active, Focus, Disable | Heading, Description, Character Counter, Scroll |
| **Select** | Render(Text/Chip), Negative, Active, Focus, Disable, Overflow | Heading, Placeholder, Required, Error Text, Leading Content |
| **Searchfield** | Size(S/M), Active | Text, Cursor |
| **Checkbox** | Size(S/M), State(Unchecked/Checked/Indeterminate), Tight, Bold, Disable | Label |
| **Radio** | Size(S/M), State(Unchecked/Checked), Tight, Disable | Label |
| **Check Mark** | Size(S/M), State(Unchecked/Checked), Tight, Disable | Label |
| **Switch** | Platform(iOS/Normal), Size(XS/S/M), Active, Disable | - |
| **Slider** | Percent(0/50/100%), Disable | Labels, Heading |
| **Segmented Control** | Variant(Solid/Outlined), Size(S/M/L), Icon | Tabs 2~5 |

### 7.2 Feedback
| Component | Variants | Key Props |
|-----------|----------|----------|
| **Toast** | Normal/Positive/Cautionary/Negative | Text, Leading Icon |
| **Snackbar** | Normal/Icon | Heading, Description, Leading Icon |
| **Section Message** | Normal/Info/Positive/Cautionary/Negative | Heading, Description, Close, Actions, Icon |
| **Alert** | Platform(iOS/Android/Web) | Dialog(Heading/Body), Action(Normal/Assistive/Negative) |
| **Tooltip/Compact** | Normal/Inverse | Label, Shortcut |
| **Tooltip/Extended** | Close Button(T/F) | Label, Action, Arrow (12 positions) |

### 7.3 Data Display
| Component | Variants | Key Props |
|-----------|----------|----------|
| **Content Badge** | Variant(Solid/Outlined), Size(XS/S/M), Color(Neutral/Accent) | Text, Icons |
| **Push Badge** | Variant(Dot/Number/New), Size(XS/S/M) | Number |
| **Empty State** | Platform(Desktop/Mobile), Padding(Normal/Compact) | Heading, Description, Image, Button |
| **Skeleton** | Type(Text/Rectangle/Circle), Color(Normal/White) | Length, Align |

### 7.4 Overlays
| Component | Variants | Key Props |
|-----------|----------|----------|
| **Modal/Popup** | Size(M/L/XL), Fixed, Custom | Action, Contents (slot) |
| **Modal/Bottom Sheet** | Resize(Hug/Flexible/Fill/Fixed), Custom | Action, Collapse, Contents (slot) |
| **Modal/Full** | Custom | Action, Contents (slot) |
| **Auto Complete** | Variant(Normal/Search/Avatar/Checkbox/Thumbnail) | Title, Direct Input, Scroll Bar |
| **Action Sheet** | Platform(iOS/Android) | - |

### 7.5 Date & Time
| Component | Variants |
|-----------|----------|
| **Date Picker/Web** | View(Day/Month/Year), Variant(Normal/Range), Expand |
| **Date Picker/iOS** | Type(Calendar/Wheel) |
| **Date Picker/Android** | Type(Input/Picker/Wheel) |
| **Time Picker/Web** | HH:MM, AA HH, AA HH:MM, AA HH:MM:SS |
| **Time Picker/iOS** | Single variant |
| **Time Picker/Android** | Type(Dial/Input/Wheel) |

### 7.6 Elements (Layer 2)
| Component | Variants |
|-----------|----------|
| **Gradient** | Solid/Multiple/Mask x Direction(T/R/B/L) |
| **Interaction** | Normal/Light/Strong x State(Normal/Hovered/Focused/Pressed) |
| **Safe Area** | Status/Bottom x Platform(iOS/Android/Web) |
| **Ratio** | Vertical(1:1~3:4), Horizontal(1:1~21:9, 10 ratios) |

### 7.7 Decorative
| Component | Count |
|-----------|------|
| Icons (Normal) | 70+ sets (Fill/Outline, Thick, Small variants) |
| Flags | 240+ country flags (ISO alpha-2) |
| Illustrations | Blank, Labs, Search, Avatar (5 colors) |
| Logos | Hanbit (Circle/Horizontal/Vertical, Normal/White/Black) |

---

## 8. Usage Guidelines

### Colors
- **Never use Atomic tokens directly** in production code
- Text: `Label/Normal` (primary) > `Neutral` > `Alternative` > `Assistive`
- Borders: `Line/Normal` > `Neutral` > `Alternative`
- Status: Positive=success, Cautionary=warning, Negative=error

### Typography
- Page titles: Title 1~3
- Section headings: H1~H4
- Body text: Body 1 (primary), Body 2 (secondary)
- Long-form: Use Reading variants for wider line-height
- UI labels/buttons: Label 1~2
- Metadata: Caption 1~2

### Responsive
- Use Component variable collection (Mobile/Desktop modes)
- Modal sizing follows 4-step system (Small~XLarge)
- Platform-specific components available for iOS, Android, Web

### Accessibility
- Ensure Label/Normal text on Background/Normal meets WCAG AA (4.5:1)
- Status colors are supplemented by icons (not color-only)
- All form components include `aria-invalid`, `role`, `aria-label` support
