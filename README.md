# 케어팜 (CareFarm)

만성 신장질환(CKD) 환자를 위한 저칼륨·저인·무염 사과 쌀쿠키 브랜드 웹사이트.  
경북 못난이 사과를 원료로, 투석 환자의 간식 선택권을 넓힙니다.

> ENACTUS KNU PIC (Project Initiation Committee) — 케어팜 팀

---

## 페이지 구성

| 경로 | 내용 |
|------|------|
| `/` | 홈 — 문제 제기, 솔루션 흐름, 제품 미리보기, 임팩트 수치 |
| `/product` | 제품 — 투석 유형 필터, 성분 바(칼륨·나트륨·인), 성분 비교 표, 원산지 스토리 |
| `/impact` | 임팩트 — TBL(Social·Economic·Environmental) 카드, 사업 논리, 포지셔닝 맵, 검증 타임라인 |
| `/order` | 주문 — 출시 알림 신청, 판매 채널 안내, B2B 납품 문의 |

---

## 기술 스택

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — `@theme inline` 커스텀 토큰
- **Google Fonts** — Gowun Batang (헤딩) · Noto Sans KR (바디)
- **Jest 30** + @testing-library/react

## 디자인 토큰

| 토큰 | 값 | 용도 |
|------|----|------|
| `surface-base` | `#FAF6EF` | 페이지 배경 |
| `surface-card` | `#F5EDE0` | 카드 배경 |
| `surface-muted` | `#EEE0CC` | 섹션 구분 배경 |
| `text-primary` | `#1E1714` | 본문 텍스트 |
| `text-secondary` | `#5C4E43` | 보조 텍스트 |
| `coral` | `#EE7A65` | 주 강조색 (배경·아이콘·테두리 전용) |
| `apricot` | `#FAC080` | 보조 강조색 |
| `olive` | `#9EAE60` | 환경 강조색 |

강조색은 텍스트 색으로 단독 사용하지 않습니다.

---

## 로컬 실행

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # 프로덕션 빌드
npm test          # Jest 단위 테스트 (10개)
```

---

## 주요 컴포넌트

- `components/ui/NutrientBar` — 칼륨·나트륨 성분 막대 + 일반 과자 비교 토글
- `components/sections/product/DialysisFilter` — 혈액투석·복막투석·CKD 보존기 탭 필터
- `lib/dialysisFilter.ts` — 투석 유형별 제품 정렬 로직
- `lib/nutrientUtils.ts` — 성분 바 너비 계산 (`calcBarWidth`)

---

## 미확정 항목 (placeholder)

- 인(phosphorus) 정확한 수치 — 성분 검증 완료 후 업데이트
- 전문가 추천 문구 — 신장내과 의사·영양사 자문 확보 후 업데이트
- 출시 알림 폼 백엔드 — 현재 `mailto:` 폴백 사용
