# Personal Portfolio

A responsive React and Vite portfolio with cream tones, editorial typography, and plain CSS.

## Start locally

Requires Node.js 20.19+ or 22.12+ (Node 24 also works) and npm. Run these commands from this folder:

```bash
npm install
npm run dev
```

Open the Local URL printed by Vite, usually http://127.0.0.1:5173.

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Included

- Hero with initials artwork or your own photo
- Illustrative project concepts with CSS artwork and expandable case studies
- About, services, categorized skills, experience, and education
- Testimonials with an honest empty state until real quotes are supplied
- Contact form that prepares an email draft, with native field validation
- Downloadable placeholder resume PDF
- Mobile navigation, keyboard focus styles, skip link, and reduced-motion support
- Responsive layouts and optional GitHub/LinkedIn links

## Make it yours

Edit the constants at the top of `src/Portfolio.jsx`:

| Constant | Content |
| --- | --- |
| `PROFILE` | Name, initials, role, introduction, email, photo, resume, social links |
| `PROJECTS` | Names, summaries, case studies, tags, live/source URLs |
| `SERVICES` | Services offered |
| `SKILLS` | Skill categories and items |
| `TIMELINE` | Experience and education |
| `TESTIMONIALS` | Real quotes with `quote`, `name`, and `role` fields |

Edit the hero headline directly in the hero markup. Project artwork is made with CSS; replace the `Artwork` component with screenshots for real projects.

Before sharing, replace sample content with accurate information and remove the sample notes. No professional history or endorsements have been invented.

Put your photo in `public/` and set `PROFILE.photo` to `/me.jpg`, for example. Leave it empty for initials. Replace `public/resume.pdf` with your own PDF: the included download is a clearly labelled template.

Add full HTTPS URLs to project `live` / `source` and profile `github` / `linkedin` fields to show their links. Empty links are hidden.

Edit `index.html` for the browser title and description, and `public/favicon.svg` for the favicon. Change palette variables in `.pf` in `src/Portfolio.css`. Fonts are Jost and Source Serif 4 from Google Fonts, with system fallbacks.

## Contact behavior

The form prepares a `mailto:` draft for `PROFILE.email`. Visitors must review and send it in their email app. The site does not send, store, or confirm delivery of messages. A direct email link is provided as a fallback.

## Structure

```text
Personal_Profile/
  index.html
  package.json
  public/
    favicon.svg
    resume.pdf
  scripts/
    create-resume.mjs
  src/
    main.jsx
    Portfolio.jsx
    Portfolio.css
```

## Deployment

Run `npm run build`, then deploy `dist/` to a static host. Use build command `npm run build` and output directory `dist`. No backend is needed.

Default asset paths assume hosting at a domain root. For deployment under a repository subpath, configure Vite's `base` and base-aware public asset paths first.

## License

No formal license has been selected. Add one appropriate to your intended distribution before redistributing this project.
