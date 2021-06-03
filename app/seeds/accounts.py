from app.models import db, Account

# Adds a demo user, you can add other users here if you want
def seed_accounts():

    a1 = Account(account_number="555456321", account_name="John F. Smith", account_type="Checking Account",institution="Bank Of America",balance=456,user_id=1)

    db.session.add(a1)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_accounts():
    db.session.execute('TRUNCATE accounts RESTART IDENTITY CASCADE;')
    db.session.commit()
