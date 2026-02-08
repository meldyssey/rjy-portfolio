# 포트폴리오 웹사이트

Next.js 15와 TypeScript를 사용하여 제작한 개인 포트폴리오 웹사이트입니다.

> ⚠️ **참고사항**: `src/content` 폴더의 모든 내용은 데모용 가짜 데이터입니다. 실제 프로젝트나 경력 정보가 아닙니다.

## 주요 기능

- 🎨 **모던한 디자인**: Tailwind CSS를 활용한 반응형 디자인
- 📝 **MDX 기반 콘텐츠 관리**: 마크다운으로 프로젝트와 경력 정보를 쉽게 관리
- ⚡ **빠른 성능**: Next.js 15의 최신 기능 활용
- 🎯 **타입 안정성**: TypeScript로 작성된 타입 안전한 코드
- 🔍 **SEO 최적화**: 검색 엔진 최적화 적용
- 📱 **완벽한 반응형**: 모바일, 태블릿, 데스크톱 모든 환경 지원

## 기술 스택

### 프레임워크 & 라이브러리

- **Next.js 15.5.11** - React 프레임워크
- **React 19.1.0** - UI 라이브러리
- **TypeScript 5** - 타입 시스템

### 스타일링

- **Tailwind CSS 4** - 유틸리티 우선 CSS 프레임워크
- **@tailwindcss/typography** - 타이포그래피 플러그인

### 콘텐츠 관리

- **gray-matter** - Frontmatter 파싱
- **next-mdx-remote** - MDX 렌더링
- **marked** - 마크다운 파싱

### UI 컴포넌트

- **lucide-react** - 아이콘 라이브러리

## 프로젝트 구조

```
rjy-portfolio/
├── public/                    # 정적 파일
│   ├── fonts/                # 폰트 파일
│   ├── icons/                # 아이콘 파일
│   ├── experience/           # 경력 관련 이미지
│   └── project/              # 프로젝트 관련 이미지
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── (with-header)/   # 헤더가 있는 레이아웃
│   │   ├── (with-backbutton)/ # 뒤로가기 버튼이 있는 레이아웃
│   │   └── layout.tsx       # 루트 레이아웃
│   ├── components/          # React 컴포넌트
│   │   ├── Hero.tsx        # 히어로 섹션
│   │   ├── Skills.tsx      # 기술 스택 섹션
│   │   ├── Experiences.tsx # 경력 섹션
│   │   ├── Projects.tsx    # 프로젝트 섹션
│   │   ├── Header.tsx      # 헤더
│   │   ├── Footer.tsx      # 푸터
│   │   ├── BackButton.tsx  # 뒤로가기 버튼
│   │   └── ScrollToTop.tsx # 스크롤 탑 버튼
│   ├── content/             # MDX 콘텐츠 (⚠️ 가짜 데이터)
│   │   ├── experiences/    # 경력 MDX 파일
│   │   └── projects/       # 프로젝트 MDX 파일
│   ├── lib/                 # 유틸리티 함수
│   │   ├── mdx.ts          # MDX 파싱 함수
│   │   └── mdx-components.tsx # MDX 커스텀 컴포넌트
│   └── types.ts            # TypeScript 타입 정의
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 시작하기

### 필수 요구사항

- Node.js 20.x 이상
- npm, yarn, pnpm 또는 bun

### 설치

```bash
# 저장소 클론
git clone [repository-url]

# 디렉토리 이동
cd rjy-portfolio

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start
```

### 린트

```bash
npm run lint
```

## 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [MDX 공식 문서](https://mdxjs.com)
