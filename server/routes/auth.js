// use express in creating the express route
const router = require("express").Router();
const User = require("../model/User")
const bcrypt = require("bcrypt");
// first
// registers
// if creating something it shold be post method
router.post("/register", async (req, res) => {
    // good to use trycatch error to track the error
    try {
        // encypting the password
        const salt = await bcrypt.genSalt(10);
        const hashedPasswoord = await bcrypt.hash(req.body.password, salt)
        // remember already we have imported the User schema
        const newUser = new User(
            {
                username: req.body.username,
                email: req.body.email,
                password: hashedPasswoord,
            }
        );
        // saving the user
        const user = await newUser.save();
        // if everything is success full send respond 
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
})
// login
router.post("/login", async (req, res) => {

    try {
        // already we have imported the user
        // serching aspecific user in the database
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(400).json("wrong credials!")

        // compairing the password
        const validated = await bcrypt.compare(req.body.password, user.password)
        // else statement if not validated
        !validated && res.status(400).json("wrong credials!");
        // if everthing is correct send to user
        // taking a specific data without the password
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
