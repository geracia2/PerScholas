1. mkdir express-practice && cd express-practice
2. touch server.js
3. npm init -y
4. npm i express
5. npm i jsx-view-engine react react-dom

node server || nodemon if installed

other things to include:
npm i method-override
npm i mongoose
npm i dotenv

middlewear
app.use(methodOverride("_method"));
// allow url parsing, req.body !! must be above routes !!
app.use(express.urlencoded({ extended: true }));

require('dotenv').config() // to enable .env