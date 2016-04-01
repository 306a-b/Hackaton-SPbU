from database.models import Offer, Category
from server_app import app


@app.route("/api/demo")
def api_demo():
    return 'demo'


@app.route("/api/category/")
def api_category():
    cat = Category.query.all()
    return cat.first()
