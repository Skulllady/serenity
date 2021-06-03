from flask.cli import AppGroup
from .users import seed_users, undo_users
from .accounts import seed_accounts, undo_accounts
from .transactions import seed_transactions, undo_transactions
from .categories import seed_categories, undo_categories

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_accounts()
    seed_categories()
    seed_transactions()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_accounts()
    undo_categories()
    undo_transactions()
    # Add other undo functions here
