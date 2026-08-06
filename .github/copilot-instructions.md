# Hanbit Design System — GitHub Copilot Instructions

This is the Hanbit Design System: 73 React TSX components + CSS design tokens, sourced from Figma.

## Quick Rules

1. Import components from `./components` (barrel export)
2. Use `var(--semantic-*)` tokens for all colors — never hardcode hex
3. ARIA labels in Korean (한국어)
4. Style via `data-*` attributes, not className strings
5. Check existing components before building new ones

## Key Tokens

- `--semantic-primary-normal` — primary blue (#3182F6)
- `--semantic-label-normal` — default text
- `--semantic-bg-normal` — page background
- `--semantic-line-normal` — borders/dividers
- `--semantic-status-positive` — success green
- `--semantic-status-negative` — error red
- `--semantic-status-cautionary` — warning orange
- `--font-family` — Pretendard

## Component Categories

- **Form**: Button, TextField, Textarea, Searchfield, Checkbox, Radio, Switch, Select, Slider, SegmentedControl
- **Buttons**: ButtonSolid, ButtonOutlined, ButtonText, ButtonIcon
- **Feedback**: Toast, Snackbar, SectionMessage, Alert, Tooltip*, ProgressIndicator, Circular
- **Data**: Skeleton, EmptyState, *Badge, Thumbnail, Avatar, Table
- **Overlay**: Modal, AutoComplete, ActionSheet, DatePickerWeb, TimePickerWeb
- **Nav**: TopNavigation, BottomNavigation, SideNavigation, GNB, Footer, Tab, Pagination, Category, Menu
- **Layout**: Cell, Accordion, SectionHeader, Card, Divider, ActionArea, ScrollBar
- **Utility**: Gradient, Interaction, SafeArea, AspectRatio, Keyboard, IconWrapper, TextEditor
- **Pickers**: DatePicker/TimePicker for iOS, Android, Web
- **LMS**: ViewerSideNavi, ViewerBotNavi, ViewerDrawToolbar, VideoPlayer
- **Dashboard**: DashboardSideNavi, DashboardTopNavi
