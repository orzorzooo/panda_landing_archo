import { get, post } from "@/api/request";
import store from "@/store";

export const authenticated = async () => {
  const token = localStorage.getItem("panda_token");
  if (!token) return false;
  const data = await get({ type: "users", url: "me" });
  store.commit("user/setUser", data);
  return true;
};
