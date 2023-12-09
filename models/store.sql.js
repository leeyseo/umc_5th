// models/user.sql.js

export const insertReviewSql = "INSERT INTO review (user_id, store_id, review_id, title, body, score) VALUES (?, ?, ?, ?, ?, ?);";


export const getReviewID = "SELECT * FROM review WHERE review_id = ?";


export const insertMissionSql = "INSERT INTO mission (mission_id, store_id, title, body, reward) VALUES (?, ?, ?, ?, ?);";


export const getMissionID = "SELECT * FROM mission WHERE mission_id = ?";


export const getReviewByReviewId = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.restaurant_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.restaurant_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"


export const getMissionByStoreId = 
"SELECT m.mission_id, m.mission_title, m.mission_body, m.mission_reward, s.store_name, m.created_at "
+ "FROM mission m JOIN store s on m.store_id = s.store_id "
+ "WHERE m.store_id = ? AND m.mission_id < ? "
+ "ORDER BY m.mission_id DESC LIMIT ? ;"

export const getMissionByStoreIdAtFirst = 
"SELECT m.mission_id, m.mission_title, m.mission_body, m.mission_reward, s.store_name, m.created_at "
+ "FROM mission m JOIN store s on m.store_id = s.store_id "
+ "WHERE m.store_id = ? "
+ "ORDER BY m.mission_id DESC LIMIT ? ;"
