import * as express from "express";
import catsRouter from "./cats/cats.route";

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

//express.middleware for catsRouter
app.use(catsRouter);

//express.middleware for error handling
app.use((req, res, next) => {
    console.log('This is error middleware');
    res.send({ error: 'This is error' });
});

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
})