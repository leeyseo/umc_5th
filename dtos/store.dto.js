// dtos/user.dto.js

// post review response DTO
export const addreviewResponseDTO = (review) => {
    return {"user_id": review[0].user_id, "store_id": review[0].store_id, "review_id": review[0].review_id};
}


// post mission response DTO
export const addmissionResponseDTO = (mission) => {
    return {"mission_id": mission[0].mission_id, "store_id": mission[0].store_id};
}