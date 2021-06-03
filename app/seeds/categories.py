from app.models import db, Category

# Adds a demo user, you can add other users here if you want
def seed_categories():

    c1 = Category(category="Groceries")

    db.session.add(c1)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
