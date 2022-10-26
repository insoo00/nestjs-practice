import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

//express.middleware for logging
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log('This is logging middleware');
    next();
});
//express.middleware for json
app.use(express.json());

//express.Router for Get cats
app.get('/cats', (req: express.Request, res: express.Response) => {
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
app.get('/cats/:id', (req, res) => {
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
app.post('/cats', (req, res) => {
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
app.put('/cats/:id', (req, res) => {
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
app.patch('/cats/:id', (req, res) => {
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
app.delete('/cats/:id', (req, res) => {
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

//express.middleware for error handling
app.use((req, res, next) => {
    console.log('This is error middleware');
    res.send({ error: 'This is error' });
});

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
})