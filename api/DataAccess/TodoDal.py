from Entities.Todo import Todo
from db import db


def get_all_todo() -> list[Todo]:
    return db.session.execute(db.select(Todo)).scalars()


def add_todo(todo:Todo):
    db.session.add(todo)
    db.session.commit()


def get_by_id(id) -> Todo:
    return db.session.query(Todo).filter_by(Id = id).first()


def update_todo(todoUpdated:Todo):
    todo = get_by_id(todoUpdated.Id)
    todo.Title = todoUpdated.Title
    todo.Description = todoUpdated.Description
    todo.Status = todoUpdated.Status
    todo.End_Date = todoUpdated.End_Date
    db.session.commit()


