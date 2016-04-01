from app import app, db
import json


class Offer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    time = db.Column(db.String(100))
    category_id = db.Column(db.ForeignKey('category.id'))
    category = db.relationship('Category', backref=db.backref('offers', lazy='dynamic'))
    desc = db.Column(db.String(500))
    geo = db.Column(db.String(20))
    url = db.Column(db.String(40))
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
        return json.dumps({'name': self.name,
                           'time': self.time,
                           'category': self.category,
                           'desc': self.desc,
                           'geo': self.geo,
                           'url': self.url,
                           'tag': self.tag})


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return json.dumps({'name': self.name})

