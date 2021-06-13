from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.models import Account

class AccountForm(FlaskForm):
      accountNumber = StringField('accountNumber', validators=[DataRequired()])
      accountName = StringField('accountName', validators=[DataRequired()])
      accountType = StringField('accountType', validators=[DataRequired()])
      institution = StringField('institution', validators=[DataRequired()])
      balance = IntegerField('balance', validators=[DataRequired()])
      submit = SubmitField('Submit')
