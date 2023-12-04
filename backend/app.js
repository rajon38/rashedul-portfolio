// Basic Lib Import
const express =require('express');
const router =require('./routes/api');
const app= new express();
const bodyParser =require('body-parser');
const path= require('path')

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');
const {diskStorage} = require("multer");

// Security Middleware Implement
app.use(cors())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static('public'));
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3000,
    keyGenerator: (req) => {
        // Extract IP address from the X-Forwarded-For header safely
        const forwardedFor = req.headers['x-forwarded-for'];
        const ipArray = forwardedFor ? forwardedFor.split(/\s*,\s*/) : [];
        const ipAddress = ipArray.length > 0 ? ipArray[0] : req.connection.remoteAddress;
        return ipAddress;
    }
});
app.use(limiter)

// Enable trust proxy to correctly identify client IP behind proxies
app.set('trust proxy', true);

// Mongo DB Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.aw6azwi.mongodb.net/rajonPortfolio?retryWrites=true&w=majority";
let OPTION={user:'rashedul',pass:'170174Rajon',autoIndex:true}
mongoose
    .set('strictQuery',true)
    .connect(URI,OPTION)
    .then(()=>{
        console.log('Connected to DB')
    })
    .catch((err)=>{
        console.log(err.message)
    });


// Routing Implement
app.use("/api/v1",router)



app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all route to serve the frontend's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports= app;
















