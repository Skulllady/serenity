from .db import db
from sqlalchemy.orm import relationship

class Transaction(db.Model):
  __tablename__ = 'transactions'

  id = db.Column(db.Integer, primary_key = True)
  date = db.Column(db.Date, nullable = False)
  transaction = db.Column(db.String(255), nullable = False)
  amount = db.Column(db.Numeric, nullable = False)
  account_id = db.Column(db.Integer, db.ForeignKey("accounts.id"), nullable = False,)
  account = db.relationship("Account", back_populates="transaction")
  category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
  category = db.relationship("Category", back_populates="transaction")

  def to_dict(self):
    return {
      "id": self.id,
      "date": self.date,
      "transaction": self.transaction,
      "amount": self.amount,
      "account_id": self.account_id,
      "category_id": self.category_id,
      "category_name": self.category.category if self.category else 'Uncategorized'
    }
