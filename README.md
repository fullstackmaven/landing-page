# Landing Page

This is a landing page project built with Astrojs.

## Tech Stacks

#### Frontend

- [Astro](https://astro.build/): Astro is used as the static site generator and front-end framework for building fast and efficient web pages.
- [React](https://reactjs.org/): React is utilized for building user interface components and managing the application's state.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is used for styling and creating responsive design components.

#### Make sure you have [pnpm](https://pnpm.io/) installed on your machine. pnpm is the package manager we use for this project.

## Getting Started

| Command                | Action                                                  |
| ---------------------- | ------------------------------------------------------- |
| `pnpm install`         | Installs dependencies                                   |
| `pnpm dev`             | Starts local dev server at `localhost:4321`             |
| `pnpm lint`            | Run Prettier and ESLint to ensure consistent formatting |
| `pnpm build`           | Build your production site to `./dist/`                 |
| `pnpm preview`         | Preview your build locally, before deploying            |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check`        |
| `pnpm astro -- --help` | Get help using the Astro CLI                            |

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
