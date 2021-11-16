const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport')

app.use(cookieSession(
    {
        name:"session",
        keys:["lama"],
        maxAge: 24 * 60 * 60 * 100 
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    method: "GET, POST, PUT,DELETE",
    credentials: true,
}))

app.listen(port, () => {
    console.log(`backend is listening on ${port}`);
});