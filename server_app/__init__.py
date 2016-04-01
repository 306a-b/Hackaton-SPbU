import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='..', static_folder='', static_url_path='')
db = SQLAlchemy(app)

isHeroku = os.environ.get('HEROKU') is not None

if isHeroku:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
else:
    app.config['SQLALCHEMY_BINDS'] = {
        'category' : 'sqlite:///category.db',
        'offer' : 'sqlite:///offer.db'
    }
    #app.config['SQLALCHEMY_DATBASE_URI'] = 'sqlite:////tmp/base.db'
    import database.db_create
    import database.database_test_samples

import server_app.api
import server_app.frontend