export const profile = {
  name: "Abrar Ahmad",
  role: "Full-Stack AI Engineer",
  location: "Pakistan",
  linkedin: "https://linkedin.com/in/Abrar5510",
  github: "https://github.com/Abrar5510",
  summary:
    "Full-stack engineer with a broad, deployed project portfolio spanning AI/ML systems, SaaS platforms, mobile applications, and game development. Comfortable working across the stack — from LLM-based applications and computer vision pipelines to cross-platform mobile apps — using modern web, cloud, and ML tooling.",
  typewriter: [
    "Full-Stack AI Engineer",
    "LLM Integration & RAG",
    "Computer Vision",
    "Cross-Platform Mobile",
    "Game & Graphics Engineering",
  ],
};

export const stats = [
  { value: 30, suffix: "+", label: "Shipped Projects" },
  { value: 6, suffix: "", label: "Domains Covered" },
  { value: 4, suffix: "", label: "Cloud Platforms Used" },
  { value: 5, suffix: "+", label: "Hackathon Builds" },
];

export const skillGroups = [
  {
    title: "AI & ML",
    icon: "brain",
    skills: [
      "LLM Integration & Prompt Engineering", "RAG Pipelines", "Multi-Agent Orchestration (LangGraph)",
      "LLM Fine-Tuning (LoRA/QLoRA)", "Transformers (BERT, Qwen, Whisper, ViT)",
      "Computer Vision (YOLO, OpenCV, MediaPipe, FaceNet)", "Classical & Time-Series ML (scikit-learn, Prophet, XGBoost)",
      "On-Device ML (TensorFlow Lite, Core ML)",
    ],
  },
  {
    title: "Full-Stack",
    icon: "code",
    skills: [
      "Next.js / React 18-19", "TypeScript", "Tailwind / shadcn-ui",
      "FastAPI / Express / Flask", "PostgreSQL / Prisma / SQLite",
      "Redis", "Supabase", "WebSockets", "REST API Design",
    ],
  },
  {
    title: "Mobile",
    icon: "chip",
    skills: [
      "React Native / Expo", "SwiftUI & Objective-C++ (iOS/macOS/watchOS)",
      "Kotlin / Compose (Android)", "ARKit / ARCore", "C++17 Shared Cores",
    ],
  },
  {
    title: "Games & 3D",
    icon: "eye",
    skills: [
      "Unreal Engine 5 (C++)", "Unity (WebGL)", "Three.js",
      "C++20 Game Engine Architecture (ECS, Audio, Rendering)",
      "Path Tracing & PBR Rendering", "Blender Pipelines",
    ],
  },
  {
    title: "Blockchain & Security",
    icon: "db",
    skills: [
      "Solidity & Hardhat (Upgradeable Proxies, Stablecoins)", "Web3 Identity (Coral Protocol)",
      "DeFi Risk Systems", "SOC Automation & Vulnerability Remediation",
      "AML/KYC Compliance", "MITRE ATT&CK",
    ],
  },
  {
    title: "DevOps",
    icon: "cloud",
    skills: [
      "Docker & Docker Compose", "Kubernetes", "Kafka",
      "Turborepo / pnpm Monorepos", "Microservices",
      "Multi-Cloud Deploys (Vercel, Railway, Fly, Render)", "CI/CD (GitHub Actions)",
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  tier: string;
  badges: string[];
  problem?: string;
  solution: string;
  highlights: { label: string; text: string }[];
  stack: string[];
  accent: "cyan" | "violet" | "mint" | "amber" | "rose" | "blue";
  featured?: boolean;
};

export const projects: Project[] = [
  // AI & LLM Systems
  {
    id: "doctor-ai",
    index: "01",
    title: "Doctor-Ai",
    tagline: "AI Medical Diagnostic Support System",
    tier: "AI & LLM Systems",
    badges: ["Deployed"],
    solution:
      "A symptom-to-diagnosis platform that ranks differential diagnoses, including rare diseases via HPO ontology mapping, using vector similarity search over medical knowledge bases.",
    highlights: [],
    stack: ["FastAPI", "Qdrant", "BioBERT / PubMedBERT", "React 18", "Vercel", "Railway", "Fly", "Render"],
    accent: "cyan",
    featured: true,
  },
  {
    id: "edu-ai",
    index: "02",
    title: "Edu-Ai",
    tagline: "AI School Learning Platform",
    tier: "AI & LLM Systems",
    badges: ["Deployed"],
    solution:
      "A four-portal platform (student/teacher/parent/admin) with an AI tutor, automated lesson and assessment generation, and auto-grading, behind a pluggable LLM provider layer supporting Ollama, vLLM, OpenAI, Anthropic, and Azure.",
    highlights: [],
    stack: ["FastAPI", "PostgreSQL", "React", "JWT / RBAC", "Docker"],
    accent: "cyan",
    featured: true,
  },
  {
    id: "chex",
    index: "03",
    title: "CHEX",
    tagline: "LLM Fine-Tuning for Legal QA with Hallucination Control",
    tier: "AI & LLM Systems",
    badges: ["Deployed"],
    solution:
      "Fine-tuned Qwen3.5-9B with 4-bit LoRA (NF4) on AMD MI300X/ROCm, adding calibrated uncertainty labels to reduce hallucination in legal question-answering, with a full MLOps pipeline from synthetic data generation through benchmark evaluation.",
    highlights: [],
    stack: ["LoRA / QLoRA", "Transformers", "ROCm", "Gradio"],
    accent: "rose",
    featured: true,
  },
  {
    id: "chaos-monkey",
    index: "04",
    title: "Chaos-Monkey",
    tagline: "Multi-Agent AI Crisis War Room",
    tier: "AI & LLM Systems",
    badges: ["Hackathon"],
    solution:
      "A director agent that delegates to parallel PR, Legal, Finance, and Ops specialist agents, synthesizing a unified response plan under a 90-second SLA.",
    highlights: [],
    stack: ["FastAPI", "asyncio / WebSockets", "React 18", "BM25 RAG", "Supabase"],
    accent: "violet",
  },
  {
    id: "vulnguard",
    index: "05",
    title: "VulnGuard",
    tagline: "Multi-Agent Vulnerability Remediation",
    tier: "AI & LLM Systems",
    badges: ["Hackathon"],
    solution:
      "An agent pipeline (triage → plan → patch → adversarial security review → test → merge decision) for automated vulnerability remediation, capped at three iterations per issue.",
    highlights: [],
    stack: ["LangGraph", "Pydantic AI"],
    accent: "amber",
  },
  {
    id: "sentiment-analysis",
    index: "06",
    title: "Sentiment-analysis",
    tagline: "Real-Time Social Sentiment Platform",
    tier: "AI & LLM Systems",
    badges: ["Deployed"],
    solution:
      "Combined BERT/RoBERTa and VADER models for aspect-based sentiment analysis across 100+ languages, streaming results into a live dashboard.",
    highlights: [],
    stack: ["Kafka", "TimescaleDB", "React", "D3.js"],
    accent: "rose",
  },
  {
    id: "object-detection-api",
    index: "07",
    title: "Object-detection-api",
    tagline: "High-Performance Detection API",
    tier: "AI & LLM Systems",
    badges: ["Deployed"],
    solution:
      "A YOLOv8/Faster R-CNN detection API for real-time video processing, optimized with TensorRT and containerized for deployment.",
    highlights: [],
    stack: ["TensorRT", "Docker"],
    accent: "blue",
  },
  {
    id: "truss",
    index: "08",
    title: "Truss",
    tagline: "AI-Driven Integrated Construction Design Platform",
    tier: "AI & LLM Systems",
    badges: ["Deployed", "Flagship"],
    solution:
      "An end-to-end construction design studio with an 8-stage workflow (Brief → Review → Site → Plans → Structure → Compliance → Budget → Build): AI-parsed project briefs, generative floor plans ranked by compliance/daylight/circulation, preliminary structural & MEP sizing, automated code-compliance checking across 9 jurisdictions, and tier-calibrated cost estimation with a contractor-ready Bill of Quantities, backed by a Python text-to-3D engine driving a live 3D viewer.",
    highlights: [],
    stack: ["Next.js 14", "React 18", "Three.js / react-three-fiber", "Zustand", "Python (code3d)", "Ollama / Gemma 4", "Supabase"],
    accent: "mint",
    featured: true,
  },
  {
    id: "atelier",
    index: "09",
    title: "Atelier",
    tagline: "AI Furniture Design Studio",
    tier: "AI & LLM Systems",
    badges: ["Deployed", "Flagship"],
    solution:
      "An AI furniture design consultant with streaming chat, a live structured design spec kept in sync via tool calls (blueprint-style isometric drawing plus spec sheet), and one-click build-plan generation (cut list, bill of materials, tools, step-by-step instructions, cost estimate). Includes a guided room-scan wizard that reads wall photos and auto-arranges furniture with a deterministic layout engine enforcing walkways and door clearances.",
    highlights: [],
    stack: ["Next.js 14", "React 18", "Google Gemini / Anthropic Claude", "Structured Outputs"],
    accent: "violet",
    featured: true,
  },
  // Full-Stack & SaaS
  {
    id: "compliancedev",
    index: "10",
    title: "ComplianceDev",
    tagline: "Enterprise Compliance Automation Platform",
    tier: "Full-Stack & SaaS",
    badges: ["Deployed"],
    solution:
      "A microservices-based compliance platform (seven Fastify services plus a Python FastAPI document-generation service) with an OPA policy engine, in a Turborepo/pnpm monorepo with a Next.js 15 dashboard.",
    highlights: [],
    stack: ["Kafka", "MinIO", "OPA", "Next.js 15"],
    accent: "cyan",
  },
  {
    id: "marketing-studio",
    index: "11",
    title: "marketing-studio",
    tagline: "AI Marketing Generation Platform (SaaS)",
    tier: "Full-Stack & SaaS",
    badges: ["Deployed"],
    solution:
      "A product-to-assets pipeline generating strategy documents, SEO articles, social posts, video scripts, and cold outreach emails, with billing, Gmail OAuth, and HMAC-tracked email analytics.",
    highlights: [],
    stack: ["Paddle Billing", "Prompt Evaluation Pipeline"],
    accent: "blue",
  },
  {
    id: "buyer",
    index: "12",
    title: "buyer",
    tagline: "Crypto Trading AI Agent",
    tier: "Full-Stack & SaaS",
    badges: ["Deployed"],
    solution:
      "A local ML trading bot combining 20+ technical indicators with optional local-LLM decision-making, supporting paper and live trading with risk management controls.",
    highlights: [],
    stack: ["CCXT", "TA-Lib", "Ollama"],
    accent: "amber",
  },
  {
    id: "minihq",
    index: "13",
    title: "Dashboard (MiniHQ)",
    tagline: "Self-Hosted Dev-Server HQ",
    tier: "Full-Stack & SaaS",
    badges: ["Deployed"],
    solution:
      "A self-hosted operations dashboard combining system monitoring, an AI chat interface, an in-browser terminal, a file browser/FTP client, and network controls.",
    highlights: [],
    stack: ["node-pty", "xterm.js", "Ollama", "Tailscale"],
    accent: "mint",
  },
  // Mobile & On-Device AI
  {
    id: "snapassist",
    index: "14",
    title: "Snapassist (FrameAI)",
    tagline: "AI Photography Composition Assistant (iOS + Android)",
    tier: "Mobile & On-Device AI",
    badges: ["Deployed"],
    solution:
      "An iOS/Android app for on-device scene classification, aesthetic scoring, and pose guidance with AR overlays, sharing a C++17 core across Swift/Objective-C++ and Kotlin/JNI.",
    highlights: [],
    stack: ["Places365", "NIMA-Lite", "BlazePose", "ARKit / ARCore"],
    accent: "violet",
  },
  {
    id: "peak",
    index: "15",
    title: "Peak",
    tagline: "Multi-Camera AI Sports Analysis (iOS + watchOS)",
    tier: "Mobile & On-Device AI",
    badges: ["Deployed"],
    solution:
      "An iOS/watchOS app enabling peer-to-peer synchronized capture across multiple iPhones, with on-device pose tracking and Kalman filtering to generate live stats and replays.",
    highlights: [],
    stack: ["MultipeerConnectivity", "C++ / Swift Interop"],
    accent: "cyan",
  },
  {
    id: "fitu",
    index: "16",
    title: "FitU",
    tagline: "AI Fitness Companion (Mobile + CV)",
    tier: "Mobile & On-Device AI",
    badges: ["Deployed"],
    solution:
      "A React Native fitness app with real-time pose estimation, equipment detection, and rep counting / form correction, offline-first with Firebase sync.",
    highlights: [],
    stack: ["React Native", "MediaPipe", "OpenCV", "Expo"],
    accent: "blue",
    featured: true,
  },
  {
    id: "face-attendance",
    index: "17",
    title: "Face_attendance",
    tagline: "Face-Recognition Attendance System",
    tier: "Mobile & On-Device AI",
    badges: ["Deployed"],
    solution:
      "A face-recognition attendance system with anti-spoofing liveness detection and multi-face support, including a web dashboard, mobile app, and analytics, containerized for AWS deployment.",
    highlights: [],
    stack: ["FaceNet", "MTCNN", "Docker"],
    accent: "rose",
  },
  {
    id: "financex",
    index: "18",
    title: "FinanceX",
    tagline: "FinanceTracker Pro (Mobile + ML)",
    tier: "Mobile & On-Device AI",
    badges: ["Deployed"],
    solution:
      "A mobile finance tracker with SMS transaction parsing and LSTM/Prophet/XGBoost models for spend prediction and anomaly detection.",
    highlights: [],
    stack: ["React Native", "Time-Series ML"],
    accent: "amber",
  },
  // Games & Graphics
  {
    id: "apexvelocity",
    index: "19",
    title: "ApexVelocity",
    tagline: "Racing Game, Unreal Engine 5.5 (Flagship)",
    tier: "Games & Graphics",
    badges: ["Flagship"],
    solution:
      "A racing game featuring 30 cars, 15 tracks, license tests, and championships, targeting iOS, Steam, and Windows, with a Blender asset pipeline (27 car models) and DLSS/FSR support.",
    highlights: [],
    stack: ["UE5 C++ / UnrealSharp", "FMOD", "GitHub Actions CI"],
    accent: "amber",
    featured: true,
  },
  {
    id: "engine",
    index: "20",
    title: "Engine",
    tagline: "From-Scratch C++20 Game Engine",
    tier: "Games & Graphics",
    badges: ["Zero Dependencies"],
    solution:
      "A game engine built from scratch with an ECS architecture, an FMOD-style audio mixer with 3D spatialization, a render abstraction layer, and a script interpreter, with zero external dependencies.",
    highlights: [],
    stack: ["C++20", "MCP Server Integration"],
    accent: "violet",
  },
  {
    id: "lumen-aether",
    index: "21",
    title: "Graphics Engines — LUMEN & AETHER",
    tagline: "Zero-Dependency Rendering Engines",
    tier: "Games & Graphics",
    badges: ["Zero Dependencies"],
    solution:
      "Two rendering engines built from first principles: LUMEN, a Monte Carlo path tracer in roughly 700 lines of pure Python with BVH acceleration and ACES tonemapping, and AETHER, a real-time PBR engine in JavaScript with shadows, bloom, and physics.",
    highlights: [],
    stack: ["Rendering Math", "Computational Physics"],
    accent: "cyan",
  },
  {
    id: "farm-navigator",
    index: "22",
    title: "Farm_navigator (FarmingSim)",
    tagline: "Educational Farming Simulator, Unreal Engine",
    tier: "Games & Graphics",
    badges: ["Deployed"],
    solution:
      "Gameplay systems for an educational farming simulator, including a farming HUD, a drought/flood disaster manager, and sustainability reporting.",
    highlights: [],
    stack: ["Unreal Engine", "C++"],
    accent: "mint",
  },
  {
    id: "meow",
    index: "23",
    title: "Meow (Apex Velocity Web)",
    tagline: "3D Browser Racing Game",
    tier: "Games & Graphics",
    badges: ["Deployed"],
    solution:
      "A browser-based 3D racing game with four procedurally generated cars, 120 Hz physics, and five AI opponents.",
    highlights: [],
    stack: ["Three.js", "WebAudio"],
    accent: "blue",
  },
  // Blockchain, Security & Dev Tools
  {
    id: "codez",
    index: "24",
    title: "CodeZ",
    tagline: "Semantic Code Search Platform",
    tier: "Blockchain, Security & Dev Tools",
    badges: ["Deployed"],
    solution:
      "A semantic code search platform combining Tree-sitter parsing with CodeBERT/GraphCodeBERT embeddings for function-level search and quality/security analysis.",
    highlights: [],
    stack: ["Rust (Actix-web)", "Qdrant"],
    accent: "rose",
  },
  {
    id: "cybershield",
    index: "25",
    title: "Cybershield",
    tagline: "Multi-Agent SOC Incident Response",
    tier: "Blockchain, Security & Dev Tools",
    badges: ["Hackathon"],
    solution:
      "A five-agent security operations pipeline covering alert correlation, threat intelligence, investigation, containment, and escalation, with MITRE ATT&CK mapping and IOC/CVE lookups.",
    highlights: [],
    stack: ["Agent Orchestration"],
    accent: "amber",
  },
  {
    id: "autonomous-business",
    index: "26",
    title: "Autonomous-Business-App",
    tagline: "AI Business Empire Builder",
    tier: "Blockchain, Security & Dev Tools",
    badges: ["Deployed"],
    solution:
      "A multi-agent system where AI agents create, manage, and scale businesses end-to-end, integrating blockchain identity and payments with a real-time dashboard.",
    highlights: [],
    stack: ["Coral Protocol", "Crossmint"],
    accent: "violet",
  },
  // Hackathon / Agent Platforms
  {
    id: "escalate",
    index: "27",
    title: "escalate (EscalateAI)",
    tagline: "Customer-Support Escalation System",
    tier: "Hackathon / Agent Platforms",
    badges: ["Hackathon"],
    solution:
      "A four-agent customer-support escalation system with a RAG knowledge base.",
    highlights: [],
    stack: ["LangGraph", "FastAPI", "FAISS"],
    accent: "cyan",
  },
  {
    id: "caresync",
    index: "28",
    title: "Caresync",
    tagline: "Healthcare Care-Coordination Pipeline",
    tier: "Hackathon / Agent Platforms",
    badges: ["Hackathon"],
    solution:
      "A four-agent healthcare care-coordination pipeline with safety-flag plan revision and HIPAA-aligned governance.",
    highlights: [],
    stack: ["Agent Orchestration"],
    accent: "mint",
  },
  {
    id: "compliguard",
    index: "29",
    title: "CompliGuard",
    tagline: "AML/KYC Multi-Agent Review System",
    tier: "Hackathon / Agent Platforms",
    badges: ["Hackathon"],
    solution:
      "An AML/KYC multi-agent review system producing SAR filing recommendations.",
    highlights: [],
    stack: ["Agent Orchestration"],
    accent: "blue",
  },
];

export const tiers = [
  "All",
  "AI & LLM Systems",
  "Full-Stack & SaaS",
  "Mobile & On-Device AI",
  "Games & Graphics",
  "Blockchain, Security & Dev Tools",
  "Hackathon / Agent Platforms",
];

export const standards = [
  {
    title: "Microservices Architecture",
    text: "FastAPI / Express / Flask services, Turborepo & pnpm monorepos, and OPA-driven policy engines for enterprise compliance workloads.",
    icon: "grid",
  },
  {
    title: "Orchestration & Infrastructure",
    text: "Docker & Docker Compose, Kubernetes, and multi-cloud deploys across Vercel, Railway, Fly, and Render with GitHub Actions CI/CD.",
    icon: "layers",
  },
  {
    title: "Edge & Mobile Optimization",
    text: "On-device inference with TensorFlow Lite and Core ML, plus shared C++17 cores across iOS, Android, and watchOS.",
    icon: "zap",
  },
  {
    title: "Streaming & Real-Time Systems",
    text: "Kafka pipelines, WebSockets, and Redis-backed real-time dashboards for sub-second data delivery.",
    icon: "activity",
  },
];

export const ticker = [
  "Next.js", "React", "TypeScript", "FastAPI", "Express", "PostgreSQL", "Supabase",
  "LangGraph", "LoRA / QLoRA", "Transformers", "YOLO", "OpenCV", "MediaPipe",
  "Unreal Engine 5", "Three.js", "Unity", "Solidity", "Hardhat", "Docker",
  "Kubernetes", "Kafka", "React Native", "SwiftUI", "Kotlin", "ARKit",
];
