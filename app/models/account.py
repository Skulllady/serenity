from .db import db
from sqlalchemy.orm import relationship


class Account(db.Model):
  __tablename__ = 'accounts'

  id = db.Column(db.Integer, primary_key = True)
  account_number = db.Column(db.String(255), nullable = False, unique = True)
  account_name = db.Column(db.String(255), nullable = False)
  account_type = db.Column(db.String(255), nullable = False)
  institution = db.Column(db.String(255), nullable = False)
  balance = db.Column(db.Numeric, nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  user = db.relationship("User", back_populates="account")
  transaction = db.relationship("Transaction", back_populates="account", cascade="all, delete-orphan")

  def to_dict(self):
    return {
      "id": self.id,
      "account_number": self.account_number,
      "account_name": self.account_name,
      "account_type": self.account_type,
      "institution": self.institution,
      "balance": self.balance,
      "user_id": self.user_id
    }
