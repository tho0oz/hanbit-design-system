# Hanbit Design System — Common UI Patterns

## 1. 로그인 페이지

```tsx
import { TextField, Button, Checkbox, Divider } from './components';

const LoginPage = () => (
  <div className="login-container">
    <h1 className="text-title2">로그인</h1>
    <form>
      <TextField label="이메일" type="email" placeholder="이메일을 입력하세요" required />
      <TextField label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" required />
      <Checkbox size="M" label="로그인 유지" />
      <Button variant="Solid" size="Large" style={{ width: '100%' }}>로그인</Button>
      <Divider variant="Normal" />
      <ButtonOutlined variant="Neutral" size="Large" style={{ width: '100%' }}>회원가입</ButtonOutlined>
    </form>
  </div>
);
```

## 2. 목록 페이지 (강좌)

```tsx
import { GNB, SectionHeader, Tab, Card, Pagination, Footer } from './components';

const CoursesPage = () => (
  <>
    <GNB breakpoint="Desktop" logo={<Logo />} menuItems={menu} />
    <main>
      <SectionHeader title="전체 강좌" size="Large" />
      <Tab items={categories} activeKey={activeTab} onChange={setTab} />
      <div className="grid-3col">
        {courses.map(c => (
          <Card key={c.id} title={c.title} description={c.instructor}
            thumbnail={c.img} trailingContent={<ContentBadge text={c.badge} color="Blue" />} />
        ))}
      </div>
      <Pagination current={page} total={totalPages} onPageChange={setPage} />
    </main>
    <Footer breakpoint="Desktop" copyright="© Hanbit" />
  </>
);
```

## 3. 설정 페이지

```tsx
import { TopNavigation, Cell, Switch, SectionHeader, Divider } from './components';

const SettingsPage = () => (
  <>
    <TopNavigation platform="iOS" title="설정" onBack={goBack} />
    <SectionHeader title="알림" size="Medium" />
    <Cell title="푸시 알림" description="새 강좌 알림 받기" trailingContent={<Switch platform="iOS" checked />} />
    <Cell title="이메일 알림" trailingContent={<Switch platform="iOS" />} />
    <Divider variant="Strong" />
    <SectionHeader title="계정" size="Medium" />
    <Cell title="프로필 편집" onClick={goToProfile} />
    <Cell title="비밀번호 변경" onClick={goToPassword} />
  </>
);
```

## 4. 모달 확인 대화상자

```tsx
import { Modal, Button } from './components';

const ConfirmDialog = ({ open, onClose, onConfirm }) => (
  <Modal variant="Popup" size="S" open={open} onClose={onClose} title="삭제 확인"
    footer={
      <>
        <ButtonOutlined variant="Neutral" onClick={onClose}>취소</ButtonOutlined>
        <ButtonSolid variant="Critical" onClick={onConfirm}>삭제</ButtonSolid>
      </>
    }>
    <p>이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
  </Modal>
);
```

## 5. 대시보드 레이아웃

```tsx
import { DashboardSideNavi, DashboardTopNavi, Card, Table, ProgressIndicator } from './components';

const DashboardLayout = () => (
  <div className="dashboard-layout">
    <DashboardSideNavi role="관리자" full items={adminMenu} activeKey="overview" onSelect={navigate} />
    <div className="dashboard-main">
      <DashboardTopNavi title="학습 현황" breadcrumbs={[{ label: '홈' }, { label: '대시보드' }]} userName="김관리" />
      <div className="dashboard-grid">
        <Card variant="Elevated" title="수강률">
          <ProgressIndicator percent={78} size="Large" showLabel />
        </Card>
        <Card variant="Elevated" title="수강생 현황">
          <Table columns={cols} data={rows} />
        </Card>
      </div>
    </div>
  </div>
);
```

## 6. LMS 뷰어

```tsx
import { ViewerSideNavi, ViewerBotNavi, VideoPlayer, ViewerDrawToolbar } from './components';

const LMSViewer = () => (
  <div className="viewer-layout">
    <ViewerSideNavi items={courseTree} activeKey={currentLesson} full onSelect={navigateLesson} />
    <div className="viewer-content">
      <VideoPlayer src={videoUrl} size="Large" title={lessonTitle} onEnded={markComplete} onProgress={saveProgress} />
      <ViewerDrawToolbar tools={drawTools} activeToolKey="pen" onToolSelect={setTool} />
    </div>
    <ViewerBotNavi breakpoint="Desktop" showProgressBar progress={courseProgress} currentPage={lessonIndex} totalPages={totalLessons} onPrev={prevLesson} onNext={nextLesson} />
  </div>
);
```

## 7. 검색 + 필터

```tsx
import { Searchfield, Category, Chip, EmptyState, Card } from './components';

const SearchPage = () => (
  <>
    <Searchfield size="Large" placeholder="강좌, 강사명 검색" onSearch={handleSearch} onClear={clearSearch} />
    <Category items={categories} activeKey={activeCategory} onChange={setCategory} />
    <div className="filter-chips">
      {filters.map(f => <Chip key={f.key} label={f.label} selected={f.active} onToggle={() => toggleFilter(f.key)} />)}
    </div>
    {results.length === 0 ? (
      <EmptyState heading="검색 결과 없음" description="다른 검색어를 시도해보세요" action={<Button>필터 초기화</Button>} />
    ) : (
      <div className="grid-3col">
        {results.map(r => <Card key={r.id} title={r.title} thumbnail={r.img} />)}
      </div>
    )}
  </>
);
```

## 8. 폼 유효성 검사 패턴

```tsx
import { TextField, Textarea, Select, Button, SectionMessage } from './components';

const FormPage = () => {
  const [errors, setErrors] = useState({});

  return (
    <form onSubmit={handleSubmit}>
      {errors.global && <SectionMessage variant="Negative">{errors.global}</SectionMessage>}

      <TextField label="이름" required
        status={errors.name ? 'Negative' : 'Normal'}
        errorText={errors.name} />

      <TextField label="이메일" type="email" required
        status={errors.email ? 'Negative' : 'Normal'}
        errorText={errors.email} />

      <Select options={options} placeholder="카테고리 선택" />

      <Textarea label="설명" resize="Auto" maxLength={1000} showCharCount
        status={errors.desc ? 'Negative' : 'Normal'} />

      <Button variant="Solid" size="Large" type="submit">저장</Button>
    </form>
  );
};
```

## 9. 토스트/스낵바 알림

```tsx
import { Toast, Snackbar } from './components';

// 성공
<Toast variant="Positive">저장되었습니다</Toast>

// 에러
<Toast variant="Negative">저장에 실패했습니다. 다시 시도해주세요.</Toast>

// 액션 포함
<Snackbar heading="삭제됨" description="항목이 삭제되었습니다"
  action={{ label: '실행 취소', onClick: handleUndo }} duration={5000} />

// 경고
<Toast variant="Cautionary">저장 공간이 부족합니다</Toast>
```

## CSS 구조 패턴

### 기본 레이아웃
```css
@import './tokens/colors.css';
@import './tokens/semantic.css';
@import './tokens/typography.css';
@import './tokens/spacing.css';

.page {
  color: var(--semantic-label-normal);
  background: var(--semantic-bg-normal);
  font-family: var(--font-family);
}

.grid-3col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-responsive);
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.viewer-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
```

### 반응형 패턴
```css
@media (max-width: 768px) {
  .grid-3col { grid-template-columns: 1fr; }
  .dashboard-layout { grid-template-columns: 1fr; }
}
```
