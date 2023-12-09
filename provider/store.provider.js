// store.provider.js

import { previewReviewResponseDTO } from "../dtos/store.dto.js";
import { previewMissionResponseDTO } from "../dtos/store.dto.js";

import { getPreviewReview } from "../models/store.dao.js";
import { getPreviewMission } from "../models/store.dao.js";

export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}


export const getMission = async (storeId, query) => {
    const {missionId, size = 3} = query;
    return previewMissionResponseDTO(await getPreviewMission(missionId, size, storeId));
}
