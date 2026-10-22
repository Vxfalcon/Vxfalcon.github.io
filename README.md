# TrueSight / Vx.Falcon portfolio

A static, noir-inspired portfolio. GitHub Pages publishes `main` from the repository root.

## Edit and preview

- `index.html`: project descriptions, links and page structure. All eight projects are present without JavaScript.
- `styles.css`: responsive layout, charcoal/brass palette and typography.
- `script.js`: mobile navigation, section indicators, one-time reveals and Discord username copying.
- `assets/`: Copper imagery, an original SVG architectural illustration and self-hosted fonts. Font licenses are in `assets/fonts/`.

Run `python -m http.server 8099 --bind 127.0.0.1` from this folder, then open http://127.0.0.1:8099/.
No build, framework or package installation is required.

The visual mood references the slowed Shadows of Evil round-change music. No recording, lyrics or third-party artwork is embedded. The architecture illustration is original. There is no autoplay audio, particle loop, third-party widget or remote font dependency. Existing `audio/` files are retained from the previous portfolio and are not loaded.

The Constellations SMP showcase uses a compressed 720p H.264/AAC MP4 with a JPEG poster, native controls and `preload="none"`. The original source video is not stored in this repository.

Obsidian Anticheat has its own project section at `#obsidian`, with the supplied 25-second H.264/AAC trailer and a poster extracted from it. It uses native controls, inline playback and `preload="none"`, with no autoplay or third-party video embed.
