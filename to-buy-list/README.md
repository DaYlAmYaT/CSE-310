# Overview

In this project, it allows users to create a new account or log into their account. And after they logged into their account, they could add or remove items from the to-buy-list or display the list. And all the data they typed will be saved into the the Mongodb, which allows users to get the same list when they log in again.

[Software Demo Video](http://youtube.link.goes.here)

# Cloud Database

I used Mongodb in this project.

I created two databases on Mongodb:

- accounts
- to-buy-list

In the accounts database, the account collection saves users' username and password, which helps handling log-in stuff.
In the to-buy-list database, the items collection saves all the items that the users added into the list. And each item has its own id, item name, and the number of item they want to buy.

# Development Environment

- VS Code
- Python 3.9
- Mongodb
- GitHib

# Useful Websites

- [Visual Studio Code & GitHub](http://code.visualstudio.com/docs/editor/versioncontrol)
- [Python 3.9 Pref Manual](http://docs.python.org/3.9/library/index.html)
- [Mongodb](https://www.mongodb.com/cloud-database)
- [Mongodb Tutorial](https://www.youtube.com/watch?v=qWYx5neOh2s)

# Future Work

- I think I could handle better with the remove-item action. I could improve it with showing "error" when there is no item in the to-buy-list
- Instead of a list showing in the terminal, I could make it an app, which makes it user-friendly.
- I could use more functions and object to help me out with the program.
