import express from "express";
import asyncHandler from 'express-async-handler';
import { storeAddreview } from "../controllers/store.controller.js";
import { storeAddmission } from "../controllers/store.controller.js";
import { reviewPreview } from "../controllers/store.controller.js";

export const storeRouter = express.Router({mergeParams: true});

storeRouter.get('/reviews', asyncHandler(reviewPreview));
storeRouter.post('/addreview', asyncHandler(storeAddreview));
storeRouter.post('/addmission', asyncHandler(storeAddmission));