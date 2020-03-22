import { Olympian0AuthClientOptions } from './global';

const AxiosHandler = require("axios-api-handler").default;

export default class Olympian0Client {

  private apiKey: string;
  private appID: string;

  constructor(private options: Olympian0AuthClientOptions) {
    this.appID = options.appID;
    this.apiKey = options.apiKey;
  };

  public async getToken() {
    try {
      const response = await AxiosHandler.post("https://api.olympian.dev/auth/generate", { headers: { "Authorization": `Bearer ${this.apiKey}`, "x-app-id": `${this.appID}` } });
      const token = response.headers['authorization'];
      if(!token) return Promise.reject();
      const axiosHandler = AxiosHandler._getInstance();
      axiosHandler.defaults.headers.common['Authorization'] = token
      return Promise.resolve();
    } catch {
      return Promise.reject();
    }
  }
}
