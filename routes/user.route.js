// routes/user.route.js
import express from "express";
import asyncHandler from 'express-async-handler';

import { userSignin } from "../controllers/user.controller.js";
import { userChallenge } from "../controllers/user.controller.js";
import { reviewPreview } from "../controllers/user.controller.js";
import { missionPreview } from "../controllers/user.controller.js";

export const userRouter = express.Router();



userRouter.get('/reviews', asyncHandler(reviewPreview));
userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/missions', asyncHandler(missionPreview));
userRouter.post('/challengemission', asyncHandler(userChallenge));