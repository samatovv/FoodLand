import axios from "axios";
import cookie from "cookie_js";

function get_token() {
  return cookie.get("token");
}

const user = cookie.get("token");

export const instance = axios.create({
  baseURL: `https://`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",

    Authorization: `Bearer ${get_token()}`,
  },
});
