# Hanbit Design System — Component API Reference

## Button Family

### Button
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'Solid' | 'Outlined' | 'Ghost';
  size?: 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
<Button variant="Solid" size="Medium" loading={false}>제출</Button>
```

### ButtonSolid
```tsx
interface ButtonSolidProps {
  variant?: 'Primary' | 'Secondary' | 'Neutral' | 'Critical';
  size?: 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
}
<ButtonSolid variant="Primary" size="Large">확인</ButtonSolid>
```

### ButtonOutlined
```tsx
interface ButtonOutlinedProps {
  variant?: 'Primary' | 'Secondary' | 'Neutral' | 'Critical';
  size?: 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
}
<ButtonOutlined variant="Secondary" size="Medium">취소</ButtonOutlined>
```

### ButtonText
```tsx
interface ButtonTextProps {
  variant?: 'Primary' | 'Secondary' | 'Neutral' | 'Critical';
  size?: 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
}
<ButtonText variant="Neutral" size="Small">더보기</ButtonText>
```

### ButtonIcon
```tsx
interface ButtonIconProps {
  icon: React.ReactNode;
  variant?: 'Primary' | 'Secondary' | 'Neutral' | 'Background';
  size?: 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
}
<ButtonIcon icon={<CloseIcon />} variant="Background" size="Medium" />
```

## Form Controls

### TextField
```tsx
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  status?: 'Normal' | 'Positive' | 'Negative';
  errorText?: string;
  helperText?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
}
<TextField label="이메일" status="Negative" errorText="형식 오류" required />
```

### Textarea
```tsx
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  status?: 'Normal' | 'Positive' | 'Negative';
  resize?: 'None' | 'Auto' | 'Limit';
  maxLength?: number;
  showCharCount?: boolean;
}
<Textarea resize="Limit" maxLength={500} showCharCount label="내용" />
```

### Searchfield
```tsx
interface SearchfieldProps {
  size?: 'Small' | 'Medium' | 'Large';
  placeholder?: string;
  onSearch?: (value: string) => void;
  onClear?: () => void;
}
<Searchfield size="Medium" placeholder="검색어를 입력하세요" onSearch={handleSearch} />
```

### Checkbox
```tsx
interface CheckboxProps {
  size?: 'S' | 'M' | 'L';
  state?: 'Unchecked' | 'Checked' | 'Indeterminate';
  label?: string;
  disabled?: boolean;
}
<Checkbox size="M" state="Checked" label="이용약관 동의" />
```

### CheckMark
```tsx
interface CheckMarkProps {
  size?: 'S' | 'M' | 'L';
  checked?: boolean;
  label?: string;
}
<CheckMark size="M" checked label="완료" />
```

### Radio
```tsx
interface RadioProps {
  size?: 'S' | 'M' | 'L';
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}
<Radio size="M" label="옵션 A" checked />
```

### Switch
```tsx
interface SwitchProps {
  platform?: 'iOS' | 'Android' | 'Web';
  size?: 'S' | 'M' | 'L';
  checked?: boolean;
  disabled?: boolean;
}
<Switch platform="iOS" size="M" checked />
```

### Select
```tsx
interface SelectProps {
  options: { value: string; label: string }[];
  render?: 'Default' | 'Chip';
  multiple?: boolean;
  placeholder?: string;
}
<Select options={options} render="Chip" placeholder="선택하세요" />
```

### Slider
```tsx
interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  label?: string;
  showValue?: boolean;
}
<Slider min={0} max={100} value={50} label="볼륨" showValue />
```

### SegmentedControl
```tsx
interface SegmentedControlProps {
  variant?: 'Solid' | 'Outlined';
  size?: 'S' | 'M' | 'L';
  items: { key: string; label: string }[];
  activeKey?: string;
  onChange?: (key: string) => void;
}
<SegmentedControl variant="Solid" size="M" items={items} activeKey="tab1" />
```

## Feedback

### Toast
```tsx
interface ToastProps {
  variant?: 'Normal' | 'Positive' | 'Negative' | 'Cautionary';
  children: React.ReactNode;
  action?: { label: string; onClick: () => void };
  duration?: number;
}
<Toast variant="Positive">저장되었습니다</Toast>
```

### Snackbar
```tsx
interface SnackbarProps {
  heading: string;
  description?: string;
  variant?: 'Text' | 'Icon';
  icon?: React.ReactNode;
  duration?: number;
  action?: { label: string; onClick: () => void };
}
<Snackbar heading="알림" description="새 메시지" variant="Icon" icon={<Bell />} />
```

### SectionMessage
```tsx
interface SectionMessageProps {
  variant?: 'Normal' | 'Positive' | 'Negative' | 'Cautionary' | 'Informative';
  children: React.ReactNode;
  title?: string;
}
<SectionMessage variant="Cautionary" title="주의">변경사항을 확인하세요</SectionMessage>
```

### Alert
```tsx
interface AlertProps {
  platform?: 'iOS' | 'Android' | 'Web';
  heading: string;
  description?: string;
  actions: { label: string; variant?: 'Primary' | 'Secondary' | 'Destructive'; onClick: () => void }[];
  open?: boolean;
  onClose?: () => void;
}
<Alert platform="Web" heading="삭제" description="정말 삭제하시겠습니까?" actions={actions} open />
```

### TooltipCompact
```tsx
interface TooltipCompactProps {
  label: string;
  shortcut?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactElement;
}
<TooltipCompact label="복사" shortcut="⌘C"><Button>Copy</Button></TooltipCompact>
```

### TooltipExtended
```tsx
interface TooltipExtendedProps {
  heading: string;
  description: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactElement;
}
<TooltipExtended heading="프로필" description="계정 설정"><Avatar /></TooltipExtended>
```

### ProgressIndicator
```tsx
interface ProgressIndicatorProps {
  percent: number;
  size?: 'Small' | 'Medium' | 'Large';
  showLabel?: boolean;
}
<ProgressIndicator percent={75} size="Medium" showLabel />
```

### Circular
```tsx
interface CircularProps {
  variant?: 'Default' | 'Hanbit';
  size?: number;
}
<Circular variant="Hanbit" size={40} />
```

## Data Display

### Skeleton
```tsx
interface SkeletonProps {
  type?: 'Text' | 'Circle' | 'Rectangle' | 'Thumbnail';
  length?: 'Short' | 'Medium' | 'Long' | 'Full';
}
<Skeleton type="Text" length="Long" />
```

### EmptyState
```tsx
interface EmptyStateProps {
  heading: string;
  description?: string;
  illustration?: React.ReactNode;
  action?: React.ReactNode;
}
<EmptyState heading="결과 없음" description="검색어를 변경해보세요" action={<Button>다시 검색</Button>} />
```

### PushBadge
```tsx
interface PushBadgeProps {
  variant?: 'Dot' | 'Number';
  number?: number;
  size?: 'Small' | 'Medium';
}
<PushBadge variant="Number" number={5} size="Small" />
```

### ContentBadge
```tsx
interface ContentBadgeProps {
  text: string;
  variant?: 'Solid' | 'Outlined';
  color?: 'Blue' | 'Green' | 'Red' | 'Orange' | 'Purple' | 'Neutral';
}
<ContentBadge text="NEW" variant="Solid" color="Blue" />
```

### PlayIconBadge
```tsx
interface PlayIconBadgeProps {
  size?: 'Small' | 'Medium' | 'Large';
}
<PlayIconBadge size="Medium" />
```

### Thumbnail
```tsx
interface ThumbnailProps {
  src: string;
  alt?: string;
  size?: 'Small' | 'Medium' | 'Large';
  ratio?: '1:1' | '4:3' | '16:9';
  badge?: React.ReactNode;
}
<Thumbnail src="/thumb.jpg" size="Medium" ratio="16:9" badge={<PlayIconBadge />} />
```

### Avatar
```tsx
interface AvatarProps {
  src?: string;
  variant?: 'Person' | 'Organization' | 'Placeholder';
  size?: 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
  alt?: string;
}
<Avatar src="/photo.jpg" variant="Person" size="Medium" />
```

### Table
```tsx
interface TableProps {
  columns: { key: string; header: string; width?: string | number; align?: 'left' | 'center' | 'right' }[];
  data: Record<string, React.ReactNode>[];
  selectable?: boolean;
  sortable?: boolean;
  onRowClick?: (row: Record<string, React.ReactNode>) => void;
}
<Table columns={cols} data={rows} selectable sortable />
```

## Overlay

### Modal
```tsx
interface ModalProps {
  variant?: 'Popup' | 'BottomSheet' | 'FullScreen';
  size?: 'S' | 'M' | 'L' | 'XL';
  open?: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
<Modal variant="Popup" size="M" open={isOpen} onClose={close} title="설정">...</Modal>
```

### AutoComplete
```tsx
interface AutoCompleteProps {
  variant?: 'Search' | 'Input';
  options: { value: string; label: string }[];
  onSelect?: (value: string) => void;
  placeholder?: string;
}
<AutoComplete variant="Search" options={suggestions} onSelect={handleSelect} />
```

### ActionSheet
```tsx
interface ActionSheetProps {
  platform?: 'iOS' | 'Android' | 'Web';
  actions: { label: string; variant?: 'Default' | 'Destructive'; onClick: () => void }[];
  open?: boolean;
  onClose?: () => void;
}
<ActionSheet platform="iOS" actions={actions} open onClose={close} />
```

### DatePickerWeb / TimePickerWeb
```tsx
interface DatePickerWebProps {
  variant?: 'Normal' | 'Range';
  value?: Date | [Date, Date];
  onChange?: (date: Date | [Date, Date]) => void;
}
<DatePickerWeb variant="Range" onChange={handleDate} />
<TimePickerWeb onChange={handleTime} />
```

## Navigation

### TopNavigation
```tsx
interface TopNavigationProps {
  platform?: 'iOS' | 'Android' | 'Web';
  title: string;
  onBack?: () => void;
  rightActions?: React.ReactNode[];
}
<TopNavigation platform="iOS" title="설정" onBack={goBack} />
```

### BottomNavigation
```tsx
interface BottomNavigationProps {
  platform?: 'iOS' | 'Android' | 'Web';
  items: { key: string; label: string; icon: React.ReactNode; badge?: React.ReactNode }[];
  activeKey?: string;
  onChange?: (key: string) => void;
}
<BottomNavigation platform="Web" items={navItems} activeKey="home" onChange={setTab} />
```

### SideNavigation
```tsx
interface SideNavigationProps {
  items: { key: string; label: string; icon?: React.ReactNode; children?: SideNavItem[] }[];
  activeKey?: string;
  collapsed?: boolean;
  onSelect?: (key: string) => void;
}
<SideNavigation items={menuItems} activeKey="dashboard" onSelect={navigate} />
```

### GNB
```tsx
interface GNBProps {
  breakpoint?: 'Desktop' | 'Tablet' | 'Mobile';
  logo: React.ReactNode;
  menuItems: { key: string; label: string; href?: string }[];
  rightContent?: React.ReactNode;
}
<GNB breakpoint="Desktop" logo={<Logo />} menuItems={menu} />
```

### Footer
```tsx
interface FooterProps {
  breakpoint?: 'Desktop' | 'Tablet' | 'Mobile';
  copyright: string;
  linkGroups?: { title: string; links: { label: string; href: string }[] }[];
  socialLinks?: React.ReactNode;
}
<Footer breakpoint="Desktop" copyright="© Hanbit" linkGroups={footerLinks} />
```

### Tab
```tsx
interface TabProps {
  items: { key: string; label: string; badge?: React.ReactNode; disabled?: boolean }[];
  activeKey?: string;
  size?: 'Small' | 'Medium' | 'Large';
  resize?: 'Hug' | 'Fill';
  onChange?: (key: string) => void;
}
<Tab items={tabs} activeKey="tab1" size="Medium" resize="Fill" onChange={setTab} />
```

### Pagination
```tsx
interface PaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
}
<Pagination current={1} total={10} onPageChange={setPage} />
```

### Category
```tsx
interface CategoryProps {
  items: { key: string; label: string; count?: number }[];
  activeKey?: string;
  variant?: 'Normal' | 'Rounded';
  size?: 'Normal' | 'Small';
  onChange?: (key: string) => void;
}
<Category items={categories} activeKey="all" variant="Normal" onChange={setCategory} />
```

### Menu
```tsx
interface MenuProps {
  variant?: 'Default' | 'Checkbox' | 'Radio';
  items: { key: string; label: string; icon?: React.ReactNode; disabled?: boolean; checked?: boolean }[];
  onSelect?: (key: string) => void;
}
<Menu variant="Checkbox" items={menuItems} onSelect={handleSelect} />
```

## Layout

### Cell
```tsx
interface CellProps {
  title: string;
  description?: string;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  onClick?: () => void;
}
<Cell title="알림 설정" description="푸시 알림" trailingContent={<Switch />} />
```

### Accordion
```tsx
interface AccordionProps {
  items: { key: string; title: string; content: React.ReactNode }[];
  multiple?: boolean;
  defaultOpenKeys?: string[];
}
<Accordion items={faqItems} multiple />
```

### SectionHeader
```tsx
interface SectionHeaderProps {
  title: string;
  size?: 'Small' | 'Medium' | 'Large';
  action?: React.ReactNode;
}
<SectionHeader title="인기 강좌" size="Large" action={<ButtonText>전체보기</ButtonText>} />
```

### Card
```tsx
interface CardProps {
  variant?: 'Normal' | 'Outlined' | 'Elevated';
  platform?: 'Desktop' | 'Mobile';
  title?: string;
  description?: string;
  thumbnail?: string;
  trailingContent?: React.ReactNode;
  onClick?: () => void;
}
<Card variant="Normal" title="강좌명" description="설명" thumbnail="/img.jpg" />
```

### Divider
```tsx
interface DividerProps {
  variant?: 'Normal' | 'Strong';
  orientation?: 'horizontal' | 'vertical';
}
<Divider variant="Strong" />
```

### ActionArea
```tsx
interface ActionAreaProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
<ActionArea onClick={handleClick}><Card title="클릭 가능" /></ActionArea>
```

### ScrollBar
```tsx
interface ScrollBarProps {
  orientation?: 'vertical' | 'horizontal';
  size?: 'thin' | 'normal';
  children: React.ReactNode;
}
<ScrollBar orientation="vertical"><div>{longContent}</div></ScrollBar>
```

## Element (Utility)

### SafeArea
```tsx
interface SafeAreaProps {
  platform?: 'iOS' | 'Android';
  position?: 'top' | 'bottom' | 'both';
  children: React.ReactNode;
}
<SafeArea platform="iOS" position="both">{content}</SafeArea>
```

### AspectRatio
```tsx
interface AspectRatioProps {
  ratio: '1:1' | '4:3' | '16:9' | '3:4' | '9:16';
  children: React.ReactNode;
}
<AspectRatio ratio="16:9"><img src="/video-thumb.jpg" /></AspectRatio>
```

### IconWrapper
```tsx
interface IconWrapperProps {
  icon: React.ReactNode;
  size?: number;
  color?: string;
}
<IconWrapper icon={<StarIcon />} size={24} color="var(--semantic-primary-normal)" />
```

## Platform Pickers

```tsx
// iOS
<DatePickerIOS type="Calendar" | "Spinner" onChange={handleDate} />
<TimePickerIOS type="Spinner" onChange={handleTime} />

