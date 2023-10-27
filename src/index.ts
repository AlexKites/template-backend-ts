import express, { Response } from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.get('/ping', (_, res: Response) => {
    console.log('Server is up and running! ' + new Date().toLocaleDateString());
    res.status(200).send(`Server is up and running! - ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
});