// models/user.dao.js

import { pool } from "../config/db.connect.js";
import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
import { insertReviewSql, getReviewID, insertMissionSql, getMissionID, getReviewByReviewIdAtFirst, getReviewByReviewId, getMissionByStoreId, getMissionByStoreIdAtFirst } from "./store.sql.js";

// User 데이터 삽입
export const addReview = async (data) => {
    try{
        console.log("is this working?")
        const conn = await pool.getConnection();//여기서 에러가 나네
        //console.log("is this working?")

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

// User 데이터 삽입
export const addMission = async (data) => {
    try{
        console.log("is this working?")
        const conn = await pool.getConnection();//여기서 에러가 나네
        //console.log("is this working?")

        const result = await pool.query(insertMissionSql, [data.mission_id, data.store_id, data.title, data.body, data.reward]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getMission = async (missionId) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(getMissionID, missionId);

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

export const getPreviewReview = async (cursorId, size, storeId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return reviews;
    
        }else{
            const [reviews] = await pool.query(getReviewByReviewId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getPreviewMission = async (cursorId, size, storeId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [missions] = await pool.query(getMissionByStoreIdAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return missions;
    
        }else{
            const [missions] = await pool.query(getMissionByStoreId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return missions;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}