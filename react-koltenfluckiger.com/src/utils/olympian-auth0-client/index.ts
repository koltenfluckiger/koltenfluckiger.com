import 'core-js/es/string/starts-with';
import 'core-js/es/array/from';
import 'core-js/es/typed-array/slice';
import 'core-js/es/array/includes';
import 'core-js/es/string/includes';

import Olympian0Client from "./client";

import {Olympian0AuthClientOptions} from './global';

export default async function createOlympianAuth0Client(options: Olympian0AuthClientOptions) {
  const auth0 = new Olympian0Client(options);
  try {
    await auth0.getToken();
  } catch (error) {
  }
  return auth0;
}
