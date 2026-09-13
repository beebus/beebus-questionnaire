This is the Django backend to a simple React/Django questionnaire app.

The frontend lives alongside this folder at [`../frontend`](../frontend).

## Running Locally (without Docker)

The app uses SQLite as its database, which is file-based and needs no separate server.

**1. Create and activate a virtual environment**

```powershell
python -m venv .venv
.venv\Scripts\activate
```

**2. Install dependencies**

```powershell
pip install -r requirements.txt
```

**3. Apply database migrations**

```powershell
cd backend
python manage.py migrate
```

**4. Start the development server**

```powershell
python manage.py runserver
```

The API will be available at http://127.0.0.1:8000/

## Running Tests

With the virtual environment active and dependencies installed:

```powershell
cd backend
python manage.py test
```

## Running Locally with Docker

**1. Build the image**

Run this from the repo root (the `backend/` folder is the build context):

```bash
docker build -t beebus-questionnaire ./backend
```

**2. Run the container**

```bash
docker run --rm --name beebus-questionnaire -p 8000:8000 -e SECRET_KEY=your-local-secret-key -e DEBUG=True -e ALLOWED_HOSTS=* beebus-questionnaire
```

`--rm` removes the container automatically once it stops (e.g. after Ctrl+C), so there's nothing left to clean up.

The API will be available at http://localhost:8000/

The SQLite database will be stored inside the container and will reset when the container is removed. To persist data between runs, mount a local directory:

```bash
docker run --rm --name beebus-questionnaire -p 8000:8000 \
  -e SECRET_KEY=your-local-secret-key \
  -e DEBUG=True \
  -e ALLOWED_HOSTS=* \
  -e DB_DIR=/mnt/data \
  -v $(pwd)/data:/mnt/data \
  beebus-questionnaire
```

**3. Run tests in the running container**

```bash
docker exec beebus-questionnaire python manage.py test
```

(If you didn't pass `--name`, find the container ID with `docker ps` and use that instead.)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/questionnaire/` | Submit a questionnaire response |
| GET | `/api/results/` | Retrieve all responses |
