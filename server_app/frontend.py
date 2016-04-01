import os
from server_app import app
from flask import render_template, send_from_directory


@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')


@app.route('/dist/<path:filename>')
def send_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'dist'), filename)

