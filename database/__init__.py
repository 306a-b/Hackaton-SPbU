import os
from flask_sqlalchemy import SQLAlchemy
from server_app import app

db = SQLAlchemy(app)

isHeroku = os.environ.get('HEROKU') is not None

if isHeroku:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
else:
    app.config['SQLALCHEMY_DATBASE_URI'] = 'sqlite:////tmp/base.db'
    #import database.db_create
    #import database.database_test_samples
