# LEGACY PROJECT - DO NOT EXTEND

**Status:** Deprecated - migrated to `infrasense_landing_start`

## OVERVIEW

Original React landing page. Superseded by TanStack Start version.

## WHY DEPRECATED

- Uses `lucide-react` (project standardized on HugeIcons)
- Uses `react-router-dom` (project uses TanStack Router)
- Flat structure (no `src/` directory)
- No Prettier/ESLint configuration

## IF YOU MUST MODIFY

- Reference only for component logic/copy
- All new work goes to `../infrasense_landing_start/`
- Icons: map Lucide → HugeIcons equivalent

## STRUCTURE

```
infrasense-landing/
├── components/       # Landing sections (Hero, Navbar, etc.)
├── pages/            # LandingPage.tsx, DemoRequest.tsx
├── App.tsx           # React Router setup
├── index.tsx         # Entry point
└── types.ts          # Shared interfaces
```

## COMMANDS

```bash
bun run dev    # Port 3000
bun run build  # Vite build
```
