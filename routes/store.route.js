import express from "express";
import { storeAddreview } from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post('/addreview', storeAddreview);