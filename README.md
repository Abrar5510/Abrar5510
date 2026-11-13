### Hi, I'm Abrar Ahmad

I'm an AI engineer based in Islamabad. I build agent systems and the parts that make them trustworthy: sandboxes that run untrusted code, verifiers that check model output against ground truth, and protocols that limit what an agent can send.

[Email](mailto:abrar5510@icloud.com) · [LinkedIn](https://linkedin.com/in/Abrar5510) · [Project write-ups](./PORTFOLIO.md)

---

### Recent work

**[Triage](https://github.com/Abrar5510/triage)**: verifies bug bounty reports before a person reads them.
It rebuilds the affected library version in a disposable sandbox, runs the submitted proof of concept against the vulnerable and patched builds, and contains hostile code with canary credentials, no network access, and PID and memory caps. A report that names a function missing from the real source is rejected before anything runs. It reproduced CVE-2024-4340 in 53 seconds.
<sub>Python · Docker · Vultr · Vultr Agent Rush hackathon</sub>

**[Rashomon](https://github.com/Abrar5510/rashomon)**: unit tests for readability. ([live](https://rashomon-iota.vercel.app))
Five isolated model readers predict what a function returns. The function then runs, and the misread rate is scored with a Wilson interval so that one bad reader can't flag a function. A rewrite is checked against held-out inputs to confirm it actually reads better. Includes 43 tests and a GitHub PR gate.
<sub>Python · Anthropic / OpenAI / Gemini · Bob IDE hackathon</sub>

**[Between](https://github.com/Abrar5510/between)** + **[between-protocol](https://github.com/Abrar5510/between-protocol)**: household assistants that negotiate childcare cover with each other.
Each household runs its own MCP server. Only offers cross between households, and each offer is schema-checked and Ed25519-signed, so calendars and names stay private. The protocol is published as a standalone package: a strict Zod schema, signing, and a pure state machine with bounded counter-offers.
<sub>TypeScript · MCP · Zod · SQLite · Amazon Alexa+ hackathon</sub>

**[Shopfront MCP](https://github.com/Abrar5510/shopfront-mcp)**: makes a small shop buyable by AI agents. ([live](https://shopfront-mcp.vercel.app))
Gemini turns a merchant's product notes into listings agents can read. Each shop gets its own MCP server for search, questions, and checkout, and payment runs through PayPal. The merchant dashboard shows the questions agents asked that the listings couldn't answer, with a suggested fix for each.
<sub>Node.js · MCP · Gemini · PayPal SDK</sub>

**[Bimanual dinner-table agent](https://github.com/Abrar5510/busboy)**: two simulated SO-101 arms set a table from natural-language commands.
An INT4 Qwen3 planner on OpenVINO turns the camera scene into a plan for both arms. IK and OMPL skills carry it out, and the camera checks each step and triggers a re-plan when one fails. It completed 56 of 60 episodes on held-out seeds. SmolVLA and ACT policies were trained for comparison and exported to OpenVINO in f32 and INT8.
<sub>Python · MuJoCo · OpenVINO · LeRobot · SmolVLA</sub>

**[Lunar Horizon](https://github.com/Abrar5510/lunar-horizon)**: sunlight, solar power, and Earth visibility for any site near the lunar south pole.
It ray-marches NASA LOLA terrain to build horizon masks and uses SPICE ephemerides to work out mission-planning numbers such as percent of time sunlit, longest night, and Deep Space Network coverage. Validated against JPL Horizons to better than 0.0001°. A C++ port of the science core matches the Python reference, and an Unreal Engine 5 viewer is in progress.
<sub>Python · C++ · NAIF SPICE · Unreal Engine 5</sub>

**[86 It](https://github.com/Abrar5510/86-it)**: hands-free voice control for restaurant kitchens.
A cook says "86 salmon" and the item disappears from the kitchen display, the servers' screen, and the online menu. A small command grammar acts on the transcript right away, while the voice agent handles anything else. Includes a mock of the AssemblyAI protocol for testing without using credits.
<sub>AssemblyAI Voice Agent API · Cloudflare Workers + Durable Objects · JavaScript</sub>

**[Show It Once](https://github.com/Abrar5510/Nebius)**: turns one phone video of a task into a robot skill.
A ten-stage pipeline: compile the task spec, build a digital twin, extract object motion, retarget it to the robot, verify in simulation, generate synthetic data, then fine-tune a GR00T LoRA. The orchestration, job store, and dashboard are done, with 60 tests. The GPU stages are still being built.
<sub>Python · NVIDIA Nemotron / Cosmos / GR00T · Nebius · Nebius × NVIDIA hackathon</sub>

<sub>Also: [pj](https://github.com/Abrar5510/pj), a local-first task tracker for people and AI agents (CLI, MCP server, and web UI over plain-markdown state files) · [The Promise Ledger](https://github.com/Abrar5510/promise-ledger), which pulls every commitment out of email threads and flags the ones that conflict.</sub>

---

### Earlier work

- **[CHEX](https://github.com/Abrar5510/CHEX)**: fine-tuned Qwen3.5-9B with QLoRA on AMD MI300X / ROCm, adding calibrated uncertainty labels to reduce hallucination in legal QA.
- **[Doctor-Ai](https://github.com/Abrar5510/Doctor-Ai)**: ranks differential diagnoses from symptoms, including rare diseases through HPO mapping, using vector search with BioBERT embeddings.
- **Truss**: an AI construction design studio covering brief, floor plans, structure, code compliance, and a bill of quantities, with a live 3D viewer. *(private)*
- **ApexVelocity**: a racing game in Unreal Engine 5.5 with 30 cars, 15 tracks, and a Blender asset pipeline. *(private)*
- **Engine**: a C++20 game engine with ECS, spatial audio, and a script interpreter, built with no external dependencies. *(private)*

Longer descriptions are in [PORTFOLIO.md](./PORTFOLIO.md).

---

### Tools I use

**ML:** PyTorch, Transformers, LoRA / QLoRA, OpenVINO, MuJoCo, LeRobot, OpenCV, MediaPipe
**Agents:** MCP, LangGraph, tool calling and structured outputs, sandboxed execution, evals
**Languages:** Python, TypeScript, C++, Swift
**Web and infrastructure:** Next.js, React, FastAPI, Node.js, PostgreSQL, SQLite, Docker, Cloudflare Workers, Vercel

---

<sub>Previously: Co-Leader, Eco Internship, WWF Pakistan (2025)</sub>
