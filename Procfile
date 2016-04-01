web: gunicorn -w 4 -b "0.0.0.0:$PORT" app:app
init: python db/db_create.py
test_samples: python db/database_test_samples.py
