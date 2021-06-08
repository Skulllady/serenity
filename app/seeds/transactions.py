from app.models import db, Transaction

# Adds a demo user, you can add other users here if you want
def seed_transactions():

    t1 = Transaction(date=20210602, transaction="Walmart Groceries", amount=289.52, account_id=1, category_id=3)
    t2 = Transaction(date=20210603, transaction="Amazon Prime Home", amount=310.28, account_id=1, category_id=3)
    t3 = Transaction(date=20210604, transaction="Rent", amount=1200.00, account_id=1, category_id=1)
    t4 = Transaction(date=20210605, transaction="Electricity Bill", amount=109.76, account_id=1, category_id=2)
    t5 = Transaction(date=20210606, transaction="Water Bill", amount=88.87, account_id=1, category_id=2)
    t6 = Transaction(date=20210607, transaction="Walmart Groceries", amount=42.12, account_id=1, category_id=3)
    t7 = Transaction(date=20210607, transaction="Macys", amount=89.56, account_id=1, category_id=4)
    t8 = Transaction(date=20210608, transaction="Ross", amount=45.65, account_id=1, category_id=4)
    t9 = Transaction(date=20210608, transaction="Kohl's", amount=298.23, account_id=1, category_id=4)
    t10 = Transaction(date=20210609, transaction="Burger King", amount=22.21, account_id=1, category_id=5)
    t11 = Transaction(date=20210610, transaction="Pizza Hut", amount=33.65, account_id=1, category_id=5)
    t12 = Transaction(date=20210611, transaction="McDonalds", amount=29.25, account_id=1, category_id=5)
    t13 = Transaction(date=20210612, transaction="KFC", amount=25.32, account_id=1, category_id=5)
    t14 = Transaction(date=20210612, transaction="Walmart Pharmacy", amount=53.89, account_id=1, category_id=6)
    t15 = Transaction(date=20210613, transaction="Wendy's", amount=45.46, account_id=1, category_id=5)
    t16 = Transaction(date=20210813, transaction="Transfer to savings", amount=2888.25, account_id=2)
    t17 = Transaction(date=20210901, transaction="Student Loan", amount=13000, account_id=3)
    t18 = Transaction(date=20210915, transaction="401K Account", amount=15000, account_id=4)

    db.session.add(t1)
    db.session.add(t2)
    db.session.add(t3)
    db.session.add(t4)
    db.session.add(t5)
    db.session.add(t6)
    db.session.add(t7)
    db.session.add(t8)
    db.session.add(t9)
    db.session.add(t10)
    db.session.add(t11)
    db.session.add(t12)
    db.session.add(t13)
    db.session.add(t14)
    db.session.add(t15)
    db.session.add(t16)
    db.session.add(t17)
    db.session.add(t18)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_transactions():
    db.session.execute('TRUNCATE transactions RESTART IDENTITY CASCADE;')
    db.session.commit()
