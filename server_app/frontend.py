import os
from server_app import app, cors
from flask import render_template, send_from_directory
from flask_cors import CORS


@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')


@app.route('/dist/<path:filename>')
def send_static(filename):
    root_dir = os.path.abspath(os.path.dirname(__file__))
    return send_from_directory(os.path.join(root_dir, os.pardir, 'dist'), filename)

