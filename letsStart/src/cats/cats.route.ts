import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

//express.Router for Get cats
router.get('/cats', (req, res) => {
    try {
        const cats = Cat;
        // throw new Error('db connection error');
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message,
        })
    }
});

//express.Router for Get
router.get('/cats/:id', (req, res) => {
    try {
        const params = req.params;
        console.log(params);
        const cat = Cat.find((cat) => {
            return cat.id === params.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cat,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

//express.Router for Post
router.post('/cats', (req, res) => {
    try {
        const data = req.body;
        Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

//express.Router for Put
router.put('/cats/:id', (req, res) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

//express.Router for Patch
router.patch('/cats/:id', (req, res) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = { ...cat, ...body };
                result = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

//express.Router for Delete
router.delete('/cats/:id', (req, res) => {
    try {
        const params = req.params;
        const newCat = Cat.filter((cat) => cat.id !== params.id);
        res.status(200).send({
            success: true,
            data: newCat,
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

export default router;