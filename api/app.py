from flask import Flask
from flask_migrate import Migrate
from db import db
from API.Controllers.UserController import user_request
from API.Controllers.TodoController import todo_request

app = Flask(__name__)

app.app_context()
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:12345@localhost:5432/ZRELLO"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
migrate = Migrate(app, db)

app.register_blueprint(user_request)
app.register_blueprint(todo_request)
db.init_app(app)



if __name__ == '__main__':
    app.run(debug=True)
