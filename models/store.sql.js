// models/user.sql.js

export const insertReviewSql = "INSERT INTO review (user_id, store_id, review_id, title, body, score) VALUES (?, ?, ?, ?, ?, ?);";


export const getReviewID = "SELECT * FROM review WHERE review_id = ?";