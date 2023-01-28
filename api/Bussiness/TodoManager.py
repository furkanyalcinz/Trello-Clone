from DataAccess import  TodoDal
from Entities.Todo import Todo
from flask import  request
def get_all_todo():
    todos = TodoDal.get_all_todo()

    result = [
        {
            "id": todo.Id,
            "title": todo.Title,
            "description": todo.Description,
            "status": todo.Status,
            "endDate": todo.End_Date

        } for todo in todos
    ]
    return {'todos': result}

def get_by_id(id):
    result = []
    todo = TodoDal.get_by_id(id)
    if(todo is None):
        result = [{"message": "Could not find the todo"}]
    else:
        result = [
        {
            "id": todo.Id,
            "title": todo.Title,
            "description": todo.Description,
            "status": todo.Status,
            "endDate": todo.End_Date
        }
    ]
    return result

def add_todo():
    todo = Todo()

    if request.is_json:
        data = request.get_json()
        todo.Title = data["title"]
        todo.Status = data["status"]
        todo.Description = data["description"]
        todo.End_Date = data["endDate"]

    try:
        TodoDal.add_todo(todo)
        result = [{"message": "Todo added"}]
    except Exception as ex:
        result = [{"message": "Something went wrong", "error": str(ex)}]

    return result

def update_todo():
    todo = Todo()

    if request.is_json:
        data = request.get_json()
        todo.Id = data["id"]
        todo.Title = data["title"]
        todo.Status = data["status"]
        todo.Description = data["description"]
        todo.End_Date = data["endDate"]

    try:
        TodoDal.update_todo(todo)
        result = [{"message": "Todo updated"}]
    except Exception as ex:
        result = [{"message": "Something went wrong", "error":str(ex)}]
    return  result