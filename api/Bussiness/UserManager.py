from DataAccess.UserDal import UserDal
user_dal = UserDal()


class UserManager:

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
