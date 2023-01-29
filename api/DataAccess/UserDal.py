from Entities.User import User
from db import db

class UserDal():
    def getAll(self,) -> list[User]:
        return User.query.all()
    
    def get_by_id(self, id:int) -> User:
        user = db.session.query(User).filter_by(Id=id).first()
        return user
    
    def get_by_email(self, email:str) -> User:
        return db.session.query(User).filter_by(Email=email).first()
        
    def add_user(self, user: User):
        db.session.add(user)
        db.session.commit()