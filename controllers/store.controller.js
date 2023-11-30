import { response } from "../config/response.js";
import { status } from "../config/response.status.js";

import { joinReview } from "../services/store.service.js";

export const storeAddreview = async (req, res, next) => {
    console.log("가게에 리뷰를 등록!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinReview(req.body)));
}