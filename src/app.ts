import express from 'express';
import { mongoose } from './database/config';
import { router } from './routes';
import cors from 'cors';

const db = mongoose.connection;


db.on("error",(error) => console.log(error))
db.once("open",() => console.log(":3 Connected with the database!"))

const app = express();

app.use(express.json());
app.use(cors());

app.use(router)

export { app }