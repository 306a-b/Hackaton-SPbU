from flask import Flask

app = Flask(__name__, template_folder='..', static_folder='', static_url_path='')

import server_app.api
import server_app.frontend