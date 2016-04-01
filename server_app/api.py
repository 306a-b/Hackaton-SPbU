import sys
import database.models
from server_app import app
from flask import jsonify


@app.route("/api/help")
def api_help():
    return jsonify({"/api/categories/" : 'get all categories',
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
@app.route("/api/category/<id>")
def api_offer_by_category(id):
    return str(database.models.Category.query.get(id))


# get all offer
@app.route("/api/offers")
def api_all_offers():
    off = database.models.Offer.query.all()
    return str(off)


# get offer by id
@app.route("/api/offer/<id>")
def api_offer_by_id(id):
    return str(database.models.Offer.query.get(id))


# search
@app.route("/api/search/<word>")
def api_search(word):
    # result = search()
    return 'search'
