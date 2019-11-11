import "@babel/polyfill";
import express from 'express';
import dotenv from 'dotenv';
import router from './server/routes/index';
import connection from './server/connection';

dotenv.config();

const app = express();
const { PORT } = process.env;
const database_ip = process.env.IP;

app.use(express.json());
app.use(router);

//Home route
app.get('/', (req, res) => {
    return res.status(200).send({
      status: 200,
      message: 'warming up at Port 5000'
    });
});

// wrong route
app.use((req, res) => res.status(405).send({
    "status": 405,
    "error": "This URL does not exist"
}));

// server down
app.use((req, res) => res.status(500).send({
    "status": 500,
    "error": "Oops! The problem is not on your side. Hang on, we will fix this soon"
}));

app.listen(PORT,database_ip); 

export default app;
