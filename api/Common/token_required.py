from functools import wraps
from flask import request, jsonify
import jwt
from Common.configuration import SECRET_KEY
from Entities.User import User
from db import db


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message' : 'Token is missing!'}), 401

        try: 
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            current_user:User = db.session.query(User).filter_by(Id=data['id']).first()   
        except:
            return jsonify({'message' : 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated