from flask import Blueprint, request
from Bussiness import TodoManager
from Common.token_required import token_required

todo_request = Blueprint("todo_request", import_name=__name__)



@todo_request.route("/todos", methods=["GET"])
@token_required
def get_all(current_user):
        return TodoManager.get_all_todo()

@todo_request.route("/todo/<id>", methods=["GET"])
@token_required
def get_by_id(current_user, id):
        return TodoManager.get_by_id(id)

@todo_request.route("/create_todo", methods=["POST"])
@token_required
def add_todo(current_user):
        return TodoManager.add_todo()

@todo_request.route("/update_todo", methods=["PUT"])
@token_required
def update_todo(current_user):
        return TodoManager.update_todo()