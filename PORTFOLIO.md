# Portfolio — Abrar Ahmad, Full-Stack AI Engineer

**GitHub:** [github.com/Abrar5510](https://github.com/Abrar5510)
**LinkedIn:** [linkedin.com/in/Abrar5510](https://linkedin.com/in/Abrar5510)
**Location:** Islamabad, Pakistan

---

## Summary

AI engineer building agent systems, applied ML, and the infrastructure that makes them trustworthy: sandboxed execution, verification against ground truth, and constrained agent-to-agent protocols. Earlier work covers SaaS platforms, mobile apps with on-device computer vision, and game development.

## Experience

**WWF Pakistan** — Co-Leader, Eco Internship *(July 2025 – August 2025)*

## Core Skills

| Category | Technologies |
|---|---|
| **AI & ML** | LLM integration & prompt engineering, RAG pipelines, multi-agent orchestration (LangGraph), LLM fine-tuning (LoRA/QLoRA on ROCm/CUDA), transformers (BERT, Qwen, Whisper, ViT), computer vision (YOLO, OpenCV, MediaPipe, FaceNet), time-series & classical ML (scikit-learn, Prophet, XGBoost), on-device ML (TensorFlow Lite, Core ML) |
| **Full-Stack** | Next.js / React 18–19, TypeScript, Tailwind / shadcn-ui, FastAPI / Express / Flask, PostgreSQL / Prisma / SQLite, Redis, Supabase, WebSockets, REST API design |
| **Mobile** | React Native / Expo, SwiftUI & Objective-C++ (iOS/macOS/watchOS), Kotlin/Compose (Android), ARKit / ARCore, C++17 shared cores |
| **Games & 3D** | Unreal Engine 5 (C++), Unity (WebGL), Three.js, C++20 game engine architecture (ECS, audio, rendering), path tracing & PBR rendering from scratch, Blender pipelines |
| **Blockchain & Security** | Solidity & Hardhat (upgradeable proxies, stablecoins), Web3 identity (Coral Protocol), DeFi risk systems, SOC automation & vulnerability remediation, AML/KYC compliance, MITRE ATT&CK |
| **DevOps** | Docker & Docker Compose, Kubernetes, Kafka, Turborepo/pnpm monorepos, microservices, multi-cloud deploys (Vercel, Railway, Fly, Render), CI/CD (GitHub Actions) |

Linked projects are public repositories. Projects without a link are in private repositories.

---

## Recent Work (Sept–Nov 2026)

### [Triage](https://github.com/Abrar5510/triage): Sandboxed Verification of Bug Bounty Reports *(Vultr Agent Rush hackathon)*
Built an agent that reproduces or rejects each bug bounty report before a person reads it. It grounds each claim in the real library source, rebuilds the affected version in a disposable sandbox, and runs the submitted proof of concept against vulnerable and patched builds. Hostile PoCs are contained by canary credentials, blocked network access, and PID, memory, and wall-clock caps. Reproduced CVE-2024-4340 in 53 s and rejected a fabricated "CVSS 9.8 RCE" without running anything.
**Tech:** Python, Docker, Vultr

### [Rashomon](https://github.com/Abrar5510/rashomon): Unit Tests for Readability *(Bob IDE hackathon)*
Five isolated model readers predict what a function returns, and the interpreter decides who was right. Misread rates are scored with 95% Wilson intervals, so a single bad reader can't flag a function. Rewrites are checked on held-out probes, and a PR gate reports when a change made code harder to read. Live at [rashomon-iota.vercel.app](https://rashomon-iota.vercel.app).
**Tech:** Python, Anthropic / OpenAI / Gemini APIs, GitHub Actions

### [Between](https://github.com/Abrar5510/between) and [between-protocol](https://github.com/Abrar5510/between-protocol): Agent-to-Agent Negotiation Between Households *(Amazon Alexa+ hackathon)*
Household assistants negotiate childcare cover with each other and return one proposal for both families to approve. Each household runs its own MCP server, and only signed, schema-validated offers cross between them. The wire protocol is published as a standalone package: a strict Zod schema, Ed25519 signatures over the raw bytes, expiry and clock-skew checks, and a pure state machine that caps counter-offers.
**Tech:** TypeScript, MCP (with MCP App UI), Zod, Ed25519, SQLite

### [Shopfront MCP](https://github.com/Abrar5510/shopfront-mcp): Seller-Side Agentic Commerce
Lets any small shop be found and bought from by AI assistants. Gemini writes agent-readable listings from raw merchant notes, each shop gets its own MCP server (search, Q&A, checkout), and payment runs through PayPal with server-side amount checks. The dashboard shows the questions agents asked that the listings couldn't answer. Live at [shopfront-mcp.vercel.app](https://shopfront-mcp.vercel.app).
**Tech:** Node.js, MCP (Streamable HTTP), Gemini, PayPal JS SDK

### [Bimanual Dinner-Table Agent](https://github.com/Abrar5510/busboy): Language-Driven Dual-Arm Manipulation
Two simulated SO-101 arms set a table from natural-language commands. A Qwen3-1.7B INT4 planner on OpenVINO GenAI (JSON-schema constrained, with a critic) produces a plan for both arms. IK and OMPL skills carry it out, and a camera checks every step and triggers a re-plan on failure. Completed 56/60 held-out episodes and 45/50 free-form commands. SmolVLA and ACT baselines were trained on expert demonstrations and exported to OpenVINO in f32 and INT8, with parity checks.
**Tech:** MuJoCo, OpenVINO, LeRobot, SmolVLA, mink, OMPL

### [Lunar Horizon](https://github.com/Abrar5510/lunar-horizon): Illumination and Communications Analysis for the Lunar South Pole
Computes sunlight, solar power, Direct-to-Earth visibility, and DSN coverage for any site near the lunar south pole. Horizon masks are ray-marched from NASA LOLA elevation data, and Sun and Earth positions come from SPICE (DE440). Validated against JPL Horizons to better than 0.0001°. A C++ port of the science core matches the Python reference to about 5e-6°, and an Unreal Engine 5 viewer is in progress.
**Tech:** Python, C++, NAIF SPICE, Unreal Engine 5

### [86 It](https://github.com/Abrar5510/86-it): Voice Control for Restaurant Kitchens
Cooks run the kitchen by voice ("86 salmon", "fire 12", "all day fries"), and every screen updates in real time: the kitchen display, front of house, and online menu. A deterministic command grammar acts on the final transcript straight away, while the voice agent handles confirmations and anything unmatched. Includes a protocol-accurate mock server and an eval harness.
**Tech:** AssemblyAI Voice Agent API, Cloudflare Workers + Durable Objects, plain JavaScript

### [Show It Once](https://github.com/Abrar5510/Nebius): One Phone Demonstration to Robot Skill *(Nebius × NVIDIA hackathon)*
A ten-stage pipeline that turns one phone video into a robot skill: task spec, digital twin, object-centric motion extraction, retargeting, simulation checks, synthetic data, and a GR00T N1.6 LoRA. Phase 1 (orchestrator, job store, artifact storage, dashboard, 60 tests) is complete, and Nemotron calls are live. The GPU stages are still in development.
**Tech:** Python, NVIDIA Nemotron / Cosmos / GR00T, Nebius

### Smaller builds
- **[pj](https://github.com/Abrar5510/pj):** a local-first task tracker for people and AI agents: CLI, MCP server, and web UI over plain-markdown `STATE.md` files.
- **[The Promise Ledger](https://github.com/Abrar5510/promise-ledger)** *(Affinda AI Innovation Challenge)*: extracts every commitment from email threads, each backed by a verbatim quote, and flags conflicts with plain rule-based checks.

---

## AI & LLM Systems

### [Doctor-Ai](https://github.com/Abrar5510/Doctor-Ai) — AI Medical Diagnostic Support System
Built a symptom-to-diagnosis platform that ranks differential diagnoses, including rare diseases via HPO ontology mapping, using vector similarity search over medical knowledge bases.
**Tech:** FastAPI, Qdrant, BioBERT/PubMedBERT, React 18, multi-cloud deployment (Vercel/Railway/Fly/Render)

### Edu-Ai — AI School Learning Platform
Developed a four-portal platform (student/teacher/parent/admin) with an AI tutor, automated lesson and assessment generation, and auto-grading, behind a pluggable LLM provider layer supporting Ollama, vLLM, OpenAI, Anthropic, and Azure.
**Tech:** FastAPI, PostgreSQL, React, JWT/RBAC, Docker

### [CHEX](https://github.com/Abrar5510/CHEX) — LLM Fine-Tuning for Legal QA with Hallucination Control
Fine-tuned Qwen3.5-9B with 4-bit LoRA (NF4) on AMD MI300X/ROCm, adding calibrated uncertainty labels to reduce hallucination in legal question-answering, with a full MLOps pipeline from synthetic data generation through benchmark evaluation.
**Tech:** LoRA/QLoRA, Transformers, ROCm, Gradio

### Chaos-Monkey — Multi-Agent AI Crisis War Room *(Hackathon)*
Designed a director agent that delegates to parallel PR, Legal, Finance, and Ops specialist agents, synthesizing a unified response plan under a 90-second SLA.
**Tech:** FastAPI, asyncio/WebSockets, React 18, BM25 RAG, Supabase

### VulnGuard — Multi-Agent Vulnerability Remediation *(Hackathon)*
Built an agent pipeline (triage → plan → patch → adversarial security review → test → merge decision) for automated vulnerability remediation, capped at three iterations per issue.
**Tech:** LangGraph, Pydantic AI

### Sentiment-analysis — Real-Time Social Sentiment Platform
Combined BERT/RoBERTa and VADER models for aspect-based sentiment analysis across 100+ languages, streaming results into a live dashboard.
**Tech:** Kafka, TimescaleDB, React/D3

### Object-detection-api — High-Performance Detection API
Built a YOLOv8/Faster R-CNN detection API for real-time video processing, optimized with TensorRT and containerized for deployment.
**Tech:** TensorRT, Docker

### Truss — AI-Driven Integrated Construction Design Platform
Built an end-to-end construction design studio with an 8-stage workflow (Brief → Review → Site → Plans → Structure → Compliance → Budget → Build): AI-parsed project briefs, generative floor plans ranked by compliance/daylight/circulation, preliminary structural & MEP sizing, automated code-compliance checking across 9 jurisdictions, and tier-calibrated cost estimation with a contractor-ready Bill of Quantities, backed by a Python text-to-3D engine driving a live 3D viewer.
**Tech:** Next.js 14, React 18, Three.js/react-three-fiber, Zustand, Python (code3d), Ollama/Gemma 4, Supabase

### Atelier — AI Furniture Design Studio
Built an AI furniture design consultant with streaming chat, a live structured design spec kept in sync via tool calls (blueprint-style isometric drawing plus spec sheet), and one-click build-plan generation (cut list, bill of materials, tools, step-by-step instructions, cost estimate). Includes a guided room-scan wizard that reads wall photos and auto-arranges furniture with a deterministic layout engine enforcing walkways and door clearances.
**Tech:** Next.js 14, React 18, pluggable LLM layer (Google Gemini / Anthropic Claude), schema-constrained structured outputs

---

## Full-Stack & SaaS

### ComplianceDev — Enterprise Compliance Automation Platform
Built a microservices-based compliance platform (seven Fastify services plus a Python FastAPI document-generation service) with an OPA policy engine, in a Turborepo/pnpm monorepo with a Next.js 15 dashboard.
**Tech:** Kafka, MinIO, OPA, Next.js 15

### marketing-studio — AI Marketing Generation Platform (SaaS)
Built a product-to-assets pipeline generating strategy documents, SEO articles, social posts, video scripts, and cold outreach emails, with billing, Gmail OAuth, and HMAC-tracked email analytics.
**Tech:** Paddle billing, prompt evaluation pipeline

### buyer — Crypto Trading AI Agent
Built a local ML trading bot combining 20+ technical indicators with optional local-LLM decision-making, supporting paper and live trading with risk management controls.
**Tech:** CCXT, TA-Lib, Ollama

### Dashboard (MiniHQ) — Self-Hosted Dev-Server HQ
Built a self-hosted operations dashboard combining system monitoring, an AI chat interface, an in-browser terminal, a file browser/FTP client, and network controls.
**Tech:** node-pty, xterm.js, Ollama, Tailscale

---

## Mobile & On-Device AI

### Snapassist (FrameAI) — AI Photography Composition Assistant (iOS + Android)
Built an iOS/Android app for on-device scene classification, aesthetic scoring, and pose guidance with AR overlays, sharing a C++17 core across Swift/Objective-C++ and Kotlin/JNI.
**Tech:** Places365, NIMA-Lite, BlazePose, ARKit/ARCore

### Peak — Multi-Camera AI Sports Analysis (iOS + watchOS)
Built an iOS/watchOS app enabling peer-to-peer synchronized capture across multiple iPhones, with on-device pose tracking and Kalman filtering to generate live stats and replays.
**Tech:** MultipeerConnectivity, C++/Swift interop

### FitU — AI Fitness Companion (mobile + CV)
Built a React Native fitness app with real-time pose estimation, equipment detection, and rep counting / form correction, offline-first with Firebase sync.
**Tech:** MediaPipe, OpenCV, Expo

### Face_attendance — Face-Recognition Attendance System
Built a face-recognition attendance system with anti-spoofing liveness detection and multi-face support, including a web dashboard, mobile app, and analytics, containerized for AWS deployment.
**Tech:** FaceNet, MTCNN, Docker

### FinanceX — FinanceTracker Pro (mobile + ML)
Built a mobile finance tracker with SMS transaction parsing and LSTM/Prophet/XGBoost models for spend prediction and anomaly detection.
**Tech:** React Native, time-series ML

---

## Games & Graphics

### ApexVelocity — Racing Game, Unreal Engine 5.5 *(flagship)*
Built a racing game featuring 30 cars, 15 tracks, license tests, and championships, targeting iOS, Steam, and Windows, with a Blender asset pipeline (27 car models) and DLSS/FSR support.
**Tech:** UE5 C++/UnrealSharp, FMOD, GitHub Actions CI

### Engine — From-Scratch C++20 Game Engine
Built a game engine from scratch with an ECS architecture, an FMOD-style audio mixer with 3D spatialization, a render abstraction layer, and a script interpreter, with zero external dependencies.
**Tech:** C++20, MCP server integration for AI-assisted development

### Graphics Engines — LUMEN & AETHER — Zero-Dependency Rendering Engines
Built two rendering engines from first principles: LUMEN, a Monte Carlo path tracer in roughly 700 lines of pure Python with BVH acceleration and ACES tonemapping, and AETHER, a real-time PBR engine in JavaScript with shadows, bloom, and physics.
**Tech:** Rendering math, computational physics

### [Farm_navigator](https://github.com/Abrar5510/Farm_navigator) (FarmingSim) — Educational Farming Simulator, Unreal Engine
Built gameplay systems for an educational farming simulator, including a farming HUD, a drought/flood disaster manager, and sustainability reporting.
**Tech:** Unreal Engine, C++

### Meow (Apex Velocity Web) — 3D Browser Racing Game
Built a browser-based 3D racing game with four procedurally generated cars, 120 Hz physics, and five AI opponents.
**Tech:** Three.js, WebAudio

---

## Blockchain, Security & Dev Tools

### CodeZ — Semantic Code Search Platform
Built a semantic code search platform combining Tree-sitter parsing with CodeBERT/GraphCodeBERT embeddings for function-level search and quality/security analysis.
**Tech:** Rust (Actix-web), Qdrant

### Cybershield — Multi-Agent SOC Incident Response *(Hackathon)*
Built a five-agent security operations pipeline covering alert correlation, threat intelligence, investigation, containment, and escalation, with MITRE ATT&CK mapping and IOC/CVE lookups.
**Tech:** Agent orchestration

### Autonomous-Business-App — AI Business Empire Builder
Built a multi-agent system where AI agents create, manage, and scale businesses end-to-end, integrating blockchain identity and payments with a real-time dashboard.
**Tech:** Coral Protocol, Crossmint

---

## Hackathon / Agent Platforms

- **escalate (EscalateAI):** Four-agent customer-support escalation system with a RAG knowledge base (LangGraph, FastAPI, FAISS)
- **Caresync:** Four-agent healthcare care-coordination pipeline with safety-flag plan revision and HIPAA-aligned governance
- **CompliGuard:** AML/KYC multi-agent review system producing SAR filing recommendations

---

## Contact

**GitHub:** [github.com/Abrar5510](https://github.com/Abrar5510)
**LinkedIn:** [linkedin.com/in/Abrar5510](https://linkedin.com/in/Abrar5510)
**Email:** [abrar5510@icloud.com](mailto:abrar5510@icloud.com)
