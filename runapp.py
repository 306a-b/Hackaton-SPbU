from server_app import app, isHeroku

if __name__ == '__main__':
    app.run(debug=not isHeroku)