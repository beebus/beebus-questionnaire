# Beebus Questionnaire

A simple React/Django questionnaire app, split into two independently runnable pieces in this repo:

- [`backend/`](backend) — Django + Django REST Framework API. See [backend/README.md](backend/README.md) for setup.
- [`frontend/`](frontend) — React + Vite app. See [frontend/README.md](frontend/README.md) for setup.

CI (`.github/workflows/ci.yml`) runs backend and frontend checks as separate jobs, each only when files under that folder change.
