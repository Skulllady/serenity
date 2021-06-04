from app.models import db, Account

# Adds a demo user, you can add other users here if you want
def seed_accounts():

    a1 = Account(account_number="225456321", account_name="John F. Smith", account_type="Checking Account",institution="Commonwealth Bank",balance=456,user_id=1)
    a2 = Account(account_number="335456322", account_name="John F. Smith", account_type="Savings Account",institution="Westpac Bank",balance=5000,user_id=1)
    a3 = Account(account_number="445456323", account_name="John F. Smith", account_type="Loan Account",institution="Bendigo Bank",balance=850,user_id=1)
    a4 = Account(account_number="555456324", account_name="John F. Smith", account_type="Investment Account",institution="National Australian Bank",balance=2500,user_id=1)

    db.session.add(a1)
    db.session.add(a2)
    db.session.add(a3)
    db.session.add(a4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_accounts():
    db.session.execute('TRUNCATE accounts RESTART IDENTITY CASCADE;')
    db.session.commit()
