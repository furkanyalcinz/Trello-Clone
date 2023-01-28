from flask import Blueprint, request
from Bussiness import TodoManager


todo_request = Blueprint("todo_request", import_name=__name__)



@todo_request.route("/todos", methods=["GET"])
def get_all():
        return TodoManager.get_all_todo()

@todo_request.route("/todo/<id>", methods=["GET"])
def get_by_id(id):
        return TodoManager.get_by_id(id)

@todo_request.route("/create_todo", methods=["POST"])
def add_todo():
        return TodoManager.add_todo()

@todo_request.route("/update_todo", methods=["PUT"])
def update_todo():
        return TodoManager.update_todo()