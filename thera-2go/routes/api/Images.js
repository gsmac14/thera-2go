const router = require("express").Router();
const db = require("../../models/Img");

router.get("/image", (req, res) =>{
    db.Images.find({
        title: { $regex: new RegExp(req.query.q, 'i')}
    })
    .then(image => res.json(image))
    .catch(err => res.status(422).end());
});

module.exports = router