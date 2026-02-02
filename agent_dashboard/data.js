const agentData = {
    workflows: {
        'ai-optimized-spec': {
            title: 'AI 최적화 사양 정의 (AI-Optimized Spec)',
            content: `---
description: AI 최적화 사양 정의 (AI-Optimized Spec) - 에이전트가 바로 구현 가능한 상세 사양 제작
---

이 워크플로우는 AI 코딩 에이전트(예: Cursor, Windsurf 등)가 모호함 없이 바로 코드를 작성할 수 있도록 고도로 정밀한 기술 사양서를 만드는 절차입니다.

### 실행 단계

1. **Decomposition (구조적 분해)**
2. **Blueprinting (기술 설계)**
3. **Verification (자가 검증 및 피드백)**
4. **Formatting (최종 출력)**`
        },
        'landing-page-production': {
            title: '랜딩페이지 생산 워크플로우 (Landing Page Production)',
            content: `---
description: 랜딩페이지 생산 워크플로우 (Landing Page Production) - 조사부터 구현까지의 3단계 흐름
---

이 워크플로우는 시장 조사부터 실제 코드 구현까지, 고성능 랜딩페이지를 제작하는 전 과정을 정의합니다.

### 실행 단계

1. **1단계: 심층 조사 및 전략 수립**
2. **2단계: 콘텐츠 생성 및 최적화**
3. **3단계: 시각적 구현**`
        },
        'voice-to-backlog': {
            title: '보이스 투 백로그 (Voice-to-Backlog)',
            content: `---
description: 보이스 투 백로그 (Voice-to-Backlog) - 미팅 녹취록을 개발 티켓으로 자동 전환
---

이 워크플로우는 스테이크홀더와의 미팅이나 고객 인터뷰 녹음 데이터를 분석하여 즉시 실행 가능한 개발 티켓으로 변환하는 절차를 정의합니다.

### 실행 단계

1. **Perceive (인식)**
2. **Plan (계획)**
3. **Act: Drafting (PRD 작성)**
4. **Act: Decomposition (티켓 분해)**
5. **Learn/Review (검토 및 승인)**`
        },
        'market-adaptive-roadmapping': {
            title: '시장 적응형 로드맵 관리 (Market-Adaptive Roadmapping)',
            content: `---
description: 시장 적응형 로드맵 관리 (Market-Adaptive Roadmapping) - 외부 변화를 감지하여 로드맵 지속 보정
---

외부 변화를 감지하여 제품의 방향성을 지속적으로 보정합니다.

### 실행 단계

1. **Monitor (상시 모니터링)**
2. **Analyze (영향력 분석)**
3. **Propose (조정 제안)**
4. **Report (전략 보고)**`
        }
    },
    skills: {
        'discovery-synthesis': {
            title: '인사이트 추출 및 정성 분석 (Discovery Synthesis)',
            content: `---
name: 인사이트 추출 및 정성 분석 (Discovery Synthesis)
---
비정형 데이터에서 기획의 근거가 되는 사용자 인사이트를 도출합니다.`
        },
        'technical-blueprinting': {
            title: '데이터 모델 및 API 설계 (Technical Blueprinting)',
            content: `---
name: 데이터 모델 및 API 설계 (Technical Blueprinting)
---
데이터베이스 스키마 정의 및 API 명세서 설계 보조.`
        },
        'priority-scoring': {
            title: '로드맵 및 우선순위 최적화 (Priority Scoring)',
            content: `---
name: 로드맵 및 우선순위 최적화 (Priority Scoring)
---
RICE 모델 기반 우선순위 산정 및 로드맵 시각화.`
        },
        'risk-edge-case': {
            title: '리스크 평가 및 에지 케이스 감지 (Risk & Edge-case Detection)',
            content: `---
name: 리스크 평가 및 에지 케이스 감지 (Risk & Edge-case Detection)
---
논리적 오류 및 예외 상황(Edge Case) 식별.`
        },
        'output-versioning-guide': {
            title: '기획 산출물 및 버전 관리 가이드 (Output & Versioning Guide)',
            content: `---
name: 기획 산출물 및 버전 관리 가이드 (Output & Versioning Guide)
---
표준 산출물 폴더 구조 및 버전 명명 규칙 정의.`
        },
        'requirement-drafting': {
            title: 'PRD 및 사용자 스토리 작성 (Requirement Drafting)',
            content: `---
name: PRD 및 사용자 스토리 작성 (Requirement Drafting)
---
요구사항 정의서와 사용자 스토리 및 AC 도출.`
        },
        'market-intelligence': {
            title: '시장 및 경쟁사 모니터링 (Market Intelligence)',
            content: `---
name: 시장 및 경쟁사 모니터링 (Market Intelligence)
---
경쟁사 업데이트 및 시장 트렌드 상시 감시.`
        },
        'industry-analysis': {
            title: '1.0 산업 및 시장조사 (Industry Analysis)',
            content: `---
name: 1.0 산업 및 시장조사 (Industry & Market Research)
---
벨류체인, 주요 플레이어, 히스토리, 미래 전략 분석.`
        },
        'deep-research': {
            title: '1.1 심층 조사 및 전략 (Deep Research)',
            content: `---
name: 1.1 Deep Research Prompt
---
타겟 고객 페르소나 및 페인 포인트 심층 조사.`
        },
        'generation-logic': {
            title: '1.2 랜딩페이지 기획안 도출 (LP Generation)',
            content: `---
name: 1.2 Landing Page Generation Prompt
---
보강된 8단계 설득 구조에 따른 기획안 작성.`
        },
        'copy-optimization': {
            title: '2.1 카피 최적화 (Copy Optimization)',
            content: `---
name: 2.1 Copy Optimization Prompt
---
이점 중심 및 정성적 카피라이팅 최적화.`
        },
        'visual-style-guide': {
            title: '2.2 비주얼 스타일 가이드 (Visual Style Guide)',
            content: `---
name: 2.2 Visual Style Guide Prompt
---
컬러 팔레트 및 타이포그래피 가이드 정의.`
        },
        'ab-testing-variations': {
            title: '2.3 A/B 테스트 변형 안 (A/B Testing Variations)',
            content: `---
name: 2.3 A/B Testing Variations Prompt
---
서로 다른 소구점의 A/B 테스트 안 생성.`
        },
        'structure-template': {
            title: '2.4 구조 템플릿 (Structure Template)',
            content: `---
name: 2.4 Landing Page Structure Template
---
고성능 설득 레이아웃 표준 구조 정의.`
        },
        'mockup-template': {
            title: '3.1 목업 템플릿 (Mockup Template)',
            content: `---
name: 3.1 Mockup Template
---
HTML/CSS 기반 레이아웃 목업 생성.`
        },
        'implementation-prompt': {
            title: '3.2 최종 구현 프롬프트 (Implementation Prompt)',
            content: `---
name: 3.2 Implementation Prompt
---
최종 기획안 기반 실배포용 코드 구현.`
        },
        'reference-analysis': {
            title: '1.3 레퍼런스 및 벤치마킹 분석 (Reference Analysis)',
            content: `---
name: 1.3 Reference Analysis
---
사용자가 제공한 섹션별 레퍼런스를 분석하여 최적의 디자인 패턴 도출.`
        }
    }
};
