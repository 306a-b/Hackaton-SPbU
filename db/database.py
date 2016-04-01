from app import app, db
import json

class Offer(db.Model):
    ID = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    time = db.Column(db.String(100))
    category = db.Column(db.foreign)
    desc = db.Column(db.String(500))
    geo = db.Column(db.String(20))
    url = db.Column(db.String(40))
    tag = db.Column(db.String(100))

    def __init__(self, ID, name, time, category, desc, geo, url, tag):
        self.ID = ID
        self.name = name
        self.time = time
        self.category = category
        self.desc = desc
        self.geo = geo
        self.url = url
        self.tag = tag

    def __repr__(self):
        return json.dumps({'id': self.ID,
                           'name': self.name,
                           })


class Category(db.Model):
    ID = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)

    def __init__(self, ID, name):
        self.ID = ID
        self.name = name

    def __repr__(self):
        return  # json()

