// store.provider.js

import { previewReviewResponseDTO } from "../dtos/user.dto.js";
import { previewMissionResponseDTO } from "../dtos/user.dto.js";

import { getPreviewReview } from "../models/user.dao.js";
import { getPreviewMission } from "../models/user.dao.js";

export const getReview = async (userId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(userId, size, userId));
}

export const getMission = async (userId, query) => {
    const {missionId, size = 3} = query;
    return previewMissionResponseDTO(await getPreviewMission(userId, size, userId));
}
