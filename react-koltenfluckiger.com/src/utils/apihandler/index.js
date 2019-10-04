const axios = require("axios").default;

class ApiHandler {

  static headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  static async get(url, responseType, params) {

    if (params) {
      try {
        const results = await axios.get(url, {
          responseType: responseType,
          params: params
        }, {headers: this.headers});
        return Promise.resolve(results);
      } catch (err) {
        return Promise.reject(err);
      }
    } else {
      try {
        const results = await axios.get(url, {
          responseType: responseType
        }, {headers: this.headers});
        return Promise.resolve(results);
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }

  static async post(url, data) {
    try {
      const results = await axios.post(url, data);
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async patch(url, data) {
    try {
      const results = await axios.patch(url, data);
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async delete(url, data) {
    try {
      const results = await axios.delete(url, data);
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default ApiHandler;
