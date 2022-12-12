# How to run
    Please use `npm install`, `npm run build`, `npm start` to run.
    Project will run on http://localhost:3000 after build.

# PROSHOP Website
    This is a Single-Page-Application project using create-react-app about a fake online shopping mall. It implements the basic functions of an online shopping mall, such as adding a shopping cart, checking out, saving user address information, etc.

## Security and Roles
    This project allows three different roles: (users not yet logged in, logged in users, logged in administrators). 
    For Administrators, please use username: `admin` and password: `admin` and click "Admin Login" button to login. 
    For user, the server will only check if username is invalid or "dog", will not check or store any password.

## Add Product
    For administrators, they can use add product page after login. By input product information, new product will show to all users.
    Here is some picture link for test(all have license):

    Chrismas tree: "https://images.unsplash.com/photo-1577156130348-b935e8e0b173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    iWatch: "https://images.unsplash.com/photo-1623682579934-58796c1b2822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGl3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"

    Or test with local picture:
    '/images/airpods.jpg'
    '/images/camera.jpg'

## Cart
    For logged in user, they can add products to their cart by click "add to cart" button in main page. The server will keep storing their cart before checkout.
    In cart page, users can add purchase number of product and total price will update immediately.
    In addition, the server will store users' address and card number for next purchase if they choose "save for next time"

## Highlights
    Different visual states for different roles and interactions.
    Clean and excellent architecture via "reducer"
    Update product list every 20 seconds by polling, which enables users to see the latest products all the time
    Accurate success and error messages for user operations

## Image License
    All picture from https://unsplash.com/, License: https://unsplash.com/license

#  If there is any question, please slack me!
#  Hope you can like my website. ^_^