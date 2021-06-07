from flask_login import login_required
from flask import Blueprint
from app.models import db, User, Account, Transaction

"""-------Below this line is ACCOUNTS Functionality------"""

account_routes = Blueprint('accounts', __name__)

@account_routes.route('/')
def accounts():
  accounts = Account.query.all()
  return {"accounts": [account.to_dict() for account in accounts]}


"""-------Below this line is TRANSACTIONS Functionality------"""
