from flask_login import login_required, current_user
from flask import Blueprint, request
from app.models import db, User, Account, Transaction
from app.forms.account_form import AccountForm
from app.forms.transaction_form import TransactionForm
from datetime import datetime
import pandas as pd

"""------------------------------------------------------------------------"""
"""----------------Below this line is ACCOUNTS Functionality---------------"""
"""------------------------------------------------------------------------"""

resource_routes = Blueprint('accounts', __name__)

# LOAD ALL ACCOUNTS TO SIDEBAR
@resource_routes.route('/')
@login_required
def accounts():
  accounts = Account.query.all()
  return {"accounts": [account.to_dict() for account in accounts]}


# CREATE A NEW ACCOUNT
@resource_routes.route('/', methods=['POST'])
@login_required
def create_account():
  form = AccountForm()
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
  # return {'message': "All fields must be entered"}


# UPDATE EXISTING ACCOUNT
@resource_routes.route('/<int:id>/transactions', methods=['PUT'])
@login_required
def update_account(id):
  form = AccountForm()
  accountToUpdate = Account.query.get(id)
  accountToUpdate.account_number = form.data['accountNumber']
  accountToUpdate.account_name = form.data['accountName']
  accountToUpdate.account_type = form.data['accountType']
  accountToUpdate.institution = form.data['institution']
  accountToUpdate.balance = form.data['balance']
  accountToUpdate.user_id = current_user.id

  db.session.add(accountToUpdate)
  db.session.commit()
  return accountToUpdate.to_dict()

# DELETE AN ACCOUNT FROM SIDEBAR
@resource_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_account(id):
  account_to_delete = Account.query.get(id)
  db.session.delete(account_to_delete)
  db.session.commit()
  return ""
# TODO Do not allow other users to delete accounts that do not belong to them



"""------------------------------------------------------------------------"""
"""--------------Below this line is TRANSACTIONS Functionality-------------"""
"""------------------------------------------------------------------------"""

# LOAD ALL TRANSACTIONS FOR SELECTED ACCOUNT
# TODO: Do not allow user to access other users' transactions
@resource_routes.route('/<int:id>/transactions')
@login_required
def account_transactions(id):
  transactions = Transaction.query.filter(Transaction.account_id == id)

  # sort by user selection on column header and assign sort direction
  sort_by = request.args.get('sort_by')
  sort_direction = request.args.get('sort_direction')
  if sort_by:
    # Sort by column
    if sort_by == "date":
      column_to_sort = Transaction.date
    else:
      raise Exception(f"Sort by parameter {sort_by} not recognized")
    if sort_direction == "asc":
      column_to_sort = column_to_sort.asc()
    elif sort_direction == "desc":
      column_to_sort = column_to_sort.desc()
    else:
      raise Exception(f"Sort direction parameter {sort_direction} not recognized")
    transactions = transactions.order_by(column_to_sort)

  return {"transactions": [transaction.to_dict() for transaction in transactions]}



# UPLOAD TRANSACTIONS FOR SELECTED ACCOUNT
@resource_routes.route('/<int:id>/transactions/upload', methods=['POST'])
@login_required
def account_transactions_upload(id):
  file = request.files['file']
  rowsOfData = pd.read_csv(file, sep = ",", header = None, names = ['Date','Transaction','Amount $USD'])
  arrayOfTransactionsToBulkInsert = []
  for index, row in rowsOfData.iterrows():
    newTransaction = Transaction(
      date = datetime.strptime(row['Date'], '%m/%d/%Y').date(),
      transaction = row['Transaction'],
      amount = row['Amount $USD'],
      account_id = id
    )
    arrayOfTransactionsToBulkInsert.append(newTransaction)
  db.session.bulk_save_objects(arrayOfTransactionsToBulkInsert)
  db.session.commit()
  # print(f'HERE ARE ROWSSS: {rowsOfData.head()}')
  # print(f'HERE IS FIIIIILE NAME {file.filename}')
  return ''


# UPDATE CATEGORY ON TRANSACTION
@resource_routes.route('/<int:accountId>/transactions/<int:id>', methods=['PUT'])
@login_required
def update_transaction(accountId, id):
  form = TransactionForm()
  transactionToUpdate = Transaction.query.get(id)
  transactionToUpdate.category_id = form.data['categoryId']

  db.session.add(transactionToUpdate)
  db.session.commit()
  return transactionToUpdate.to_dict()
