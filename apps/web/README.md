# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

# Storybook 실행 & 웹앱 실행

```bash
# UI 패키지 빌드
yarn workspace packages/ui run build
# Storybook(문서/개발)
yarn workspace apps/storybook storybook
# 웹앱
yarn workspace apps/web dev
# 전체 설치 동기화
yarn
```

# Atomic Design + Monorepos + Design System

전세계 대규모 기술 기업들이 규모 확장성과 디자인 일관성으로 사용하는 방법론에 따라 설계

```bash
my-org/
├─ package.json
├─ tsconfig.base.json
├─ yarn.lock
├─ apps/
│ ├─ web/       # Vite 앱 (소비자)
│ └─ storybook/ # Storybook 앱 (디자인 시스템 문서)
└─ packages/
    └─ ui/      # 디자인 시스템 패키지 (Atomic Design)
        ├─ src/
        │ ├─ atoms/
        │ │   └─ Button/
        │ │   ├─ Button.tsx
        │ │   ├─ Button.stories.ts
        │ │   ├─ Button.styles.ts
        │ │   └─ index.ts
        │ ├─ molecules/
        │ ├─ organisms/
        │ ├─ templates/
        │ ├─ tokens/
        │ │   ├─ colors.ts
        │ │   └─ theme.ts
        │ └─ index.ts
        ├─ package.json
        ├─ tsconfig.json
        └─ tsup.config.ts
```
