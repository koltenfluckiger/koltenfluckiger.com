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

  static async get(url, responseType, options) {
      const params = options ? options : {};
      params['filter'] = params.filter ? params.filter : {};
      try {
        const results = await axios.get(url, {
          responseType: responseType,
          params: params
        }, {headers: this.headers.json});
        return Promise.resolve(results);
      } catch (err) {
        return Promise.reject(err);
      }
    }


  static async post(url, formType, payload) {
    const headers = this.headers[formType];
    try {
      const results = await axios.post(url, payload, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async patch(url, formType, payload, options) {
    const params = options ? options : {}
    params.filter = params.filter ? params.filter : {}
    const headers = this.headers[formType];
    try {
      const results = await axios.patch(url, payload, {
        params: params
      }, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async delete(url, responseType, options) {
    const params = options ? options : {}
    params.filter = params.filter ? params.filter : {}
    const headers = this.headers.json;
    try {
      const results = await axios.delete(url, {
        params: params
      }, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default ApiHandler;
