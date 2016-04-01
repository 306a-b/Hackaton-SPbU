from flask import Flask, render_template

app = Flask(__name__, template_folder='')
app.config['SQLALCHEMY_DATBASE_URI'] = 'sqlite:////tmp/base.db'
db = SQLAlchemy(app)

@app.route("/")
def index():
    return render_template('index.html')


@app.route("/api/demo")
def api_demo():
    return 'demo'


if __name__ == '__main__':
    app.run(debug=True)