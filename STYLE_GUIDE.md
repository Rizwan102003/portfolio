# Portfolio Style Guide

## Design System Overview

This style guide defines the visual language and design tokens for a professional, minimal developer portfolio optimized for MAANG recruiters.

## Color Palette: Cool Professional

```css
/* Primary Colors */
--color-bg: #FFFFFF           /* Background */
--color-surface: #F6F7F9      /* Surface/Cards */
--color-primary: #0B5FFF      /* Primary Accent (Deep Blue) */
--color-secondary: #0BA38A    /* Secondary Accent (Teal) */

/* Text Colors */
--color-text: #0B1726         /* Primary Text (Very Dark Slate) */
--color-text-muted: #6B7280   /* Muted Text */

/* Border Colors */
--color-border: #E5E7EB       /* Standard Border */
--color-border-light: #F3F4F6 /* Light Border */
```

## Typography

### Font Stack
- **Primary**: Inter (400, 500, 600, 700)
- **Code**: JetBrains Mono
- **Fallback**: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif

### Scale & Hierarchy
```css
/* Responsive Typography */
--font-size-h1: clamp(28px, 5vw, 48px)  /* Mobile: 28-34px, Desktop: 40-48px */
--font-size-h2: clamp(22px, 4vw, 34px)  /* Mobile: 22-26px, Desktop: 28-34px */
--font-size-h3: clamp(18px, 3vw, 24px)  /* Mobile: 18-20px, Desktop: 22-24px */
--font-size-body: 16px                  /* Base body text */
--font-size-small: 14px                 /* Small text */
--font-size-xs: 12px                    /* Extra small text */

/* Line Heights */
--line-height-tight: 1.15     /* Headings */
--line-height-normal: 1.5     /* Body text */
--line-height-relaxed: 1.6    /* Large body text */
```

## Spacing Scale

Based on 16px base unit:
```css
--space-xs: 8px    /* 0.5u */
--space-sm: 16px   /* 1u */
--space-md: 24px   /* 1.5u */
--space-lg: 32px   /* 2u */
--space-xl: 48px   /* 3u */
--space-2xl: 64px  /* 4u */
```

## Layout Grid

```css
/* Container */
--max-width: 1100px
--gutter: 24px (desktop), 16px (mobile)

/* Grid System */
- 12-column grid
- Responsive breakpoints: 640px (mobile), 1024px (tablet), 1025px+ (desktop)
- Single column on mobile, 2-3 columns on desktop
```

## Component Specifications

### Buttons
```css
/* Primary CTA */
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 500;
}

/* Secondary CTA */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  padding: 12px 20px;
  border-radius: 10px;
}
```

### Cards
```css
.card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 32px;
  transition: all 180ms cubic-bezier(0.22, 0.9, 0.1, 1);
}

.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
}
```

### Badges
```css
.badge {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
}
```

## Animation Specifications

### Micro-interactions
```css
/* Entrance Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Timing */
--transition-fast: 180ms cubic-bezier(0.22, 0.9, 0.1, 1)
--transition-normal: 350ms cubic-bezier(0.22, 0.9, 0.1, 1)

/* Hover Effects */
- Scale: 1.02-1.04 on project cards
- Shadow increase on hover
- Subtle color transitions
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 640px) {
  /* Mobile styles */
  .container { padding: 0 16px; }
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}

@media (min-width: 641px) and (max-width: 1024px) {
  /* Tablet styles */
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1025px) {
  /* Desktop styles */
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

## Accessibility Standards

### Contrast Ratios
- Body text: 4.5:1 minimum
- Large headings: 3:1 minimum
- Interactive elements: 4.5:1 minimum

### Focus States
```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Semantic HTML
- Use proper heading hierarchy (H1-H3)
- Include ARIA labels for interactive elements
- Provide alt text for all images
- Use semantic landmarks (nav, main, section, article)

## Image Specifications

### Project Screenshots
- **Hero images**: 1920×1080px (16:9 aspect ratio)
- **Card thumbnails**: 1200×675px (16:9 aspect ratio)
- **Format**: JPG (80% quality) or PNG
- **Alt text**: Descriptive, concise phrases

### Icons
- **Size**: 20-24px for inline, 40-48px for hero/social
- **Style**: Simple line icons
- **Format**: SVG preferred

## Content Guidelines

### Microcopy Standards
- **Project titles**: 3-5 words
- **Taglines**: 8-12 words
- **Impact bullets**: 12-18 words with metrics
- **Tone**: Professional, concise, outcome-focused

### Example Content Templates
```
Hero Tagline: "Full-stack Java | Data Science | Cloud & DevOps"
Project Impact: "Reduced processing time by 48% and lowered infra costs by 22%"
Role Description: "Lead Backend Engineer"
```

## Print Styles

```css
@media print {
  .no-print { display: none; }
  body { background: white; color: black; }
  .card { border: 1px solid #ccc; }
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Guidelines

- Optimize images for web (WebP when possible)
- Use system fonts as fallbacks
- Minimize CSS bundle size
- Lazy load images below the fold
- Use CSS custom properties for theming