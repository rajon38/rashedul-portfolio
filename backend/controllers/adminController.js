const { hashPassword, comparePassword } =require("../helpers/auth.js");
const About = require('../models/aboutModel');
const Intro = require('../models/introModel');
const Portfolio = require('../models/portfolioModel');
const Testimonial = require('../models/testimonialModel');
const Experience = require('../models/experienceModel');
const Education = require('../models/educationModel');
const Contact = require('../models/contactModel')

const jwt =require("jsonwebtoken");
const User = require("../models/adminModel");
const {userDetailsService} = require("../Services/userDetailsService");
const JWT_SECRET = "thisNotSecret1245"

exports.register = async (req, res) => {
    try {
        // 1. destructure name, email, password from req.body
        const { username, password } = req.body;
        // 2. all fields require validation
        if (!username) {
            return res.json({ error: "username is required" });
        }
        if (!password || password.length < 6) {
            return res.json({ error: "Password must be at least 6 characters long" });
        }
        // 3. check if email is taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.json({ error: "username is taken" });
        }
        // 4. hash password
        const hashedPassword = await hashPassword(password);
        // 5. register user
        const user = await new User({
            username,
            password: hashedPassword,
        }).save();
        // 6. create signed jwt
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "7d",
        });
        // 7. send response
        res.json({
            user: {
                username: user.username
            },
            token,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.login = async (req, res) => {
    try {
        // 1. destructure username and password from req.body
        const { username, password } = req.body;

        // 2. all fields require validation
        if (!username || !password) {
            return res.json({ error: "Both username and password are required" });
        }

        // 3. check if user exists
        const user = await User.findOne({ username });

        if (!user) {
            return res.json({ error: "Invalid username or password" });
        }

        // 4. compare passwords
        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) {
            return res.json({ error: "Invalid username or password" });
        }

        // 5. generate JWT token
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "7d",
        });

        // 6. send response
        res.json({
            user: {
                username: user.username
            },
            token,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.portfolioData = async (req,res)=>{
    try {
        const aboutData = await About.find();
        const contactData = await Contact.find();
        const educationData = await Education.find();
        const experienceData = await Experience.find();
        const introData = await Intro.find();
        const portfolioData = await Portfolio.find();
        const testimonialData = await Testimonial.find();

        res.status(200).json({
            about: aboutData,
            contact: contactData,
            education: educationData,
            experience: experienceData,
            intro: introData,
            portfolio: portfolioData,
            testimonial: testimonialData

        });
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.userDetails = async (req, res) => {
    let Result = await userDetailsService(User);
    try {
        const aboutData = await About.find();
        const contactData = await Contact.find();
        const educationData = await Education.find();
        const experienceData = await Experience.find();
        const introData = await Intro.find();
        const portfolioData = await Portfolio.find();
        const testimonialData = await Testimonial.find();

        res.status(200).json({
            about: aboutData,
            contact: contactData,
            education: educationData,
            experience: experienceData,
            intro: introData,
            portfolio: portfolioData,
            testimonial: testimonialData

        });
    } catch (error) {
        res.status(500).send(error);
    }
};
