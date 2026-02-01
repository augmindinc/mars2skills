---
name: 기획 산출물 및 버전 관리 가이드 (Output & Versioning Guide)
description: 모든 기획 산출물의 저장 위치와 버전 관리 체계를 정의합니다. 이 가이드는 모든 스킬과 워크플로우에 우선하여 적용됩니다.
---

### 📂 표준 디렉토리 구조
모든 산출물은 프로젝트 루트의 `outputs/` 폴더 하위에 목적별로 분류하여 저장합니다.

- `outputs/prds/`: 제품 요구사항 정의서 (PRD)
- `outputs/backlogs/`: 개발 티켓 및 사용자 스토리
- `outputs/specs/`: 기술 사양서 및 `.cursorrules`
- `outputs/roadmaps/`: 제품 로드맵
- `outputs/market-reports/`: 시장 및 경쟁 분석 보고서
- `outputs/blueprints/`: 데이터 모델 및 필드 정의서

### 🏷 버전 관리 규칙
1. **날짜 기반 관리 (Reports/Roadmaps)**:
   - 파일명: `{yyyy-mm-dd}_{title}.md`
   - 예: `2024-02-01_competitor_analysis.md`

2. **버전 번호 기반 관리 (Specs/Blueprints)**:
   - 파일명: `v{N}_{title}.md`
   - 예: `v1_user_api_spec.md`, `v2_user_api_spec.md`
   - 주요 변경 사항이 있을 때마다 `N`을 1씩 상향합니다.

3. **상태 기반 관리 (PRDs/Backlogs)**:
   - 초안: `{yyyy-mm-dd}_{title}_draft.md`
   - 최종 승인본: `outputs/release/{yyyy-mm-dd}_{title}_final.md`

### 🔄 버전 관리 목적
- **이력 추적**: 기획 의도의 변화 과정을 한눈에 파악할 수 있도록 합니다.
- **충돌 방지**: 여러 에이전트나 기획자가 협업할 때 최신 버전을 명확히 식별합니다.
- **AI 최적화**: 코딩 에이전트가 가장 최신의 `final` 혹은 최신 버전 스펙을 참조하도록 유도합니다.
