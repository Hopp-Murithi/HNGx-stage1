import express from "express";
import {user} from './routes/info.route';



export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**
 * stageOne base url
 */




/**
 * mount routes
 */
app.use("/",user);
