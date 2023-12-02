// models/user.dao.js

import { pool } from "../config/db.connect.js";
import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID, insertUserMissionSql, getUsermissionID } from "./user.sql.js";
import { getMission } from "./store.dao.js";//store.dao에서 만들어둔 함수를 가져와서 미션테이블에 미션 아이디를 이용하여 해당 내용을 끌어오는 걸 만들었습니다.

// User 데이터 삽입
export const addUser = async (data) => {
    console.log("is this working?")
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmEmail, data.email);

        if(confirm[0].isExistEmail){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertUserSql, [data.email, data.name, data.gender, data.birth, data.addr, data.specAddr, data.phone]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId);

        console.log(user);

        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 음식 선호 카테고리 매핑
export const setPrefer = async (userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(connectFoodCategory, [foodCategoryId, userId]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
    try {
        const conn = await pool.getConnection();
        const prefer = await pool.query(getPreferToUserID, userID);

        conn.release();

        return prefer;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}




// User 데이터 삽입
export const challengeUsermission = async (data) => {
    console.log("is this working?")
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmMission, data.mission_id);

        if(confirm[0].isExistMission){
            conn.release();
            return -1;
        }
        const user_mission = getMission(data.mission_id);//미션 정보 끌어오기
        const result = await pool.query(insertUserMissionSql, [user_mission[0].user_id, user_mission[0].mission_id, user_mission[0].store_id, user_mission[0].title, user_mission[0].body, user_mission[0].reward, data.status]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getUsermission = async (missionId) => {
    try {
        const conn = await pool.getConnection();
        const [usermission] = await pool.query(getUsermissionID, missionId);

        console.log(usermission);

        if(usermission.length == 0){
            return -1;
        }

        conn.release();
        return usermission;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}