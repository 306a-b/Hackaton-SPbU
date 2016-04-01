from database import db
from database.models import Offer, Category

cafe_cat = Category('Кафе')
db.session.add(Offer('Герард Миллер',
                     'ПН,ВТ,СР,ЧТ,ПТ,СБ,ВС|10:00-22:00|',
                     cafe_cat,
                     'вкусная шавуха',
                     '59.8748755,29.8265393',
                     '',
                     'шаверма шавуха еда пицца поесть кафе столовая паста'))
db.session.commit()