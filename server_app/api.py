import sys
import database.models
import json
import pymorphy2
from server_app import app
from flask import jsonify

morph = pymorphy2.MorphAnalyzer()


@app.route("/api/help")
def api_help():
    return jsonify({"/api/categories/": 'get all categories',
                    "/api/categories/<id>": 'get all offers by category',
                    "/api/offers": 'get all offers',
                    "/api/offers/<id>": 'get offers by id',
                    "/api/search/<phrase>": 'search by phrase (consists of words combined by "+"'})


@app.route("/api/demo")
def api_demo():
    return "{ name: 'demo' }"


# get all category
@app.route("/api/categories/")
def api_categories():
    qr = database.models.Category.query.all()
    return json.dumps([o.serialize for o in qr], ensure_ascii=False)


# get all offer by category
@app.route("/api/categories/<id>")
def api_offer_by_category(id):
    qr = database.models.Offer.query.filter_by(category_id=id).all()
    return json.dumps([o.serialize for o in qr], ensure_ascii=False)


# add category
@app.route("/api/categories/add")
def api_add_category():
    return "sample"


# get all offer
@app.route("/api/offers/")
def api_all_offers():
    qr = database.models.Offer.query.all()
    return json.dumps([o.serialize for o in qr], ensure_ascii=False)


# get offer by id
@app.route("/api/offers/<id>")
def api_offer_by_id(id):
    qr = database.models.Offer.query.get(id)
    return json.dumps([qr.serialize], ensure_ascii=False)


# add offer
@app.route("/api/offers/add")
def api_add_offer():
    return "sample"


# search
@app.route("/api/search/<phrase>")
def api_search(phrase):
    words = [morph.parse(x)[0].normal_form for x in phrase.split('+')]
    result = database.models.Offer.query.all()
    r_c = result[:]
    for word in words:
        for item in r_c:
            if word not in item.tag.split(" "):
                result.remove(item)
        r_c = result[:]
    return str(result)
