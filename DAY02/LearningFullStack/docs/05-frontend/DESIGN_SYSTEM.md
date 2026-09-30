# DESIGN_SYSTEM

Source: Figma (canonical, `UNRESOLVED` — link TBD). Tokens first, no per-page styles.

Tokens: typography scale, spacing (4pt), semantic colors (bg/surface/border/text/primary/danger/success/warn + dark), radii, shadows/elevation, icons (Lucide only).
Components: Button/Input/Dropdown/Dialog/Drawer/Table/Card/Badge/Tooltip/CommandMenu/Sidebar/Avatar/Charts/Notification/AIMessage/AIComposer + Loading/Empty/Error states.
Rules: shadcn base + tokens; Storybook stories for each (realistic states + interaction tests where valuable); contrast + keyboard + focus + reduced-motion; responsive collapse rules per screen.
