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
@account_routes.route('/accounts/', methods=['POST'])
@login_required
def create_account(userId):
  form = CreateAccountForm()
  if form.validate_on_submit():
    new_account = Account(
      account_number=form.data['account_number'],
      account_name=form.data['account_name'],
      account_type=form.data['account_type'],
      institution=form.data['institution'],
      balance=form.data['balance'],
      user_id=current_user.id,
    )
    db.session.add(new_account)
    db.session.commit()
    return new_account.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

"""-------Below this line is TRANSACTIONS Functionality------"""

# LOAD ALL TRANSACTIONS FOR SELECTED ACCOUNT
@account_routes.route('/<int:id>/transactions')
@login_required
def account_transactions(id):
  transactions = Transaction.query.filter(Transaction.account_id == id)
  return {"transactions": [transaction.to_dict() for transaction in transactions]}
