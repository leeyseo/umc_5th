// dtos/user.dto.js

// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

export const challengeResponseDTO = (mission) => {
    
    return {"user_id": mission[0].user_id, "mission_id": mission[0].mission_id, "store_id": mission[0].store_id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}

export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "store_name": data[i].store_name,
            "score": data[i].score,
            "review_title": data[i].review_title,
            "review_body": data[i].review_body,
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