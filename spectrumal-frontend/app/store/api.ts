import { DefaultApi, Configuration } from "../api";

const HOST = "localhost:8080";

const API_BASE_URL = "http://" + HOST + "/api";
export const WEBSOCKET_BASE_URL = "ws://" + HOST + "/ws";
export const API = new DefaultApi(new Configuration({ basePath: API_BASE_URL }));

