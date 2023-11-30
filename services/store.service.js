import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
import { addreviewResponseDTO } from "../dtos/store.dto.js"
import { addReview, getReview } from "../models/store.dao.js";

export const joinReview = async (body) => {

    const joinReviewData = await addReview({
        'user_id': body.name,
        'store_id': body.user_id,
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