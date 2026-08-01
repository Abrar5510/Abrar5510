# Portfolio — Abrar Ahmad, Full-Stack AI Engineer

**GitHub:** [github.com/Abrar5510](https://github.com/Abrar5510)
**LinkedIn:** [linkedin.com/in/Abrar5510](https://linkedin.com/in/Abrar5510)
**Location:** Islamabad, Pakistan

An interactive version of this portfolio, with filtering and a live project grid, lives in this repo at [`/website`](./website).

---

## Summary

Full-stack engineer with a broad, deployed project portfolio spanning AI/ML systems, SaaS platforms, mobile applications, and game development. Comfortable working across the stack — from LLM-based applications and computer vision pipelines to cross-platform mobile apps — using modern web, cloud, and ML tooling.

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

All projects below are deployed; several remain in active development ahead of a full v1 release.

---

## AI & LLM Systems

### Doctor-Ai — AI Medical Diagnostic Support System
Built a symptom-to-diagnosis platform that ranks differential diagnoses, including rare diseases via HPO ontology mapping, using vector similarity search over medical knowledge bases.
**Tech:** FastAPI, Qdrant, BioBERT/PubMedBERT, React 18, multi-cloud deployment (Vercel/Railway/Fly/Render)

### Edu-Ai — AI School Learning Platform
Developed a four-portal platform (student/teacher/parent/admin) with an AI tutor, automated lesson and assessment generation, and auto-grading, behind a pluggable LLM provider layer supporting Ollama, vLLM, OpenAI, Anthropic, and Azure.
**Tech:** FastAPI, PostgreSQL, React, JWT/RBAC, Docker

### CHEX — LLM Fine-Tuning for Legal QA with Hallucination Control
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

### Farm_navigator (FarmingSim) — Educational Farming Simulator, Unreal Engine
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
