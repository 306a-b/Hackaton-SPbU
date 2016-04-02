import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

isHeroku = os.environ.get('HEROKU') is not None

app = Flask(__name__, template_folder='..', static_folder='', static_url_path='')
db = SQLAlchemy(app)
cors = CORS(app) # ВСЕ ЗАПРОСЫ МОГУТ ИМЕТЬ CORS
if isHeroku: # обязательный ssl только на heroku
    from flask_sslify import SSLify
    #print('ssl is on')
    sslify = SSLify(app)

# cors config
app.config['CORS_HEADERS'] = 'Content-Type'

# db config
if isHeroku:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
else:
    app.config['SQLALCHEMY_BINDS'] = {
        'category' : 'sqlite:///category.db',
        'offer' : 'sqlite:///offer.db'
    }
    #app.config['SQLALCHEMY_DATBASE_URI'] = 'sqlite:////tmp/base.db'
    #import database.db_create
    #import database.database_test_samples

import server_app.api
import server_app.frontend