import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
import { signinResponseDTO,challengeResponseDTO } from "../dtos/user.dto.js"
import { addUser, getUser, getUserPreferToUserID, setPrefer, challengeUsermission, getUsermission } from "../models/user.dao.js";

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'email': body.email,
        "user_id":user_id,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}

export const joinUsermission = async (body) => {
    const joinUsermissionData = await challengeUsermission({
        'mission_id': body.mission_id,
        'status': body.status
    });

    if(joinUsermissionData == -1){
        throw new BaseError(status.MISSION_ALREADY_EXIST);
    }else{
        return challengeResponseDTO(await getUsermission(joinUsermissionData));
    }
}