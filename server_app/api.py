from database.models import Offer, Category
from flask import render_template
from server_app import app


@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')


@app.route("/api/demo")
def api_demo():
    return 'demo'


@app.route("/api/category/")
def api_category():
    cat = Category.query.all()
    return cat
