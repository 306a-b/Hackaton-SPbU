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
@app.route("/api/categories/<id>")
def api_offer_by_category(id):
    res = []
    for item in database.models.Offer.query.all():
        if item.category_id == id:
            res.append(item)
    return res


# add category
@app.route("/api/categories/add")
def api_add_category():
    return "sample"


# get all offer
@app.route("/api/offers")
def api_all_offers():
    off = database.models.Offer.query.all()
    return str(off)


# get offer by id
@app.route("/api/offers/<id>")
def api_offer_by_id(id):
    return str(database.models.Offer.query.get(id))


# add offer
@app.route("/api/offers/add")
# search
@app.route("/api/search/<word>")
def api_search(word):
    # result = search()
    return 'search'

