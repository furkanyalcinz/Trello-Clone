from flask import Blueprint
from Bussiness.UserManager import UserManager

user_manager = UserManager()
user_request = Blueprint("user_request", import_name=__name__)



@user_request.route("/users", methods=["GET"])
def get_all():
        return user_manager.get_users()

@user_request.route("/user/<id>", methods=["GET"])
def get_user_by_id(id):
        print(id)
        return user_manager.get_user_by_id(id)





            

