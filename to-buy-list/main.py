from pymongo import MongoClient
import urllib
# from bson import ObjectId

# connecting project to mongodb
cluster = "mongodb+srv://DaYlAmYaT:" + urllib.parse.quote("EVANSchris@1981613") + \
    "@cluster0.rfhav9f.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(cluster)

# create databases
db1 = client.accountData
db2 = client.toBuyLists

# create collections
accounts = db1.accounts
lists = db2.lists

loged_in = False
attempt = 0
id

# handling log-in stuff
while not loged_in and attempt < 5:
    choice = input("\nLog In/ Sign Up (1/2): ")
    # prompting username and password
    if choice == "1":
        username = input("Username: ")
        account = accounts.find_one({"username": username})
        # checking if the usename and the password match
        if account:
            password = input("Password: ")
            if password == account["password"]:
                loged_in = True
                id = account["_id"]
            # handling wrong password
            else:
                attempt += 1
                print("Error: Wrong Password")
        # handling invalid username
        else:
            print("Error: Invalid Username")
    # creating a new account
    else:
        new_username = input("Create username: ")
        new_password = input("Create password: ")
        new_account = {
            "username": new_username,
            "password": new_password
        }
        accounts.insert_one(new_account)

# handling to-buy-list actions
if loged_in:
    print("\nSuccessfully logged into the account!\n")
    action = ""
    while action != "4":
        print("Actions:\n1. Display List\n2. Add item\n3. Remove item\n4. Log out\n")
        action = input("Enter action: ")
        # displaying the to-buy-list
        if action == "1":
            listData = list(lists.find({"matchingID": id}))
            if len(listData) != 0:
                print("\nTo-Buy-List:")
                for data in listData:
                    print(data["item"], "*", data["quantity"])
            else:
                print("\nNo items")
            print()
        # adding item into the to-buy-list
        elif action == "2":
            new_item = input("\nAdding Item: ")
            quantity = int(input("Adding quantity: "))
            items = list(lists.find({"matchingID": id, "item": new_item}))
            if len(items) == 0:
                item = {
                    "matchingID": id,
                    "item": new_item,
                    "quantity": quantity
                }
                lists.insert_one(item)
            else:
                item = items[0]
                new_quantity = item["quantity"] + quantity
                lists.update_one({"matchingID": id, "item": new_item}, {
                                 "$set": {"quantity": new_quantity}})
            print()
        # removing item from the to-buy-list
        elif action == "3":
            remove_item = input("\nRemoving Item: ")
            remove_quantity = int(input("Removing quantity: "))
            items = list(lists.find({"matchingID": id, "item": remove_item}))
            if len(items) == 0:
                print("No such item found")
            else:
                item = items[0]
                if item["quantity"] > remove_quantity:
                    new_quantity = item["quantity"] - remove_quantity
                    lists.update_one({"matchingID": id, "item": remove_item}, {
                        "$set": {"quantity": new_quantity}})
                else:
                    lists.delete_one({"matchingID": id, "item": remove_item})
            print()
        # log out from the account
        elif action == "4":
            print("Logged Out!")
            loged_in = False
            break
        # handling invalid action
        else:
            print("\nNo such action is available...\n")
# handling invalid log-in
else:
    print("Failed logging into an account...")
