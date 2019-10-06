const axios = require("axios").default;

class ApiHandler {

  static headers = {
    json: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    multiForm: {
      "Content-Type": "multipart/form-data",
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

  static async post(url, data, formType) {
    const headers = this.headers[formType];
    try {
      const results = await axios.post(url, data, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async patch(url, data, formType) {
    const headers = this.headers[formType];
    try {
      const results = await axios.patch(url, data, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async delete(url, data, formType) {
    const headers = this.headers[formType];
    try {
      const results = await axios.delete(url, data, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default ApiHandler;
