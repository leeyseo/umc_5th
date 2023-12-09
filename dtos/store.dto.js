// dtos/user.dto.js

// post review response DTO
export const addreviewResponseDTO = (review) => {
    return {"user_id": review[0].user_id, "store_id": review[0].store_id, "review_id": review[0].review_id};
}


// post mission response DTO
export const addmissionResponseDTO = (mission) => {
    return {"mission_id": mission[0].mission_id, "store_id": mission[0].store_id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}

export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].user_name,
            "rate": data[i].rate,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].created_at)
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length-1].review_id};
}


export const previewMissionResponseDTO = (data) => {

    const missions = [];

    for (let i = 0; i < data.length; i++) {
        missions.push({
            "store_name": data[i].store_name,
            "mission_id": data[i].mission_id,
            "mission_title": data[i].mission_title,
            "mission_reward": data[i].mission_reward,
            "mission_body": data[i].mission_body,
            "create_date": formatDate(data[i].created_at)
        })
    }
    return {"missionData": missions, "cursorId": data[data.length-1].mission_id};
}