import { response } from "../config/response.js";
import { status } from "../config/response.status.js";

import { joinReview } from "../services/store.service.js";
import { joinMission } from "../services/store.service.js";

import { getReview } from "../provider/store.provider.js";
import { getMission } from "../provider/store.provider.js";

export const storeAddreview = async (req, res, next) => {
    console.log("가게에 리뷰를 등록!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinReview(req.body)));
}

export const storeAddmission = async (req, res, next) => {
    console.log("가게에 미션을 등록!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinMission(req.body)));
}

export const reviewPreview = async (req, res, next) => {
    console.log("리뷰 프리뷰");
    return res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));
}

export const missionPreview = async (req, res, next) => {
    console.log("미션 프리뷰");
    return res.send(response(status.SUCCESS, await getMission(req.params.storeId, req.query)));
}