import { Olympian0AuthClientOptions } from './global';

const AxiosHandler = require("axios-api-handler").default;

export default class Olympian0Client {

  private apiKey: string;
  private appID: string;

  constructor(private options: Olympian0AuthClientOptions) {
    this.appID = options.appID;
    this.apiKey = options.apiKey;
  };

  /**
   * getToken
   */
  public async getToken() {
    try {
      const response = await AxiosHandler.post("https://api.olympian.dev/auth/generate", {headers: {"Authorization": `Bearer ${this.apiKey}`, "X-APP-ID": `${this.appID}`}});
      const token = response.data.token;
      console.log(token);
      AxiosHandler.setHeaders({
        'Authorization': `Bearer ${token}`
      })
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}
