import { Router } from "express";
import { info } from "../controllers/Info";

const user = Router();

const baseURL = "/api";

/**
 * Get user info route
 */  
user.get(baseURL, info);

export { user };
