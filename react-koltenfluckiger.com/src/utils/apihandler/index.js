const axios = require("axios").default;

class ApiHandler {

  static headers = {
    json: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    multiForm: {
      "Content-Type": "multipart/form-payload",
      "Accept": "application/json"
    }
  }

  static async get(url, responseType, params) {

    if (params) {
      try {
        const results = await axios.get(url, {
          responseType: responseType,
          params: params
        }, {headers: this.headers.json});
        return Promise.resolve(results);
      } catch (err) {
        return Promise.reject(err);
      }
    } else {
      try {
        const results = await axios.get(url, {
          responseType: responseType
        }, {headers: this.headers.json});
        return Promise.resolve(results);
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }

  static async post(url, payload, formType) {
    const headers = this.headers[formType];
    try {
      const results = await axios.post(url, payload, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async patch(url, payload, formType) {
    const headers = this.headers[formType];
    try {
      const results = await axios.patch(url, payload, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async delete(url, payload) {
    const headers = this.headers.json;
    try {
      const results = await axios.delete(url, payload, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default ApiHandler;
