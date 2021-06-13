from app.models import db, Transaction
from datetime import date

# Adds a demo user, you can add other users here if you want
def seed_transactions():

    t1 = Transaction(date=date(2021,6,2), transaction="Walmart Groceries", amount=289.52, account_id=1, category_id=3)
    t2 = Transaction(date=date(2021,6,3), transaction="Amazon Prime Home", amount=310.28, account_id=1, category_id=3)
    t3 = Transaction(date=date(2021,6,4), transaction="Rent", amount=1200.00, account_id=1, category_id=1)
    t4 = Transaction(date=date(2021,6,5), transaction="Electricity Bill", amount=109.76, account_id=1, category_id=2)
    t5 = Transaction(date=date(2021,6,6), transaction="Water Bill", amount=88.87, account_id=1, category_id=2)
    t6 = Transaction(date=date(2021,6,7), transaction="Walmart Groceries", amount=42.12, account_id=1, category_id=3)
    t7 = Transaction(date=date(2021,6,7), transaction="Macys", amount=89.56, account_id=1, category_id=4)
    t8 = Transaction(date=date(2021,6,8), transaction="Ross", amount=45.65, account_id=1, category_id=4)
    t9 = Transaction(date=date(2021,6,8), transaction="Kohl's", amount=298.23, account_id=1, category_id=4)
    t10 = Transaction(date=date(2021,6,9), transaction="Burger King", amount=22.21, account_id=1, category_id=5)
    t11 = Transaction(date=date(2021,6,10), transaction="Pizza Hut", amount=33.65, account_id=1, category_id=5)
    t12 = Transaction(date=date(2021,6,11), transaction="McDonalds", amount=29.25, account_id=1, category_id=5)
    t13 = Transaction(date=date(2021,6,12), transaction="KFC", amount=25.32, account_id=1, category_id=5)
    t14 = Transaction(date=date(2021,6,12), transaction="Walmart Pharmacy", amount=53.89, account_id=1, category_id=6)
    t15 = Transaction(date=date(2021,6,13), transaction="Wendy's", amount=45.46, account_id=1, category_id=5)
    t16 = Transaction(date=date(2021,8,13), transaction="Transfer to savings", amount=2888.25, account_id=2, category_id=12)
    t16 = Transaction(date=date(2021,9,1), transaction="Transfer to savings", amount=3000.15, account_id=2, category_id=12)
    t17 = Transaction(date=date(2021,9,5), transaction="Student Loan", amount=-13000, account_id=3, category_id=13)
    t18 = Transaction(date=date(2021,9,15), transaction="401K Account", amount=15000, account_id=4, category_id=14)

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
