---
description: 보이스 투 백로그 (Voice-to-Backlog) - 미팅 녹취록을 개발 티켓으로 자동 전환
---

이 워크플로우는 스테이크홀더와의 미팅이나 고객 인터뷰 녹음 데이터를 분석하여 즉시 실행 가능한 개발 티켓으로 변환하는 절차를 정의합니다.

### 실행 단계

1. **Perceive (인식)**
   - 입력된 미팅 녹취록이나 인터뷰 텍스트를 분석합니다.
   - 핵심 의제, 결정 사항, 그리고 논의된 요구사항을 추출합니다.

2. **Plan (계획)**
   - 인식된 내용을 바탕으로 PRD(제품 요구사항 정의서)의 어떤 섹션을 수정하거나 새로 작성해야 할지 계획을 수립합니다.
   - 기존 기능과의 충돌 여부를 사전에 검토합니다.

3. **Act: Drafting (PRD 작성)**
   - `requirement-drafting` 스킬을 사용하여 PRD 초안을 작성하거나 업데이트합니다.
   - 산출물은 `outputs/prds/` 폴더 내에 `{yyyy-mm-dd}_{feature_name}_prd.md` 형식으로 저장합니다.

4. **Act: Decomposition (티켓 분해)**
   - 업데이트된 PRD를 기반으로 구체적인 사용자 스토리(User Story)와 수락 기준(Acceptance Criteria)을 도출합니다.
   - 산출물은 프로젝트 폴더 내 `outputs/backlogs/`에 `{yyyy-mm-dd}_{feature_name}_backlog.md` 형식으로 저장합니다.

5. **Learn/Review (검토 및 승인)**
   - 생성된 티켓의 논리적 일관성과 상세도를 검토합니다.
   - 기획자에게 최종 결과물을 제시하고 피드백 및 승인을 요청하며, 승인된 최종본은 `_final` 접미사 또는 별도의 `release/` 폴더로 관리하여 버전 관리합니다.
