# Design System Specification: Sanskriti × Vigyanam (v2.7.0)

## 1. Core Architecture Philosophy
The design system fuses traditional Indian heritage aesthetics (**Sanskriti**) with high-precision digital telemetry (**Vigyanam**). It bridges the gap between historical organic ornamentation (mandalas, calligraphic vertical scripts, khadi textures) and raw command-line/cybernetic diagnostics (monospaced type, responsive coordinate maps, layout alignment brackets). 

Every layout page must maintain this dual-identity:
- **Heritage (Sanskriti)**: Deep rich colors (Indigo, Crimson, Gold), serif typography, hand-made textures, and geometric watermarks.
- **Science (Vigyanam)**: Micro-telemetry lines, pixelated metadata tags, grid coordinates, and raw digital parameters.

---

## 2. Color Palette & Accessibility Matrix

All elements must adhere to the following color tokens:

### A. Primary Colors
- **Patrika Cream (`#FDFBF7`)**: The primary surface background. Recalls high-quality traditional khadi paper or ancient manuscripts.
- **Abyssal Black (`#121212`)**: The primary text color. High contrast, charcoal-black for rich readability. Never use pure `#000000`.

### B. Accent & Jewel Tones
- **Martyr Red (`#FF1F00`)**: Primary alert and structural highlight. Used for border highlights, hover targets, status nodes, and visual breaks.
- **Temple Gold (`#FFA502`)**: Decorative borders, brackets, hanging lotus bells, and accent lines. Recalls brass instruments and altar decoration.
- **Royal Indigo (`#2563EB`)**: High-impact brand color. Deep blue used for main page headers, prominent cards, or selected workspace widgets.
- **Altar Crimson (`#D62238`)**: Saturated crimson used for traditional motifs, active states, and custom underlines.

### C. Contrast & Layout Color Map
For pages with colored backdrops (like Project Details), use consistent, deep jewel-tone gradients (e.g. from deep crimson, indigo, or forest green) mapped exactly to project IDs:
- **01 (ObservoAI)**: `bg-gradient-to-br from-[#8C1B1B] via-[#C62828] to-[#500C0C]` (Red)
- **02 (MyBuddy)**: `bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#0A2E66]` (Blue)
- **03 (AKSHAR)**: `bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#113B15]` (Tactical Green)
- **04 (Seedhe CMD)**: `bg-gradient-to-br from-[#D84315] via-[#E65100] to-[#8E2400]` (Orange)
- **05 (Anchor19)**: `bg-gradient-to-br from-[#004D40] via-[#00796B] to-[#00251A]` (Teal)
- **06 (Pulse)**: `bg-gradient-to-br from-[#1A237E] via-[#3F51B5] to-[#0D1340]` (Indigo)
- **07 (QR19)**: `bg-gradient-to-br from-[#4A148C] via-[#7B1FA2] to-[#250352]` (Purple)
- **08 (Code We Met)**: `bg-gradient-to-br from-[#1B5E20] via-[#00C853] to-[#072B0D]` (Neon Green)
- **09 (myTV)**: `bg-gradient-to-br from-[#880E4F] via-[#AD1457] to-[#4A0022]` (Velvet Rose)

---

## 3. Typographical Hierarchy

Always pair typography to reflect Sanskriti × Vigyanam:

1. **Heritage Narrative (Serif / Playfair Display or equivalent)**
   - **Role**: Emotional prose, high-fidelity headers, quotations.
   - **Styling**: Italicized, lowercase emphasis, tight tracking (`tracking-tight`).
   - **Tailwind**: `font-serif italic tracking-tight`

2. **Structural Identity (Sans-Serif / Helvetica or Inter)**
   - **Role**: Main UI labels, navigation buttons, major titles.
   - **Styling**: Bold, uppercase, tracked-out for high impact.
   - **Tailwind**: `font-sans font-bold uppercase tracking-wider`

3. **Technical Metadata (Monospace / Pixel)**
   - **Role**: Telemetry tags, system counters, system logs, code parameters.
   - **Styling**: Small size, wide tracking (`tracking-[0.3em]` or `tracking-[0.4em]`), monospaced block highlights.
   - **Tailwind**: `font-mono font-pixel text-[10px] uppercase tracking-widest`

---

## 4. Visual Elements & Layering Structure

To maintain a premium, tactile layer space, follow this layering index:

### A. Layers (Z-Index Hierarchy)
- `z-0`: Background grids, Jaali lattice overlays, and watermarks.
- `z-10`: Mid-ground paper texture (`grain-overlay`), scroll coordinates, and ghost lettering.
- `z-20`: Grid card frames, border outlines, and section markers.
- `z-30`: Floating menus, buttons, interactive hover containers.
- `z-[100]`: Dynamic preloader overlays, persistent header nav, and progress indicators.

### B. Custom Assets & CSS Classes
- **Khadi Grain Overlay (`.grain-overlay`)**: A background cover at `0.08` opacity or below that generates paper texture. Shifted behind content via `relative z-10`.
- **Jaali Lattice Grid (`.jaali-grid`)**: A geometric matrix pattern overlay at `0.05` opacity to simulate traditional Indian screen structures.
- **Temple Corner Brackets**: Scalable SVG lines drawn at the borders of index cards or detail hero sections to frame the layout.
- **Vertical Ghost Scripting**: Calligraphic Sanskrit glyphs rendered at `0.03` opacity on the left and right margins of the viewport.
- **Lotus Bell Chains**: Linear hanging paths with a bell anchor SVG, symbolizing traditional entry gateways.

---

## 5. Animation, Motion & Hover Behaviors

All motion must feel fluid, organic, yet structurally responsive:

- **Floating Translation**: On hover, interactive cards should translate upward (`translate-y-[-4px]` to `translate-y-[-8px]`) with smooth cubic-bezier transitions (`transition-all duration-700`).
- **Centric Mandala Spin**: SVG Mandalas positioned as background watermarks must rotate continuously at a slow rate (`animate-[spin_180s_linear_infinite]`).
- **Elastic Scale**: Buttons or cards utilizing Framer Motion should animate scale transitions dynamically using a spring curve (`transition: { type: "spring", stiffness: 300, damping: 20 }`).
- **ScrollChakra Color Sync**: The circular scroll-progress indicator is colored dynamically. On the homepage (`/`), it transitions from white to red to match contrast bounds. On light subpages (Resume, Projects, Design), it must maintain a Martyr Red (`#FF1F00`) outline with a solid white inner circle to remain visible against Patrika Cream surfaces.

---

## 6. Implementation Rules for Code Generation
When writing pages or modifying layouts:
1. **Never use generic placeholders**. If an image or asset is required, use stylized SVGs with dynamic dimensions.
2. **Support Responsive Columns**: Convert grid layouts (`grid-cols-4`) to stack on narrow viewports (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`).
3. **Print Integrity**: Mark all decorative SVGs, preloader screens, and scroll indicators with `print-hidden` to avoid cluttering PDF exports.
4. **Copywriting Tone**: Keep narrative descriptions crisp, using highlighting wrappers (`**term**` for bold text, `__term__` for thick red underline accents) that are processed dynamically in text layout blocks.
