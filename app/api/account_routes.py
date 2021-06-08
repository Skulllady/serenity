from flask_login import login_required
from flask import Blueprint
from app.models import db, User, Account, Transaction

"""-------Below this line is ACCOUNTS Functionality------"""

account_routes = Blueprint('accounts', __name__)

# LOAD ALL ACCOUNTS tO SIDEBAR
@account_routes.route('/')
def accounts():
  accounts = Account.query.all()
  return {"accounts": [account.to_dict() for account in accounts]}


"""-------Below this line is TRANSACTIONS Functionality------"""

# LOAD ALL TRANSACTIONS FOR SELECTED ACCOUNT
@account_routes.route('/<int:id>/transactions')
@login_required
def account_transactions(id):
  transactions = Transaction.query.filter(Transaction.account_id == id)
  return {"transactions": [transaction.to_dict() for transaction in transactions]}
