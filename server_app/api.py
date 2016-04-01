import sys
import database.models
from server_app import app


@app.route("/api/demo")
def api_demo():
    return 'demo'


@app.route("/api/category/")
def api_category():
    try:
        cat = database.models.Category.query.all()
        print(cat)
        sys.stdout.flush()
        return str(cat)
    except Exception as e:
        return str(e)
