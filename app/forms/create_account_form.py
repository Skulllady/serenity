from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.models import Account

class CreateAccountForm(FlaskForm):
      account_number = IntegerField('account_number', validators=[DataRequired()])
      account_name = StringField('account_name', validators=[DataRequired()])
      account_type = StringField('account_type', validators=[DataRequired()])
      institution = StringField('institution', validators=[DataRequired()])
      balance = IntegerField('balance', validators=[DataRequired()])
      submit = SubmitField('Submit')
