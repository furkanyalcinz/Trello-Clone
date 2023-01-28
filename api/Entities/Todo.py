from db import db
from dataclasses import dataclass
@dataclass
class Todo(db.Model):
    __tablename__ = "Todos"
    Id = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String())
    Description = db.Column(db.String())
    Status = db.Column(db.String())
    End_Date = db.Column(db.DATETIME)


    def __init__(self, Title = None, Description = None, Status = None, End_Date = None):
        self.Title = Title
        self.Status = Status
        self.Description = Description
        self.End_Date = End_Date
        super(Todo, self).__init__()

