import axios from "axios";
import cookie from "cookie_js";

function get_token() {
  return cookie.get("foodland_token");
}

const user = cookie.get("foodland_token") || sessionStorage.getItem("token");

export const instance = axios.create(
  !!user
    ? {
        baseURL: `https://api.foodland.kg/v1/`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${
            get_token() || sessionStorage.getItem("token")
          }`,
        },
      }
    : {
        baseURL: `https://api.foodland.kg/v1/`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
);

export const formData = axios.create({
  baseURL: `https://api.foodland.kg/v1/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${get_token()}`,
  },
});

export const Main = {
  getBanners(url) {
    return (
      instance
        .get(url)
        // .get(`banners?limit=10&page=1&sortBy=createdAt:desc`)
        .then((response) => response.data)
        .catch((error) => error.response)
    );
  },
  getCategories() {
    return instance
      .get(`categories`)
      .then((response) => response.data)
      .catch((error) => error.response);
  },
  getProductsRecomended() {
    return instance
      .get(`recommendations`)
      .then((response) => response.data)
      .catch((error) => error.response);
  },
  getProducts(data) {
    return instance
      .get(data)
      .then((response) => response.data)
      .catch((error) => error.response);
  },
  getNews() {
    return instance
      .get(`posts`)
      .then((response) => response.data)
      .catch((error) => error.response);
  },

  getNewsDetails(id) {
    return instance
      .get(`posts/${id}`)
      .then((response) => response.data)
      .catch((error) => error.response);
  },
};

export const Products = {
  getProducts(data) {
    return instance
      .get(data)
      .then((response) => response.data)
      .catch((error) => error.response);
  },

  getProductsNames() {
    return instance
      .get(`/products/names`)
      .then((response) => response.data)
      .catch((error) => error.response);
  },

  getDetails(id) {
    return instance
      .get(`products/${id}`)
      .then((response) => response.data)
      .catch((error) => error.response);
  },
};

export const Profile = {
  login(data) {
    return instance
      .post(`auth/login`, data)
      .then((response) => response)
      .catch((error) => error.response);
  },

  uploadFile(data) {
    return formData
      .post(`upload/single-local`, data)
      .then((response) => response)
      .catch((error) => error.response);
  },

  updateProfileData(data) {
    return instance
      .patch(`users`, data)
      .then((response) => response)
      .catch((error) => error.response);
  },

  getProfileData() {
    return instance
      .get(`users/profile`)
      .then((response) => response.data)
      .catch((error) => error.response);
  },

  createOrder(data) {
    return instance
      .post(`orders`, data)
      .then((response) => response)
      .catch((error) => error.response);
  },

  repeatOrder(id) {
    return instance
      .post(`orders/reorder/${id}`)
      .then((response) => response)
      .catch((error) => error.response);
  },

  getOrders(id, from, to) {
    return instance
      .get(
        `/orders?limit=1000&client=${id}&complexity=easy${
          from ? `&createdFrom=${from}&createdTo=${to}` : ""
        }`
      )
      .then((response) => response.data)
      .catch((error) => error.response);
  },

  getOrder(id) {
    return instance
      .get(`/orders/${id}`)
      .then((response) => response.data)
      .catch((error) => error.response);
  },
};
