const express = require("express");
const router = express.Router();
const SearchLog = require("../models/SearchLog")
const Faq = require("../models/Faq");

router.get("/", async (req,res) => {

	try {
		const faqs = await Faq.find();
		res.json(faqs);
        console.log('successfl get req')
	} catch(error) {
		res.status(500).json({
			message:error.message
		});
	}

});

// CREATE FAQ
router.post("/", async (req, res) => {

    try {

        const newFaq = new Faq({
            question: req.body.question,
            answer: req.body.answer,
            category: req.body.category
        });

        const savedFaq = await newFaq.save();

        res.status(201).json(savedFaq);
        console.log("successful post rquest")

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

router.patch("/:id/helpful", async (req,res) => { //we use patch not post
    // because we are modyfying resource
    try {
        const faq = await Faq.findById(req.params.id);
        faq.helpful +=1;
        await faq.save();
        res.json(faq);

    }catch(error) {
        res.status(500).json({
            message:error.message
        });
    }
});

router.patch("/:id/confusing", async (req, res) => {

    try {

        const faq = await Faq.findById(req.params.id);

        faq.confusing += 1;

        await faq.save();

        res.json(faq);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/search/:query", async (req, res) => {
    try {
        const query = req.params.query;
        const results = await Faq.find({
            question: {
                $regex:query,
                $options: "i"
            }
        });

        // If no faq found
        if (results.length === 0) {
            const existingSearch = await SearchLog.findOne({
                query:query.toLowerCase()
            });
            if (existingSearch) {
                existingSearch.count += 1;
                await existingSearch.save();
            }else {
                await SearchLog.create({
                    query:query.toLowerCase()
                });
            }

        }
        res.json(results);
    }catch(error) {
        res.status(500).json({
            message:error.message
        });
    }
});

router.get("/missing/trending", async(req, res) => {
    try {
        const trending = await SearchLog.find()
            .sort({count:-1})
            .limit(5);
        res.json(trending);
    }catch(error) {
        res.status(500).json({
            message:error.message
        });
    }
});

module.exports = router;