// Android
<DatePickerAndroid type="Picker" | "Input" onConfirm={handleDate} />
<TimePickerAndroid type="Clock" | "Input" onConfirm={handleTime} />

// Web
<DatePickerWeb variant="Normal" | "Range" onChange={handleDate} />
<TimePickerWeb onChange={handleTime} />
```

## LMS Viewer

### ViewerSideNavi
```tsx
interface ViewerSideNaviProps {
  items: { key: string; title: string; children?: { key: string; title: string; completed?: boolean }[] }[];
  activeKey?: string;
  full?: boolean;
  onSelect?: (key: string) => void;
}
<ViewerSideNavi items={courseTree} activeKey="lesson-3" full />
```

### ViewerBotNavi
```tsx
interface ViewerBotNaviProps {
  breakpoint?: 'Desktop' | 'Tablet' | 'Mobile';
  showProgressBar?: boolean;
  progress?: number;
  currentPage?: number;
  totalPages?: number;
  onPrev?: () => void;
  onNext?: () => void;
}
<ViewerBotNavi breakpoint="Desktop" showProgressBar progress={60} currentPage={3} totalPages={10} />
```

### VideoPlayer
```tsx
interface VideoPlayerProps {
  src: string;
  size?: 'Small' | 'Medium' | 'Large';
  title?: string;
  autoPlay?: boolean;
  onEnded?: () => void;
  onProgress?: (percent: number) => void;
}
<VideoPlayer src="/video.mp4" size="Large" title="1강 소개" onEnded={markComplete} />
```

### ViewerDrawToolbar
```tsx
interface ViewerDrawToolbarProps {
  tools: { key: string; icon: React.ReactNode; label: string }[];
  activeToolKey?: string;
  onToolSelect?: (key: string) => void;
}
<ViewerDrawToolbar tools={drawTools} activeToolKey="pen" onToolSelect={setTool} />
```

## Dashboard

### DashboardSideNavi
```tsx
interface DashboardSideNaviProps {
  role?: string;
  full?: boolean;
  items: { key: string; label: string; icon?: React.ReactNode; children?: DashboardNavItem[] }[];
  activeKey?: string;
  onSelect?: (key: string) => void;
}
<DashboardSideNavi role="관리자" full items={adminMenu} activeKey="users" />
```

### DashboardTopNavi
```tsx
interface DashboardTopNaviProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  userName?: string;
  userAvatar?: string;
  notifications?: number;
}
<DashboardTopNavi title="대시보드" breadcrumbs={crumbs} userName="김관리" />
```
