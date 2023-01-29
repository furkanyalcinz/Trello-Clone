from DataAccess.UserDal import UserDal
from flask import request, make_response, jsonify
import jwt
from datetime import datetime, timedelta
from Common import configuration
from Entities.User import User
user_dal = UserDal()


class UserManager:

    def register(self):
        user = User()
        try:

            if request.is_json:
                data = request.get_json()
                user.Email = data["email"]
                user.Password = data["password"]
            user_dal.add_user(user)
            return [{"message":"User added"}]
        except Exception as ex:
            return [{"message":"something went wrong", "error": str(ex)}]

    def login(self):
        auth = request.authorization
        
        if not auth or not auth.username or not auth.password:
            return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})
        user = user_dal.get_by_email(auth.username)

        if not user:
            return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})
        
        if auth.password == user.Password:
            token = jwt.encode({'id' : user.Id, 'email':user.Email, 'exp' : datetime.utcnow() + timedelta(minutes=30)}, configuration.SECRET_KEY, algorithm="HS256")
            
            return jsonify({'token' : token})


    def get_users(self,):

        users = user_dal.getAll()
        result = [
            {
                "id": user.Id,
                "email": user.Email,
                "password": user.Password
            } for user in users
        ]
        return {'users': result}

    def get_user_by_id(self, id):

        user = user_dal.get_by_id(id)
        if user is None:
            return {"message":"There is no user"}
        result = {
            "id": user.Id,
            "email": user.Email,
            "password": user.Password}
        return result
