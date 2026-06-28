This is the Django backend to a simple React/Django questionnaire app.

The front end of the code is located at https://github.com/beebus/beebus-questionnaire-frontend

http://beebus-questionnaire.s3-website-us-east-1.amazonaws.com/

## Running the Backend Locally

No Docker is required. The app uses SQLite as its database, which is file-based and needs no separate server.

**1. Create and activate a virtual environment**

```powershell
python -m venv .venv
.venv\Scripts\activate
```

**2. Install dependencies**

```powershell
pip install django djangorestframework django-cors-headers
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
