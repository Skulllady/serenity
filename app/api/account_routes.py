from flask_login import login_required, current_user
from flask import Blueprint
from app.models import db, User, Account, Transaction
from app.forms.create_account_form import CreateAccountForm

"""-------Below this line is ACCOUNTS Functionality------"""

account_routes = Blueprint('accounts', __name__)

# LOAD ALL ACCOUNTS TO SIDEBAR
@account_routes.route('/')
@login_required
def accounts():
  accounts = Account.query.all()
  return {"accounts": [account.to_dict() for account in accounts]}


# CREATE A NEW ACCOUNT
@account_routes.route('/', methods=['POST'])
@login_required
def create_account():
  form = CreateAccountForm()
  # print(f'formMmMmMmMm{form}')
  if form.validate_on_submit():
    new_account = Account(
      account_number=form.data['accountNumber'],
      account_name=form.data['accountName'],
      account_type=form.data['accountType'],
      institution=form.data['institution'],
      balance=form.data['balance'],
      user_id=current_user.id,
      )
    db.session.add(new_account)
    db.session.commit()
    return new_account.to_dict()
  return {'message': "All fields must be entered"}

"""-------Below this line is TRANSACTIONS Functionality------"""

# LOAD ALL TRANSACTIONS FOR SELECTED ACCOUNT
@account_routes.route('/<int:id>/transactions')
@login_required
def account_transactions(id):
  transactions = Transaction.query.filter(Transaction.account_id == id)
  return {"transactions": [transaction.to_dict() for transaction in transactions]}
