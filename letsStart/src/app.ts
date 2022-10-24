import * as express from "express";
const app: express.Express = express();
const port: number = 8000


const data = [1, 2, 3, 4];

app.get('/test', (req: express.Request, res: express.Response) => {
    console.log(req);
    res.send({ data });
})

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
})