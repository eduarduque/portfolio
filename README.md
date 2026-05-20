# Eduardo Duque — Portfolio

Personal portfolio website built with vanilla HTML, CSS, and JavaScript.

**Live site:** _coming soon (GitHub Pages)_

## Features

- Typing animation cycling through roles/titles
- Scroll fade-in animations on sections
- Active nav link highlighting on scroll
- Mobile-responsive with hamburger menu
- Dark theme with sky-blue accent

## Sections

- **About** — bio, photo, stats (GPA, credits, experience, languages)
- **Skills** — Programming, AI & APIs, Tools & Platforms, Soft Skills
- **Projects** — featured project cards with tech stack tags
- **Experience** — timeline of work history
- **Contact** — email, phone, location, GitHub, LinkedIn

## Stack

Plain HTML / CSS / JavaScript — no frameworks, no build step. Open `index.html` directly in a browser.

## Adding a project

Copy a project card block in `index.html` inside `.projects-grid` and fill in the details:

```html
<div class="project-card">
    <div class="project-header">
        <span class="project-badge">Your Tag</span>
        <a href="https://github.com/eduarduque/repo" target="_blank" rel="noopener" class="project-link">GitHub &rarr;</a>
    </div>
    <h3>Project Name</h3>
    <p>Description of what it does and why it matters.</p>
    <div class="project-tech">
        <span class="tag tag-accent">Tech</span>
        <span class="tag tag-accent">Stack</span>
    </div>
</div>
```

## Deployment

Hosted on GitHub Pages — push to `main` and the site updates automatically.
