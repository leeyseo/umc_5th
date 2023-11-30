// dtos/user.dto.js

// sign in response DTO
export const addreviewResponseDTO = (review) => {
    return {"user_id": review[0].user_name, "store_id": review[0].store_id, "review_id": review[0].review_id};
}