const router = require("express").Router();
const com = require("../model/Comment")

// creating a comment
router.post("/", async (req, res) => {

    // {userid, comment}
    const newComment = new com(req.body)//kumeendaje? hujaeka .git chill nikushow
    oo

    try {
        // save comment
        const savedComment = await newComment.save()

        res.status(200).json(savedComment);
    } catch (error) {
        res.status(500).json(error);
    }
})

// getting all the comment
router.get("/", async (req, res) => {

    try {
        const comments = await com.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;