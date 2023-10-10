const express = require("express");
const {login,register, portfolioData} = require("../controllers/adminController");
const {create, update, remove, read} = require("../controllers/introController");
const {createAbout, updateAbout, readAbout} = require("../controllers/aboutController")
const {checkAuth} = require("../middleware/check-auth");
const {createContact, readContact, deleteContact} = require("../controllers/contactController");
const {createPortfolio, readPortfolio, updatePortfolio, deletePortfolio} = require("../controllers/portfolioController");
const {createTestimonial, readTestimonial, updateTestimonial, deleteTestimonial} = require("../controllers/testimonialController");
const {createExperience, readExperience, updateExperience} = require("../controllers/experienceController");
const {createEducation, readEducation, updateEducation} = require("../controllers/educationController");

const router = express.Router();

router.post("/signup", register);
router.post("/login",  login);

//portfolio
router.get("/", portfolioData);

//Intro
router.post("/intro",checkAuth,create);
router.get("/intro",read)
router.post("/introUpdate/:_id",checkAuth,update);
router.delete("/intro/:_id",checkAuth,remove);


//About
router.post("/about",checkAuth,createAbout);
router.get("/about",readAbout);
router.post("/aboutUpdate/:_id",checkAuth,updateAbout);

//Contact
router.post("/contact", createContact);
router.get("/contact", checkAuth, readContact)
router.delete("/contact/:_id", checkAuth, deleteContact);

//Portfolio
router.post("/portfolio", checkAuth, createPortfolio);
router.get("/portfolio", readPortfolio);
router.post("/portfolio/:_id", checkAuth, updatePortfolio);
router.delete("/portfolio/:_id", checkAuth, deletePortfolio);


//Testimonial
router.post("/testimonial", checkAuth, createTestimonial);
router.get("/testimonial", readTestimonial);
router.post("/testimonial/:_id", checkAuth, updateTestimonial);
router.delete("/testimonial/:_id", checkAuth, deleteTestimonial);

//Experience
router.post("/experience", checkAuth, createExperience);
router.get("/experience", readExperience);
router.post("/experience/:_id", checkAuth, updateExperience);


//Education
router.post("/education", checkAuth, createEducation);
router.get("/education", readEducation);
router.post("/education/:_id", checkAuth, updateEducation);

module.exports = router;