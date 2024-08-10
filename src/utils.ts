import { EGender } from "./types";

export const localizateGender = (gender: EGender ) => {
    if (gender === EGender.FEMALE) {
        return "Женский";
    }

    if (gender === EGender.MALE) {
        return "Мужской";
    } 
    
    return "Неизвестно";
}

export const stringAvatar = (name: string) => {
    const splitedStr = name.split(" ");

    return `${splitedStr[0][0]}${splitedStr[1]?.[0] ?? ""}`
  };