import { EGender } from "./types";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";

export const localizateGender = (gender: EGender) => {
  if (gender === EGender.FEMALE) {
    return <FemaleIcon color="secondary" />;
  }

  if (gender === EGender.MALE) {
    return <MaleIcon color="primary" />;
  }

  return <TransgenderIcon color="action" />;
};

export const stringAvatar = (name: string) => {
  const splitedStr = name.split(" ");

  return `${splitedStr[0][0]}${splitedStr[1]?.[0] ?? ""}`;
};
