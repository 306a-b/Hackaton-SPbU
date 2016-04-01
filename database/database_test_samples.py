from server_app import db
from database.models import Offer, Category

db.session.add(Category('Кафе'))
db.session.commit()