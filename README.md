This is the Django backend to a simple React/Django questionnaire app.

The front end of the code is located at https://github.com/beebus/beebus-questionnaire-frontend

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
cd beebus_questionnaire
python manage.py migrate
```

**4. Start the development server**

```powershell
python manage.py runserver
```

The API will be available at http://127.0.0.1:8000/

## Running Locally with Docker

**1. Build the image**

```bash
docker build -t beebus-questionnaire .
```

**2. Run the container**

```bash
docker run -p 8000:8000 -e SECRET_KEY=your-local-secret-key -e DEBUG=True -e ALLOWED_HOSTS=* beebus-questionnaire
```

The API will be available at http://localhost:8000/

The SQLite database will be stored inside the container and will reset when the container is removed. To persist data between runs, mount a local directory:

```bash
docker run -p 8000:8000 \
  -e SECRET_KEY=your-local-secret-key \
  -e DEBUG=True \
  -e ALLOWED_HOSTS=* \
  -e DB_DIR=/mnt/data \
  -v $(pwd)/data:/mnt/data \
  beebus-questionnaire
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/questionnaire/` | Submit a questionnaire response |
| GET | `/api/results/` | Retrieve all responses |
