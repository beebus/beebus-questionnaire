# Beebus Questionnaire Frontend

React frontend for a simple React-Django questionnaire app.

The backend lives alongside this folder at [`../backend`](../backend).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (bundled with Node.js)

## Getting Started

Install dependencies:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at http://localhost:3000.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production (output to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run tests in watch mode |
| `npm test -- --run` | Run tests once and exit |
| `npm run test:ui` | Open the Vitest browser UI |

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) — build tool and dev server
- [React Router](https://reactrouter.com/) — client-side routing
- [Axios](https://axios-http.com/) — HTTP client
