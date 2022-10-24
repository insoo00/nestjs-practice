import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

//express.middleware
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log('This is logging middleware');
    next();
});

//express.Router
app.get('/cats/blue', (req: express.Request, res: express.Response) => {
    res.send({ cats: Cat[0] });
});

//express.Router
app.get('/cats/som', (req: express.Request, res: express.Response) => {
    res.send({ cats: Cat[1] });
});

//express.middleware
app.use((req, res, next) => {
    console.log('This is error middleware');
    res.send({ error: 'This is error' });
});

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
})