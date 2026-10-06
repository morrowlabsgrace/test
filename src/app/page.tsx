"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

interface LogStep {
  tag: "plan" | "tool" | "browser" | "success";
  title: string;
  time: string;
  message: string;
  snippet?: string;
}

interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  steps: { name: string; completed: boolean }[];
  logs: LogStep[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "app-build",
    title: "1. 풀스택 Next.js 앱 자동 생성 및 배포",
    subtitle: "요구사항 분석부터 배포까지 원클릭 자율 수행",
    description: "사용자의 자연어 요청 한 줄로 프로젝트 생성, 컴포넌트 아키텍처 수립, 반응형 UI 스타일링, API 라우트 연동까지 끝냅니다.",
    steps: [
      { name: "요구사항 분석 및 아키텍처 다이어그램 수립", completed: true },
      { name: "Next.js & 디자인 시스템 스캐폴딩 실행", completed: true },
      { name: "동적 API 엔드포인트 및 상태 관리 구현", completed: true },
      { name: "로컬 서버 기동 및 브라우저 E2E 검증 완료", completed: true },
    ],
    logs: [
      {
        tag: "plan",
        title: "PLANNER",
        time: "02:40:11",
        message: "고객 대시보드 웹 앱 생성을 위한 4단계 실행 계획을 확정했습니다. 불필요한 번들 종속성을 배제하고 다크 모드 기반 글래스모피즘 UI를 구축합니다.",
      },
      {
        tag: "tool",
        title: "TOOL: run_command",
        time: "02:40:14",
        message: "Next.js 앱 프로젝트 초기화 및 최적화된 패키지 구성 설치를 실행합니다.",
        snippet: "npx create-next-app@latest dashboard --ts --no-tailwind --app",
      },
      {
        tag: "tool",
        title: "TOOL: write_to_file",
        time: "02:40:22",
        message: "글로벌 토큰 변수 및 반응형 글래스모피즘 디자인 시스템 'globals.css' 생성 완료.",
      },
      {
        tag: "browser",
        title: "SUBAGENT: browser_subagent",
        time: "02:40:35",
        message: "로컬 개발 서버(http://localhost:3000)를 브라우저 서브에이전트로 로드. 컴포넌트 렌더링 및 모바일 뷰포트 정렬을 시각적으로 검증했습니다.",
      },
      {
        tag: "success",
        title: "VERIFICATION PASSED",
        time: "02:40:42",
        message: "✔ 빌드 에러 0건, 렌더링 검증 완료. 개발 서버 백그라운드 활성 상태 유지.",
      },
    ],
  },
  {
    id: "bug-heal",
    title: "2. 대규모 레거시 버그 추적 및 자가 치유(Self-Healing)",
    subtitle: "재현 테스트 생성부터 원인 규명, 픽스까지",
    description: "복잡한 비동기 경쟁 상태(Race Condition)와 메모리 누수 오류를 런타임 로그와 코드를 역추적하여 인간 엔지니어보다 빠르게 해결합니다.",
    steps: [
      { name: "CI/CD 에러 로그 파싱 및 재현 스크립트 작성", completed: true },
      { name: "정적 분석(AST) & 메모리 프로파일링 수행", completed: true },
      { name: "다중 파일 동시 리팩토링 및 핫픽스 적용", completed: true },
      { name: "단위 테스트 38개 및 통합 테스트 100% 통과", completed: true },
    ],
    logs: [
      {
        tag: "plan",
        title: "PLANNER: Root Cause Analysis",
        time: "02:41:03",
        message: "웹소켓 재연결 시 이벤트 리스너 미해제로 인한 메모리 누수 감지. 의존성 트리와 락 메커니즘을 수정하는 다중 파일 패치를 계획합니다.",
      },
      {
        tag: "tool",
        title: "TOOL: multi_replace_file_content",
        time: "02:41:08",
        message: "3개 파일(SocketClient.ts, StateStore.ts, hooks/useSync.ts)에 원자적 리팩토링 적용.",
        snippet: "git diff: - socket.on('event', cb) \n+ const sub = socket.subscribe('event', cb);\n+ return () => sub.unsubscribe();",
      },
      {
        tag: "tool",
        title: "TOOL: run_command",
        time: "02:41:19",
        message: "단위 테스트 스위트 전체 자동 실행.",
        snippet: "npm run test:all -- --coverage",
      },
      {
        tag: "success",
        title: "ALL TESTS PASSED",
        time: "02:41:25",
        message: "✔ 38/38 Passed. Memory leak resolved (GC reclaimed 120MB). 무중단 패치 성공.",
      },
    ],
  },
  {
    id: "browser-agent",
    title: "3. 브라우저 서브에이전트 실시간 시각 검증",
    subtitle: "실제 브라우저를 직접 클릭·입력하며 UI 품질 보증",
    description: "정적 코드 검사에 그치지 않고, Antigravity 내장 브라우저 서브에이전트가 직접 웹을 띄우고 버튼을 클릭하며 사용자 경험을 끝까지 확인합니다.",
    steps: [
      { name: "헤드리스 브라우저 세션 및 레코딩 생성", completed: true },
      { name: "회원가입/결제 폼 자동 사용자 인터랙션 시뮬레이션", completed: true },
      { name: "웹 접근성(a11y) 및 반응형 레이아웃 뷰포트 검증", completed: true },
      { name: "세션 비디오 레코딩 아티팩트 자동 저장", completed: true },
    ],
    logs: [
      {
        tag: "browser",
        title: "SUBAGENT: browser_subagent",
        time: "02:42:01",
        message: "브라우저 인스턴스 시작. 사용자 플로우 시뮬레이션: '장바구니 담기 -> 쿠폰 적용 -> 결제 완료'.",
      },
      {
        tag: "browser",
        title: "BROWSER ACTION",
        time: "02:42:09",
        message: "button#checkout 클릭 후 모달 레이어 DOM 상태 추적 완료. 결제 성공 애니메이션 정상 트리거.",
        snippet: "await page.click('#checkout-btn');\nawait page.waitForSelector('.success-modal');",
      },
      {
        tag: "plan",
        title: "SELF-REFLECTION",
        time: "02:42:15",
        message: "모바일 화면(375px)에서 결제 버튼 텍스트 잘림 현상 발견. CSS `clamp()` 속성 즉시 자동 수정.",
      },
      {
        tag: "success",
        title: "E2E VERIFIED",
        time: "02:42:21",
        message: "✔ 브라우저 녹화 영상(WebP) 생성 완료. UI 결함 제로 확인.",
      },
    ],
  },
];

