import sys
import database.models
from server_app import app
from flask import jsonify


@app.route("/api/help")
def api_help():
    return jsonify({"/api/categories/" : 'get all category',
                    "/api/category/<category_name>" : 'get all offer by category',
                    "/api/offer" : 'get all offer',
                    "/api/offer/<id>" : 'get offer by id',
                    "/api/search/<word>" : 'search by word'})


@app.route("/api/demo")
def api_demo():
    return "{ name: 'demo' }"


# get all category
@app.route("/api/categories/")
def api_categories():
    cat = database.models.Category.query.all()
    return str(cat)


# get all offer by category
@app.route("/api/category/<category_name>")
def api_category(category_name):
    return 'get all offer by category'


# get all offer
@app.route("/api/offer")
def api_offer():
    return 'get all offer'


# get offer by id
@app.route("/api/offer/<id>")
def api_offer(id):
    return 'get offer by id'


# search
@app.route("/api/search/<word>")
def api_search(word):
    return 'search'
