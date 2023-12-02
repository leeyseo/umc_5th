import { BaseError } from "../config/error.js";

import { status } from "../config/response.status.js";

import { addreviewResponseDTO } from "../dtos/store.dto.js"
import { addmissionResponseDTO } from "../dtos/store.dto.js"

import { addReview, getReview, addMission, getMission } from "../models/store.dao.js";

export const joinReview = async (body) => {

    const joinReviewData = await addReview({
        'user_id': body.user_id,
        'store_id': body.store_id,
        'review_id': body.review_id,
        'title': body.title,
        'body': body.body,
        'score': body.score
    });

    if(joinReviewData == -1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        return addreviewResponseDTO(await getReview(joinReviewData));
    }
}

export const joinMission = async (body) => {

    const joinReviewData = await addMission({
        'mission_id': body.mission_id,
        'store_id': body.store_id,
        'title': body.title,
        'body': body.body,
        'reward': body.reward
    });

    if(joinReviewData == -1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        return addmissionResponseDTO(await getMission(joinMissionData));
    }
}