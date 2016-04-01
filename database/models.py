from server_app import db, isHeroku
import json


class Offer(db.Model):
    if not isHeroku:
        __bind_key__ = 'offer'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    time = db.Column(db.String(200))
    category_id = db.Column(db.ForeignKey('category.id'))
    category = db.relationship('Category', backref=db.backref('offers', lazy='dynamic'))
    desc = db.Column(db.String(500))
    geo = db.Column(db.PickleType)
    url = db.Column(db.String(100))
    tag = db.Column(db.String(100))

    def __init__(self, name, time, category, desc, geo, url, tag):
        self.name = name
        self.time = time
        self.category = category
        self.desc = desc
        self.geo = geo
        self.url = url
        self.tag = tag

    def __repr__(self):
        return json.dumps({'id': self.id,
                           'name': self.name,
                           'time': self.time,
                           'category_id': self.category_id,
                           'desc': self.desc,
                           'geo': self.geo,
                           'url': self.url,
                           'tag': self.tag})


class Category(db.Model):
    if not isHeroku:
        __bind_key__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return json.dumps({'id': self.id, 'name': self.name})
