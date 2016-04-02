import sys
import database.models
import json
from server_app import app, morph
from flask import jsonify, request


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
@app.route("/api/categories/add", methods=['POST'])
def api_add_category():
    jsn = request.get_json(force=True)
    category = database.models.Category(name=jsn['name'])
    try:
        database.models.db.session.add(category)
        database.models.db.session.commit()
        status = 'success'

    except:
        status = 'this user is already registered'
    database.models.db.session.close()
    return jsonify({'result': status})


# get all offer
@app.route("/api/offers/")
def api_all_offers():
    qr = database.models.Offer.query.all()
    return json.dumps([o.serialize for o in qr], ensure_ascii=False)


# get offer by id
@app.route("/api/offers/<id>")
def api_offer_by_id(id):
    qr = database.models.Offer.query.get(id)
    return json.dumps(qr.serialize, ensure_ascii=False)


# add offer
@app.route("/api/offers/add", methods=['POST'])
def api_add_offer():
    jsn = request.get_json(force=True)

    cat = database.models.Category.query.filter_by(name=jsn['category']).first()
    if cat is None:
        cat = database.models.Category(cat)
        database.models.db.session.add(cat)
        
    offer = database.models.Offer(name=jsn['name'],
                                  time=jsn['time'],
                                  category=jsn['category'],
                                  desc=jsn['desc'],
                                  geo=jsn['geo'],
                                  url=jsn['url'],
                                  tag=jsn['tag'])
    try:
        database.models.db.session.add(offer)
        database.models.db.session.commit()
        status = 'success'

    except:
        status = 'this user is already registered'
    database.models.db.session.close()
    return jsonify({'result': status})


# search
@app.route("/api/search/<phrase>")
def api_search(phrase):
    words = [morph.parse(x)[0].normal_form for x in phrase.split('+')]
    result = database.models.Offer.query.all()
    r_c = result[:]
    for word in words:
        for item in r_c:
            if word not in item.tag:
                result.remove(item)
        r_c = result[:]
    return json.dumps([o.serialize for o in result], ensure_ascii=False)
