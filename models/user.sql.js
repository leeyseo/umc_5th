// models/user.sql.js

export const insertUserSql = "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE user_id = ?";
export const getUsermissionID = "SELECT * FROM usermission WHERE mission_id = ?";

export const connectFoodCategory = "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";
export const confirmMission = "SELECT EXISTS(SELECT 1 FROM user WHERE user_mission = ?) as isExistMission";

export const getPreferToUserID =
"SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name "
+ "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id "
+ "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";

export const insertUserMissionSql = "INSERT INTO user (user_id, mission_id, store_id, title, body, reward, status) VALUES (?, ?, ?, ?, ?, ?, ?);";


export const getReviewByUserId = 
"SELECT s.store_name, s.store_id, r.score, r.review_title, r.review_body, r.created_at "
+ "FROM review r JOIN store s on r.store_id = s.store_id "
+ "WHERE r.user_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getReviewByUserIdAtFirst = 
"SELECT s.store_name, s.store_id, r.score, r.review_title, r.review_body, r.created_at "
+ "FROM review r JOIN store s on r.store_id = s.store_id "
+ "WHERE r.user_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"