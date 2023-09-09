import express, { Response, NextFunction } from "express";

export const app = express();
app.use(express.json());
console.log(process.env.PORT)