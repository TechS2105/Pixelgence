import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import env from 'dotenv';
import routes from './routers/routes.js';

env.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`)

})