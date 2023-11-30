// models/user.dao.js

import { pool } from "../config/db.connect.js";
import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
import { insertReviewSql, getReviewID } from "./store.sql.js";

// User 데이터 삽입
export const addReview = async (data) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertReviewSql, [data.user_id, data.store_id, data.review_id, data.title, data.body, data.score]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getReview = async (reviewId) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(getReviewID, reviewId);

        console.log(review);

        if(review.length == 0){
            return -1;
        }

        conn.release();
        return review;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
