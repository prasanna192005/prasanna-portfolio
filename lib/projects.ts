export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  longDesc: string;
  tech: string[];
  url: string;
  live: string | null;
  color: string;
  role?: string;
  timeframe?: string;
  demo?: string;
  features?: string[];
  logicDesc?: string;
  aestheticDesc?: string;
}

export const projects: Project[] = [
  { 
    id: "01", 
    title: "ObservoAI", 
    category: "AI Observability", 
    year: "2025", 
    desc: "AI-powered API watchdog with 3-tier ML anomaly detection, log chat, and AI-driven phone alerts.", 
    longDesc: "ObservoAI is an advanced observability and API watchdog platform built for the Barclays Hack-o-Hire 2025. It monitors distributed systems across on-prem, cloud, and multi-cloud environments, utilizing a 3-tier machine learning pipeline for anomaly detection. Re-imagining operations, it features natural language log/metric chatting, Gemini-powered root cause analysis (RCA), and automated voice-call alerts during high-priority incidents.",
    tech: ["FastAPI", "Python", "ML Anomaly Detection", "OpenTelemetry", "Prometheus", "Tempo", "Grafana", "Next.js", "Docker"],
    url: "https://github.com/prasanna192005/ObservoAI",
    live: null,
    color: "#FF1F00",
    role: "Full-Stack & ML Architect",
    timeframe: "Barclays Hackathon 2025",
    demo: "https://youtu.be/v2XaY78f0vQ",
    features: [
      "3-Tier Anomaly Detection: Employs ARIMA for trend forecasting, LSTM for deep degradation tracking, and Isolation Forest for black-swan events.",
      "AI Voice-Call Alerts: Automatically triggers phone calls to on-call engineers via AI voice agents when critical thresholds are crossed.",
      "Query Logs via Chat: Ask questions about logs and metrics using natural language, converted dynamically to PromQL and TraceQL.",
      "Root Cause Analysis (RCA): Utilizes Gemini to generate deep incident diagnostics and sends automated reports via email.",
      "High-Frequency Bank Simulator: Simulates heavy banking transaction journeys to validate collection thresholds and stress-test pipelines."
    ],
    logicDesc: "The system processes high-frequency telemetry data asynchronously. The 3-tier ML models run in separate backend threads to maintain real-time evaluation with minimal latency, triggering notifications through an autonomous dialer agent.",
    aestheticDesc: "We implemented a dark-themed observability dashboard with glowing, high-contrast status nodes and trace cards, allowing developers to spot path anomalies and critical error states immediately."
  },
  { 
    id: "02", 
    title: "MyBuddy", 
    category: "EdTech AI", 
    year: "2024", 
    desc: "AI-powered collaborative learning ecosystem with PCM test generation and RAG chatbot.", 
    longDesc: "MyBuddy is a smart, **collaborative learning ecosystem** designed by students, for students. It unifies high-quality study resources, real-time peer collaboration, and personalized intelligence. The platform features an **AI study assistant** utilizing __LangChain and Retrieval-Augmented Generation (RAG)__ for document interaction, a dynamic Django-powered **custom test series generator** for Physics, Chemistry, and Math, and **real-time notes synchronization**.",
    tech: ["React.js", "Django REST API", "Node.js", "PostgreSQL", "LangChain", "RAG", "JWT"],
    url: "https://github.com/prasanna192005/My-Buddy",
    live: null,
    color: "#0047FF",
    role: "Full-Stack & AI Engineer",
    timeframe: "3 Month Academic Sprint",
    features: [
      "Custom PCM Test Generator: Generate personalized, multi-subject tests in Physics, Chemistry, and Math with smart scoring analytics.",
      "LangChain + RAG Assistant: 24/7 doubt solving chatbot capable of ingesting and answering queries across multiple PDFs simultaneously.",
      "Collaborative Rich Notes: Write and format study documents live with peers in real time, supporting PDF and image embeds.",
      "Instant Messaging Network: Connect with friends via structured channels to share notes, ideas, and revision questions.",
      "Smart To-Do Planner: A secure, prioritizable checklist to organize assignments, exam schedules, and revision targets."
    ],
    logicDesc: "The platform divides operations between a Django REST API coordinating PostgreSQL database states and test generation logic, and a Node.js socket server handling real-time notes synchronization. The AI pipeline is powered by a RAG engine that embeds and retrieves custom document contexts locally.",
    aestheticDesc: "Features a modern, high-legibility layout utilizing clean blueprint grid aesthetics. Highly interactive modules—like the shared notes space and real-time chat drawers—are framed neatly to sustain user focus during prolonged study sessions."
  },
  { 
    id: "03", 
    title: "AKSHAR", 
    category: "Tactical Multiplayer System", 
    year: "2024", 
    desc: "Tactical multiplayer typing battle engine with sub-100ms Firebase synchronization and custom ability payloads.", 
    longDesc: "AKSHAR (अक्षर — The Imperishable / The Letter) is a high-performance, **real-time typing engine** built on a __distributed state machine__. It transforms mechanical typing into a **high-stakes, tactical hero-racer**. The system coordinates **sub-100ms synchronization** across players, handles transient player ability payloads (blurs, scrambles, redactions) via **atomic database transactions**, compiles lightweight **SVG telemetry charts**, and implements **schema.org semantic schemas** alongside an __LLM crawler manifest (/llms.txt)__ for maximum AI/LLM discoverability.",
    tech: ["Next.js", "Firebase", "TypeScript", "TailwindCSS", "Framer Motion", "LLM Optimization"],
    url: "https://github.com/prasanna192005/project-akshar",
    live: "https://playakshar.xyz",
    color: "#FFD700",
    role: "Lead Systems & Gameplay Architect",
    timeframe: "Operational Release (2024)",
    demo: "/akshar-demo.mp4",
    features: [
      "Optimistic Distributed Sync: Sub-100ms reactive state synchronization leveraging local 60fps loops and server-stamped conflict resolution.",
      "Transient State Ability Payloads: Deploy tactical counters (Vayu warp, Agni blur, Sutra shield, Yantra freeze) resolved through atomic database transactions.",
      "Forensic Ref-Driven Telemetry: Achieves seamless performance rendering by bypass-updating DOM nodes with React Refs and scalable SVG coordinate polyline mapping.",
      "Phased Devanagari Scrambler: Decrypts inputs dynamically through a seeded randomizer transitioning character arrays across Latin, Cyrillic, and Sanskrit scripts.",
      "Tactical Progression Engine: Active loops rewarding players with daily combat operations, compound leveling XP, and a custom currency system.",
      "Generative Engine Optimization (GEO): Optimized for AI crawlers with structured JSON-LD schemas and dedicated /llms.txt technical brief manifests."
    ],
    logicDesc: "Operates on a dual-loop framework: local typing hooks track keypresses in memory to ensure zero telemetry delay, while room handlers synchronize state variables asynchronously to Firebase. Abilities write atomic payload logs that client-side overlays automatically decay and clear via timed triggers.",
    aestheticDesc: "Fuses a rugged military command-console design with elegant Devanagari Sanskrit motifs. Interactive typing zones use stark, high-contrast layouts, with high-frequency telemetry alerts and screen-scrambling overlays mimicking tactical system disruptions."
  },
  { 
    id: "04", 
    title: "Seedhe CMD", 
    category: "CLI Systems", 
    year: "2024", 
    desc: "A terminal-native AI cheatsheet built because switching tabs to search StackOverflow is Seedhe Maut to developer flow.", 
    longDesc: "Designed for **keyboard purists** who value raw execution speed, Seedhe CMD brings **rapid-fire commands** and in-terminal __Gemini-powered guidance__ straight to your shell. It eliminates the friction of opening a browser to find a forgotten Git flag, acting like a high-octane rap flow for your dev environment. It is the ultimate **'Bina faltu bakwaas, Seedhe kaam'** CLI companion for command-line navigation—engineered as a native shell utility long __before modern IDEs__ integrated built-in AI chat panels.",
    tech: ["Node.js", "Gemini API", "CLI", "Developer Tooling"],
    url: "https://github.com/prasanna192005/seedhe-cmd",
    live: null,
    color: "#E65100",
    role: "Lead CLI Architect",
    timeframe: "Operational Release (2024)",
    features: [
      "Seedhe Maut Flow / Cheatsheets: Instantaneous, terminal-native cheatsheets for Git, Docker, Linux, React, and Node.js. No scroll, no delay—just straight, clean flags when you need them.",
      "Gemini AI Command Guidance: Tap into 'seedhe chat' to spin up a Google Gemini API guide right in your CLI. Resolve command breakdowns and debug error stacks without context switching.",
      "Zero-Setup Global Execution: A single global npm install ('npm install -g seedhe-cmd') that links into your system path for lightweight, zero-dependency executions anytime.",
      "Legacy Terminal Pre-empt: Engineered before modern IDEs had native chat panels, proving that terminal-first utility remains the purest way to code."
    ],
    logicDesc: "Constructed with Node.js and powered by direct HTTP calls to the Google Gemini API. It resolves conversational terminal queries asynchronously and formats code blocks natively using CLI rendering buffers.",
    aestheticDesc: "Presents a retro terminal command design, relying on simple monospaced block highlights, bold ANSI color escapes, and clean CLI menu highlights that feel native to any developer environment."
  },
  { 
    id: "05", 
    title: "Anchor19", 
    category: "Workspace Console", 
    year: "2026", 
    desc: "A keyboard-driven workspace console built because ALT-Tabbing between tools to capture a fleeting thought is a form of digital self-harm.", 
    longDesc: "Anchor19 is a **keyboard-driven workspace console** built because ALT-Tabbing between Notion, Jira, Google Drive, and ChatGPT just to capture a single fleeting thought is a form of digital self-harm. Engineered for developers who think faster than they type, Anchor19 strips away the latency of modern SaaS bloat by running a zero-friction **CMD+K interface** directly on top of **real-time Firestore pipelines**. By coupling __predictive NLP commands__ with instant route redirection, the platform dispatches background __generative AI tasks__ the millisecond you hit enter, landing you in a fluidly animated refinement sandbox. Wrapped in a bespoke, multi-theme terminal-style design system with custom-engineered context overlays, it feels less like a web app and more like a **high-performance command bridge** for your digital life.",
    tech: ["Next.js", "Firebase Firestore", "Gemini API", "Google Drive API", "TypeScript", "TailwindCSS"],
    url: "https://github.com/prasanna192005/anchor19",
    live: "https://anchor19.vercel.app",
    color: "#4DD3B0",
    role: "Lead Product & Systems Architect",
    timeframe: "Product Release (2024)",
    features: [
      "Natural Language Command Matrix (CMD+K): The control room of the entire application. Instead of tedious clicking, it uses a debounced NLP parser with Levenshtein-distance fallbacks. Type commands like summarise @ProjectBrief or email @RefactorNotes to query your entire workspace, target specific notes, and kick off background operations in under 40 milliseconds.",
      "The AI Intelligence Lab: A specialized sandbox for LLM orchestration. The moment you run an AI command, the app immediately redirects you to the Lab with a pulsing \"thinking\" UI. The Gemini-powered edge API streams your results, which you can toggle between a raw text editor and a rendered Github-Flavored Markdown preview, followed by a chat-based refinement loop to tweak, shorten, or format the text on the fly.",
      "GDrive Shadow Search & Fuzzy Matcher: Say goodbye to Google’s painfully bloated interface. Anchor19 connects to the Google Drive API, indexes metadata, and exposes it through a high-speed fuzzy search engine. Type a few broken, mistyped letters of a cloud document, and the fuzzy-matching algorithm surfaces the link instantly alongside your local notes.",
      "Secure Public Hand-off: One-click sharing that actually works. Generate secure, read-only web pages of your notes instantly to send to clients or team members, without forcing them to sign up for an account or exposing your private database keys.",
      "Frictionless Velocity Console: No manuals or heavy setup required. Everything is pre-configured to work out of the box with simple keyboard shortcuts and ready-to-use note templates, keeping you in the flow zone instead of tweaking settings."
    ],
    logicDesc: "Features a client-side NLP engine that processes command strings locally to optimize responsiveness. Real-time updates are driven by Firestore websocket listeners, while generative tasks stream via Vercel Edge functions for zero-latency execution.",
    aestheticDesc: "Implements a sleek keyboard-centric HUD design, complete with blur-backdrop modals, responsive monospaced typography, and smooth transitions, bringing terminal speed to a modern browser window."
  },
  { 
    id: "06", 
    title: "Pulse", 
    category: "Real-time Systems", 
    year: "2026", 
    desc: "A completely FREE, low-latency live polling alternative to expensive paid tools like Slido, Mentimeter, and Poll Everywhere.", 
    longDesc: "Pulse is a **low-latency, zero-auth live polling engine** built because charging a __$50/month subscription__ to sync a few JSON payloads in a silent conference room is **absolute highway robbery**. Under the hood, Pulse orchestrates live session state and response aggregates using __Firebase Realtime Database’s native websocket listeners__, keeping presenters and participants in lockstep with **sub-100ms state updates**. The presenter canvas boasts dynamically scaling, art-directed layouts that continuously recalculate viewport aspect ratios, coupled with a client-side **vector-to-raster engine** for one-click high-res PNG slide exports.",
    tech: ["Next.js 16", "Tailwind CSS 4", "Firebase RTDB", "Firebase Auth", "Lucide Icons"],
    url: "https://github.com/prasanna192005/Pulse-free-ppt-polls",
    live: "https://pulse19.vercel.app",
    color: "#B0B8FF",
    role: "Lead Product & Systems Engineer",
    timeframe: "Product Release (2024)",
    features: [
      "Sub-100ms Reactive State Synchronization: Powered by Firebase Realtime Database, Pulse utilizes active client-side subscriptions to push question states, live response metrics, and active session heartbeats with near-zero latency, completely bypassing the overhead of REST polling.",
      "Zero-Account Ephemeral Identity Mapping: A friction-free participant entry system that pairs styled, responsive, focus-reactive character boxes with a hidden input handler, generating transient client hashes to map anonymous responses without ever touching a database user profile table.",
      "Aspect-Locked Fluid Canvas Engine: A presentation viewport scaling engine that continuously calculates 16:9 container aspect ratios during window resize events, preventing clipping or text distortion across massive projector screens while serving layouts that feel like premium editorial design.",
      "Client-Side Vector-to-Raster Compilation: Integrates html-to-image to serialize active DOM nodes into high-resolution PNG data URLs directly in the browser, enabling immediate branded slide exports for PowerPoint without spinning up expensive, slow headless browsers on the backend."
    ],
    logicDesc: "Orchestrates live session state and response aggregates using Firebase Realtime Database’s native websocket listeners for sub-100ms updates. Leverages local-storage hashes linked directly to a responsive OTP-style code entry system to authenticate anonymous votes without user tables.",
    aestheticDesc: "Uses a stark, high-contrast presenter screen optimized for projector scale. Features dynamic 16:9 viewport calculation handlers to lock layouts during window resizes, paired with client-side DOM-to-raster PNG compilation to download slide graphics on the fly."
  },
  { 
    id: "07", 
    title: "QR19", 
    category: "Developer Utility", 
    year: "2025", 
    desc: "Privacy-focused QR code generator with professional styling, logo support, and high-resolution PNG/SVG export—built with React, Vite, and Tailwind.", 
    longDesc: "QR19 is a **precision QR code engine** built because generating a clean vector graphic shouldn't require dodging full-screen pop-up ads and tracking scripts. Adhering to a strict zero-tracking policy, it runs entirely in the browser to deliver **high-fidelity, production-ready assets** directly to your storage. It integrates __pixel-perfect customizations__ including logo excavation logic, custom visual palettes, and dual vector/raster downloads, creating a clean, focused utility that values both your design details and your data privacy.",
    tech: ["React", "Vite", "TailwindCSS", "TypeScript", "Canvas API"],
    url: "https://github.com/prasanna192005/qrgen",
    live: "https://qr19.vercel.app",
    color: "#7B1FA2",
    role: "Lead Frontend Architect",
    timeframe: "Independent Release (2024)",
    features: [
      "Zero-Track Privacy Shield: Operates with zero analytics scripts and zero servers. vCard details, phone credentials, and private URLs are compiled entirely within local memory context.",
      "Branded Logo Excavator: Embed visual logos at the center of the canvas matrix. Uses custom excavation logic to wipe conflicting background blocks and maintain scanning alignment.",
      "Vector & Raster Engines: Export clean graphics on demand. Choose high-resolution SVG for infinite scalability in design layouts or pixel-aligned PNG for digital channels.",
      "Curated Studio Presets: Switch between premium visual palettes (Onyx, Midnight, Electric) to bypass raw hex inputs and maintain visual consistency across codes.",
      "Universal Protocol Matrix: Encodes standardized payloads for website URLs, digital business cards (vCard), direct WhatsApp/SMS triggers, pre-filled emails, and calendar schedules."
    ],
    logicDesc: "Processes QR matrices entirely client-side using the Canvas API. Logo framing crops canvas layers dynamically, applying clean boundary boxes around logos to prevent scanning conflicts and data loss.",
    aestheticDesc: "Applies a minimalist, dark studio workspace interface with granular slider controls, real-time visual canvas feedback, and color chip selection nodes for designer productivity."
  },
  { 
    id: "08", 
    title: "Code We Met", 
    category: "Collaborative IDE & DSA Playground", 
    year: "2025", 
    desc: "High-performance collaborative playground merging live WebRTC interviews, real-time Monaco IDE sync, and gamified algorithm campaigns.", 
    longDesc: "Code We Met (powered by codeCRUX) is an all-in-one **collaborative hiring and DSA playground** designed because fragmenting applications, live interviews, and DSA preparation across multiple platforms kills recruiter efficiency and developer flow. Under the hood, the platform combines a **real-time collaborative IDE** powered by __Monaco Editor__ with built-in, low-latency __WebRTC video calls__, dynamic chat drawers, and step-by-step __visual algorithm simulators__. Whether you're a recruiter staging high-fidelity, multi-language coding trials or a candidate scaling gamified sorting/graph levels, it bridges the gap between learning and getting hired.", 
    tech: ["Next.js", "WebRTC", "Socket.io", "Monaco Editor", "Express", "TailwindCSS", "Framer Motion"], 
    url: "https://github.com/prasanna192005/code-we-met", 
    live: null, 
    color: "#00C853", 
    role: "Lead Full-Stack & Collaborative Systems Architect", 
    timeframe: "Independent Product Release (2024)", 
    demo: "https://www.youtube.com/watch?v=dZB7tJsGHVs", 
    features: [ 
      "Live Collaborative IDE: Write, execute, and debug code in real time with candidates across multiple languages utilizing a custom-configured **Monaco Editor** interface.", 
      "Built-in WebRTC Signaling: Conduct live high-definition **video calls and chat** directly inside the editor container, completely bypassing external Zoom/Meet links.", 
      "Gamified DSA Journeys: Step-by-step simulations for sorting, searching, and graph algorithms, integrated into a **story-based campaign** with coding battles.", 
      "AI-Powered Matching: Auto-extract candidate capabilities to deliver **semantic job recommendations** and map real-time progress graphs.", 
      "Recruiter Dashboard: Seamlessly stage active job listings, schedule technical calls, and review **candidate evaluation logs** on a unified panel." 
    ], 
    logicDesc: "The architecture orchestrates collaborative workspace states via a central **Node.js Socket.io server** for sub-100ms keypress synchronization, using __WebRTC peer connections__ for high-fidelity audio/video streams. DSA visualization coordinates are computed dynamically, pushing state frames into localized React update queues for butter-smooth algorithm animations.", 
    aestheticDesc: "Features a sleek **dark gaming-terminal HUD** with neon-green status badges, glowing code editor containers, and responsive custom control panels that mimic a modern console cockpit, elevating candidate focus during high-pressure coding interviews." 
  },
  { 
    id: "09", 
    title: "myTV", 
    category: "Local Network Media Streamer", 
    year: "2026", 
    desc: "Fast, seekable, dependency-free local network media streamer built with Next.js 16 and Tailwind CSS v4, supporting phone remote control casting.", 
    longDesc: "myTV is a lightweight, zero-dependency **local network media streamer** designed to index and cast high-definition video collections to any device. It bypasses the overhead of heavy media servers (Plex, Emby) by implementing a custom **HTTP Range-Request stream engine** in Next.js Route Handlers. The system couples recursive local folder crawling with a **phone pairing remote controller** over mobile sockets, allowing users to scan a QR code on their Smart TV and cast, play, seek, and query their local library directly from their phone browser.", 
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "Node.js Streams", "HTTP Range API", "WebVTT Subtitles", "Secure Sandboxing"], 
    url: "https://github.com/prasanna192005/myTv", 
    live: null, 
    color: "#E91E63", 
    role: "Lead Architect & Systems Designer", 
    timeframe: "Operational Release (2026)", 
    features: [ 
      "Seekable Stream Engine: Custom Node.js streams rendering HTTP 206 Partial Content range responses to handle seek actions on massive **20GB+ files** smoothly.", 
      "Phone Pairing Remote: QR-code pairing matrix to cast videos, seek, control volume, and use **mobile keyboards** to query library titles.", 
      "SRT to WebVTT Compiler: On-the-fly parsing that converts subtitle files into **WebVTT formats** and syncs display parameters across keyboard hotkeys and remote controls.", 
      "Smart Library Caching: Persists directory history metadata to enable **single-click folder switching** and local storage playback state tracking.", 
      "Stand-alone Slideshow: Scans image files and renders high-res slideshow arrays controlled directly from a **smartphone dashboard**." 
    ], 
    logicDesc: "Handles recursive file crawls locally via Node.js file system API, indexing video, subtitle, and image paths dynamically. Video streams use chunked buffer response streams to bypass memory locks, while the remote control synchronizes casting actions via lightweight in-memory pairing channels.", 
    aestheticDesc: "Implements a high-contrast dark television grid UI, combining clean monospaced playback overlay displays, bold red progress meters, and responsive player sandboxes for comfortable viewing." 
  },
];
