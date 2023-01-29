from flask import Blueprint
from Bussiness.UserManager import UserManager
from Common.token_required import token_required
from Entities.User import User
user_manager = UserManager()
user_request = Blueprint("user_request", import_name=__name__)

@user_request.route("/register", methods=["POST"])
def register():
        user_manager.register()

@user_request.route("/login", methods=["POST"])
def login():
        return user_manager.login()

@user_request.route("/users", methods=["GET"])
@token_required
def get_all(current_user:User):
        return user_manager.get_users()

@user_request.route("/user/<id>", methods=["GET"])
@token_required
def get_user_by_id(current_user,id):
        print(id)
        return user_manager.get_user_by_id(id)





            

