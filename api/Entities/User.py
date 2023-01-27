from db import db

from dataclasses import dataclass
@dataclass
class User(db.Model):
    __tablename__ = "Users"
    Id = db.Column(db.Integer, primary_key = True)
    Email = db.Column(db.String())
    Password = db.Column(db.String())

 
    def __init__(self, Id, Email, Password) -> None:
        self.Id = Id
        self.Email = Email
        self.Password = Password
        super(User, self).__init__()
    