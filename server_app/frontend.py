import os
from server_app import app, cors
from flask import render_template, send_from_directory, request
from flask_cors import cross_origin


@app.route("/")
@app.route("/index")
@app.route("/dashboard")
@cross_origin()
def index():
    arg = request.args.to_dict()
    #return str(arg)
    return render_template('index.html', **arg)


@app.route('/dist/<path:filename>')
def send_static(filename):
    root_dir = os.path.abspath(os.path.dirname(__file__))
    return send_from_directory(os.path.join(root_dir, os.pardir, 'dist'), filename)

