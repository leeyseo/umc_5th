// models/user.sql.js

export const insertReviewSql = "INSERT INTO review (user_id, store_id, review_id, title, body, score) VALUES (?, ?, ?, ?, ?, ?);";


export const getReviewID = "SELECT * FROM review WHERE review_id = ?";


export const insertMissionSql = "INSERT INTO mission (mission_id, store_id, title, body, reward) VALUES (?, ?, ?, ?, ?);";


export const getMissionID = "SELECT * FROM mission WHERE mission_id = ?";