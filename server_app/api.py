import database.models as models
from server_app import app


@app.route("/api/demo")
def api_demo():
    return 'demo'


@app.route("/api/category/")
def api_category():
    cat = models.Category.query.all()
    return str(cat.first())
