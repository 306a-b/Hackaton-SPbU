import os
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='')

# env config
isHeroku = os.environ.get('HEROKU') is not None

# db config
db = SQLAlchemy(app)
if isHeroku:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
else:
    app.config['SQLALCHEMY_DATBASE_URI'] = 'sqlite:////tmp/base.db'


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/api/demo")
def api_demo():
    return 'demo'


if __name__ == '__main__':
    app.run(debug=True)