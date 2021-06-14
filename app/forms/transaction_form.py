from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField
from wtforms.validators import DataRequired
from app.models import Transaction

class TransactionForm(FlaskForm):
      categoryId = IntegerField('categoryId', validators=[DataRequired()])
      submit = SubmitField('Submit')
