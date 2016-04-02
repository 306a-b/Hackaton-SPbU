web: gunicorn -w 4 -b "0.0.0.0:$PORT" runapp:app
init: python database/db_create.py
drop: python database/db_drop.py
test_samples: python database/db_drop.py database/db_create.py database/database_test_samples.py
