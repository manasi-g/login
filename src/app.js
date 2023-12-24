import dotenv from 'dotenv';
import express from 'express';
import userRouter from './routers/user.js';

// CONFIGURATIONS
dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(userRouter);

app.get('/*', (req, res) => {
    res.sendStatus(404)
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});