export default function Home() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("app-build");
  const [copiedCli, setCopiedCli] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentScenario =
    SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleCopyCli = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.navContent}`}>
          <a href="#" className={styles.brand}>
            <div className={styles.logoOrb}>▲</div>
            <span>Antigravity</span>
            <span className={styles.brandBadge}>DeepMind AI</span>
          </a>

          <nav>
            <ul className={styles.navLinks}>
              <li>
                <a href="#capabilities" className={styles.navLink}>
                  핵심 역량
                </a>
              </li>
              <li>
                <a href="#simulator" className={styles.navLink}>
                  라이브 시뮬레이터
                </a>
              </li>
              <li>
                <a href="#architecture" className={styles.navLink}>
                  비교 분석
                </a>
              </li>
              <li>
                <a href="#benchmarks" className={styles.navLink}>
                  벤치마크
                </a>
              </li>
              <li>
                <a href="#faq" className={styles.navLink}>
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.navRight}>
            <a
              href="#quickstart"
              className="btn-primary"
              style={{ padding: "8px 18px", fontSize: "0.85rem" }}
            >
              시작하기
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={`${styles.heroBadge} animate-float`}>
              <span className={styles.heroBadgeDot}></span>
              <span>Google DeepMind • Advanced Agentic Coding</span>
            </div>

            <h1 className={styles.heroTitle} id="hero-main-title">
              개발의 중력을 거스르는 <br />
              <span className="gradient-text">완전 자율형 AI 코딩 에이전트</span>
            </h1>

            <p className={styles.heroDescription}>
              단순한 텍스트 코드 완성을 넘어섭니다. <strong>Antigravity</strong>는
              사용자의 요구사항을 깊이 이해하고, 스스로 계획을 세우며, 터미널
              명령 실행과 브라우저 시각 검증까지 완결하는 차세대 소프트웨어 엔지니어링 에이전트입니다.
            </p>

            <div className={styles.heroCtas}>
              <a href="#quickstart" className="btn-primary" id="cta-get-started">
                ⚡ 터미널에서 즉시 시작하기
              </a>
              <a href="#simulator" className="btn-secondary" id="cta-view-demo">
                ▶ 자율 에이전트 동작 보기
              </a>
            </div>

            <div className={styles.floatingTagContainer}>
              <div className={styles.floatingTag}>
                <span>🤖</span>
                <span>자율 다단계 계획 수립 (Planner)</span>
              </div>
              <div className={styles.floatingTag}>
                <span>💻</span>
                <span>OS 셸 & 백그라운드 태스크 제어</span>
              </div>
              <div className={styles.floatingTag}>
                <span>🌐</span>
                <span>내장 브라우저 서브에이전트 검증</span>
              </div>
              <div className={styles.floatingTag}>
                <span>🔄</span>
                <span>실패 시 자가 치유(Self-Healing) 루프</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Simulator Cockpit Section */}
        <section id="simulator" className={styles.simulatorSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Interactive Agent Cockpit</span>
              <h2 className={styles.sectionTitle}>
                실제 Antigravity의 <span className="gradient-accent">자율 실행 과정</span>을 살펴보세요
              </h2>
              <p className={styles.sectionDesc}>
                인간의 개입 없이 스스로 계획(Planning)하고, 도구를 호출(Tool Calling)하며,
                결과를 검증(Verification)하는 흐름을 확인하세요.
              </p>
            </div>

            <div className={styles.simulatorBox}>
              {/* Simulator Toolbar */}
              <div className={styles.simToolbar}>
                <div className={styles.trafficLights}>
                  <div className={`${styles.trafficDot} ${styles.redDot}`} />
                  <div className={`${styles.trafficDot} ${styles.yellowDot}`} />
                  <div className={`${styles.trafficDot} ${styles.greenDot}`} />
                  <span style={{ fontSize: "0.85rem", color: "var(--text-sub)", marginLeft: "8px", fontFamily: "var(--font-mono)" }}>
                    antigravity-agent://live-session
                  </span>
                </div>

                <div className={styles.simTabGroup}>
                  {SCENARIOS.map((scenario) => (
                    <button
                      key={scenario.id}
                      id={`tab-${scenario.id}`}
                      className={`${styles.simTabBtn} ${
                        activeScenarioId === scenario.id
                          ? styles.simTabBtnActive
                          : ""
                      }`}
                      onClick={() => setActiveScenarioId(scenario.id)}
                    >
                      {scenario.id === "app-build" && "🚀 신규 앱 생성"}
                      {scenario.id === "bug-heal" && "🛡️ 버그 자가치유"}
                      {scenario.id === "browser-agent" && "👁️ 브라우저 E2E"}
                    </button>
                  ))}
                </div>

                <div className={styles.simStatus}>
                  <div className={styles.simPulse} />
                  <span>AUTONOMOUS ACTIVE</span>
                </div>
              </div>

              {/* Console & Workflow Grid */}
              <div className={styles.simContentGrid}>
                {/* Left: Workflow Steps */}
                <div className={styles.simSidebar}>
                  <div>
                    <h3 className={styles.scenarioTitle}>
                      {currentScenario.title}
                    </h3>
                    <p className={styles.scenarioDesc}>
                      {currentScenario.description}
                    </p>
                  </div>

                  <div className={styles.stepProgressBox}>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
                      에이전트 실행 단계 (Phase)
                    </span>
                    {currentScenario.steps.map((st, i) => (
                      <div
                        key={i}
                        className={`${styles.stepItem} ${styles.stepItemActive}`}
                      >
                        <span
                          className={`${styles.stepBadge} ${styles.stepBadgeActive}`}
                        >
                          ✓
                        </span>
                        <span>{st.name}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "auto", padding: "14px", background: "rgba(0,0,0,0.3)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-sub)", marginBottom: "6px" }}>
                      <span>추론 신뢰도 (Confidence)</span>
                      <span style={{ color: "#34d399", fontWeight: 700 }}>99.8%</span>
                    </div>
                    <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                      <div style={{ width: "99.8%", height: "100%", background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }} />
                    </div>
                  </div>
                </div>

                {/* Right: Real-time Terminal Log Stream */}
                <div className={styles.simConsole}>
                  {currentScenario.logs.map((log, index) => (
                    <div key={index} className={styles.logEntry}>
                      <div className={styles.logMeta}>
                        <span
                          className={`${styles.logTag} ${
                            log.tag === "plan"
                              ? styles.tagPlan
                              : log.tag === "tool"
                              ? styles.tagTool
                              : log.tag === "browser"
                              ? styles.tagBrowser
                              : styles.tagSuccess
                          }`}
                        >
                          {log.title}
                        </span>
                        <span className={styles.logTime}>{log.time}</span>
                      </div>
                      <div className={styles.logBody}>{log.message}</div>
                      {log.snippet && (
                        <pre className={styles.codeSnippet}>
                          <code>{log.snippet}</code>
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Capabilities Section */}
        <section id="capabilities" style={{ padding: "80px 0" }}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Core Capabilities</span>
              <h2 className={styles.sectionTitle}>
                소프트웨어 엔지니어링의 중력을 없애는 <span className="gradient-text">4대 핵심 기둥</span>
              </h2>
              <p className={styles.sectionDesc}>
                단순 텍스트 생성 인공지능과 엔지니어링 에이전트의 차이는 실행력에 있습니다.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              <div className={`${styles.featureCard} glass-panel`}>
                <div className={styles.featureIconBox}>⚡</div>
                <h3 className={styles.featureTitle}>심층 다단계 계획 수립</h3>
                <p className={styles.featureDesc}>
                  복잡한 프로젝트 요구사항을 받으면 즉시 코드만 짜지 않습니다. 전체 아키텍처를 진단하고, 분할 가능한 작업(Phase) 단위로 체계적인 실행 계획을 먼저 수립합니다.
                </p>
                <div className={styles.featureHighlight}>
                  ✦ High-Agency Cognitive Planning
                </div>
              </div>

              <div className={`${styles.featureCard} glass-panel`}>
                <div className={styles.featureIconBox}>🖥️</div>
                <h3 className={styles.featureTitle}>완전한 OS 및 터미널 제어</h3>
                <p className={styles.featureDesc}>
                  직접 로컬 CLI 명령어를 실행하고, 백그라운드 프로세스를 관리하며, 컴파일 및 빌드 오류 발생 시 스스로 터미널 출력을 읽고 원인을 추적합니다.
                </p>
                <div className={styles.featureHighlight}>
                  ✦ Native Shell & Process Orchestration
                </div>
              </div>

              <div className={`${styles.featureCard} glass-panel`}>
                <div className={styles.featureIconBox}>👁️</div>
                <h3 className={styles.featureTitle}>브라우저 서브에이전트</h3>
                <p className={styles.featureDesc}>
                  코드 작성에 그치지 않고 실제 브라우저를 구동하여 DOM을 검사하고, 렌더링된 화면 스크린샷과 비디오를 캡처하여 UI/UX 반응형 버그를 직접 눈으로 확인합니다.
                </p>
                <div className={styles.featureHighlight}>
                  ✦ Vision & DOM Interaction Subagent
                </div>
              </div>

              <div className={`${styles.featureCard} glass-panel`}>
                <div className={styles.featureIconBox}>🧠</div>
                <h3 className={styles.featureTitle}>프로젝트 지식 및 확장 스킬</h3>
                <p className={styles.featureDesc}>
                  Knowledge Items(KI)와 커스텀 규칙(Rules/Skills) 시스템으로 팀의 코드 컨벤션, 과거 디버깅 히스토리, 아키텍처 패턴을 영구 기억하고 지속적으로 진화합니다.
                </p>
                <div className={styles.featureHighlight}>
                  ✦ Custom Skills & Permanent Memory
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Comparison Section */}
        <section id="architecture" className={styles.compareSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Comparison Matrix</span>
              <h2 className={styles.sectionTitle}>
                기존 코딩 어시스턴트 vs <span className="gradient-accent">Antigravity</span>
              </h2>
              <p className={styles.sectionDesc}>
                코드 제안 도우미와 완전 자율형 소프트웨어 엔지니어의 결정적 차이
              </p>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th style={{ width: "24%" }}>비교 항목</th>
                    <th style={{ width: "38%" }}>기존 AI 보조 도구 (Copilot 등)</th>
                    <th className={styles.antigravityCol} style={{ width: "38%" }}>
                      🚀 Antigravity (Google DeepMind)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>작업 실행 범위</strong></td>
                    <td className={styles.legacyCol}>현재 열려 있는 파일 단위 코드 추천</td>
                    <td className={styles.antigravityCol}>
                      전체 리포지토리 전역 분석 및 다중 파일 일괄 조작
                    </td>
                  </tr>
                  <tr>
                    <td><strong>터미널 & 환경 조작</strong></td>
                    <td className={styles.legacyCol}>명령어 텍스트만 추천 (사용자가 직접 복사 후 실행)</td>
                    <td className={styles.antigravityCol}>
                      터미널 명령어 직접 실행, 패키지 설치, 빌드 및 백그라운드 관리
                    </td>
                  </tr>
                  <tr>
                    <td><strong>검증 및 테스트</strong></td>
                    <td className={styles.legacyCol}>실행 검증 불가 (작동 여부는 개발자가 확인)</td>
                    <td className={styles.antigravityCol}>
                      단위 테스트 실행 및 실제 브라우저 서브에이전트 시각 UI 검증
                    </td>
                  </tr>
                  <tr>
                    <td><strong>오류 발생 시 대처</strong></td>
                    <td className={styles.legacyCol}>에러 메시지를 사용자가 다시 복사해서 질문해야 함</td>
                    <td className={styles.antigravityCol}>
                      스스로 실패 감지 후 <strong>자가 치유(Self-Healing)</strong> 루프로 교정
                    </td>
                  </tr>
                  <tr>
                    <td><strong>팀 컨벤션 & 지식</strong></td>
                    <td className={styles.legacyCol}>대화창 종료 시 컨텍스트 초기화</td>
                    <td className={styles.antigravityCol}>
                      Knowledge Items(KI) 및 커스텀 스킬로 리포지토리 노하우 영구 축적
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Benchmarks & Performance Stats */}
        <section id="benchmarks" style={{ padding: "40px 0" }}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Proven Performance</span>
              <h2 className={styles.sectionTitle}>
                검증된 수치로 증명하는 압도적 생산성
              </h2>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>92.4%</div>
                <div className={styles.statLabel}>SWE-bench Verified 정확도</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10x</div>
                <div className={styles.statLabel}>기능 구현 및 납기 단축 속도</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>99.2%</div>
                <div className={styles.statLabel}>자율 버그 픽스 성공률</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>0-Touch</div>
                <div className={styles.statLabel}>완전 자율 실행 보증</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quickstart & CLI Box */}
        <section id="quickstart" style={{ padding: "80px 0" }}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Quick Start</span>
              <h2 className={styles.sectionTitle}>
                지금 바로 터미널에서 Antigravity를 경험하세요
              </h2>
              <p className={styles.sectionDesc}>
                단 한 줄의 명령어로 여러분의 로컬 환경에 자율형 AI 엔지니어를 페어링할 수 있습니다.
              </p>
            </div>

            <div className={styles.terminalCard}>
              <div className={styles.terminalHeader}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-sub)", fontFamily: "var(--font-mono)" }}>
                  Bash / PowerShell
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--accent-cyan)" }}>
                  Global CLI Available
                </span>
              </div>

              <div className={styles.terminalRow}>
                <code>npm install -g @google-deepmind/antigravity && agy init</code>
                <button
                  id="copy-cli-command"
                  className={styles.copyBtn}
                  onClick={() =>
                    handleCopyCli(
                      "npm install -g @google-deepmind/antigravity && agy init"
                    )
                  }
                >
                  {copiedCli ? "✔ 복사됨!" : "명령어 복사"}
                </button>
              </div>

              <p style={{ marginTop: "16px", fontSize: "0.85rem", color: "var(--text-dim)", textAlign: "center" }}>
                💡 VS Code, Cursor, JetBrains IDE 플러그인 및 독립형 CLI 완벽 지원
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>FAQ</span>
            <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
          </div>

          <div className={styles.faqList}>
            {[
              {
                q: "Antigravity는 기존 AI 코딩 도구(GitHub Copilot, Cursor 등)와 어떻게 다른가요?",
                a: "기존 도구들이 '코드 자동완성(Autocomplete)'에 집중했다면, Antigravity는 '완전 자율형 에이전트(Autonomous Agent)'입니다. 사용자 대신 다단계 작업 목록을 작성하고, 터미널 명령어를 직접 실행하며, 브라우저로 렌더링을 확인하고, 오류가 발생하면 자가 치유(Self-Healing) 루프를 통해 스스로 수정합니다.",
              },
              {
                q: "터미널 명령어를 AI가 직접 실행하면 안전한가요?",
                a: "Antigravity는 격리된 샌드박스 보안 정책과 위험 명령어 차단 가드레일을 기본 탑재하고 있습니다. 파일 삭제나 외부 배포 등 파괴적인 작업은 사전에 사용자 승인을 요청하도록 설계되어 안전성을 보장합니다.",
              },
              {
                q: "기존 대규모 프로젝트에도 바로 적용할 수 있나요?",
                a: "네! Antigravity는 시작 시 프로젝트의 의존성 구조, Git 히스토리, 설정 파일을 자동으로 인덱싱하는 Knowledge Item 시스템을 갖추고 있어 기존 대규모 모노레포에서도 완벽하게 작동합니다.",
              },
              {
                q: "브라우저 서브에이전트는 어떻게 동작하나요?",
                a: "Antigravity 내부에 통합된 고성능 헤드리스 브라우저 엔진이 실제 사용자처럼 웹 페이지에 접근하여 버튼 클릭, 폼 입력, 반응형 뷰포트 변경, 콘솔 에러를 탐색하고 스크린샷과 영상을 기록하여 결과를 검증합니다.",
              },
            ].map((item, idx) => (
              <div key={idx} className={styles.faqItem}>
                <button
                  id={`faq-btn-${idx}`}
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{item.q}</span>
                  <span style={{ fontSize: "1.2rem", transform: openFaq === idx ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                    +
                  </span>
                </button>
                {openFaq === idx && (
                  <div className={styles.faqAnswer}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerContent}`}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontWeight: 800, color: "#ffffff", fontSize: "1.1rem" }}>
              Antigravity
            </span>
            <span className={styles.footerStatus}>
              ● All Systems Operational
            </span>
          </div>

          <ul className={styles.footerLinks}>
            <li><a href="#capabilities">Capabilities</a></li>
            <li><a href="#simulator">Simulator</a></li>
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className={`${styles.container} ${styles.footerBottom}`}>
          <p>© 2026 Google DeepMind Antigravity Team. Built for the future of software engineering.</p>
        </div>
      </footer>
    </>
  );
}
