# Carbon Footprint Tracker

**Carbon Footprint Tracker** is a web application (Single Page Application) using React.js i've made as a final project for [SoftUni's](https://softuni.bg/) ReactJS Course. The app is a basic tracking system that lets users track their carbon footprint via Logs(certain activity that leads to emissions) and connect to one another using the comments under every post. The application uses [SoftUni's Practice Server](https://github.com/softuni-practice-server/softuni-practice-server) as a backend.


## Application Structure
The application consists of two parts - **Public** (Accessible without authentication) and **Private** (Available for Registered Users).

 ### Public Part

 This part is visible without authentication. It consists of: 
 - ***Home*** page - the main page of the app. It  prompts users to make a registration and start using the site or learn more.
 - ***All Logs*** page - guest users can view what other people are Logging, without being able to interact with the resource (leave comments, edit or delete).
 - ***Login*** page - lets users that have already registered log into their account access functionality that requires authentication.
 - ***Register*** page - lets users register using their email and password of their choosing.
 - ***About*** page - static page that let's users read more about the application and its goal.

 ### Private Part
 This part is visible only to authenticated users. It lets them have access to:
 - ***Comments*** - logged in users can leave comments on other users post's
 - ***Diary*** - every personal Log is displayed in this section with the addition of **Total Emissions** panel which calculates the total emissions of that specific user
 - ***CRUD*** operations to their own **Logs** - logged in users have the ability to create Logs. **Logs** can be updated, and deleted if the user is the owner of that **Log**.
 

 ### Application Architecture
The app is divided to multiple components, with the App as the main component that renders all of them:
- Catalog
- CreateLog
- Header
- Home
- About
- Login
- Register
- LogDetails
- Logout
- EditLog
- Diary

All components are wrapped with the Authorization and Log context so they can all access data about users and logs. 

There are three custom hooks: 
 - ***useForm*** - this hook is used in components that have controlled html forms. It handles the **onSubmit** action and sends custom data to the backend depending on the names of the input fields in the form. It also sets the initial **state** of the form and changes it when **onChange** event occurs.
 - ***useLocalStorage*** - this hook manages the **Local Storage** in the browser and is used to store and get data about the current user session.
 - ***useService*** - this hook is used to get the authentication **token** from the **AuthContext** and return a service which calls the **serviceFactory** and passes the token to it.

 The services folders has four files that communicate with the backend:
 - ***authService*** - return an object with three functions: **login**, **register** and **logout**.
 - ***commentService*** - manages api calls to server about the **comments** on a Log.
 - ***logService*** - handles all **CRUD** operations performed on a Log.
 - ***requester*** - assembles the **request** sent to the **server** based on method, url and data. Exports all **methods** needed in a form of an object.


 ### Starting The Application
 The repository consists of two folders: **client** and **server**.

1. To start the server you need to open a new terminal at the **server** directory and run the command:

```console
node server.js
```

2. To start the client you need to open a new terminal at the **client** directory and run the command:

```console
npm start
```
 
### App Preview
![Home Page](https://drive.google.com/uc?export=view&id=1qWjsdwKZcbdc1_OtimemPqQk7wuBw4pl)
![Register Page](https://drive.google.com/uc?export=view&id=1-NelyFvHw19qULz8GjNKTsBvVitKeTMG)
![Create Page](https://drive.google.com/uc?export=view&id=1-gzHy9UdmRPFBhUvKNYoHuj208Q357Fo)
![Personal Page](https://drive.google.com/uc?export=view&id=1eQWOrLef8cFggh8R6Q1MrJQD9wGCFWDJ)
![Details Page](https://drive.google.com/uc?export=view&id=12TDEbtbOuxIuSD1mde8gd-1jmQ3ZTvOc)
![Comment Page](https://drive.google.com/uc?export=view&id=1fxCIpQF2fYbg6GbSKg_w9zs7OJDweIDD)
![Edit Page](https://drive.google.com/uc?export=view&id=1bjcOUW4EHY9fCPkdGSX4UqSSQMzY4SNi)
![About Page](https://drive.google.com/uc?export=view&id=18BBb_lBV1i6f2uk9ozJeVuHx0a1aMyUe)