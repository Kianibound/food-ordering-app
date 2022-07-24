import { fetchUserData } from "../utils/fetchLocalStorageData";

const userInfo = fetchUserData();
export const initialState = {
  user: userInfo,
};
