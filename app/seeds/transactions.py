from app.models import db, Transaction

# Adds a demo user, you can add other users here if you want
def seed_transactions():

    t1 = Transaction(date=20210602, transaction="Walmart Groceries", amount=289.52, account_id=1, category_id=1)

    db.session.add(t1)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_transactions():
    db.session.execute('TRUNCATE transactions RESTART IDENTITY CASCADE;')
    db.session.commit()
