from app.models import db, Category

# Adds a demo user, you can add other users here if you want
def seed_categories():

    c1 = Category(category="Rent&Mortgage")
    c2 = Category(category="Bills")
    c3 = Category(category="Groceries")
    c4 = Category(category="Shopping")
    c5 = Category(category="Eating Out")
    c6 = Category(category="Medical")

    db.session.add(c1)
    db.session.add(c2)
    db.session.add(c3)
    db.session.add(c4)
    db.session.add(c5)
    db.session.add(c6)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
