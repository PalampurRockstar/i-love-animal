import { Language, Privacy } from "common/constants";
import { HttpRequest, HttpResponse } from "./generic";

export interface LoginRequest extends HttpRequest {
  username: string;
  password: string;
}
export interface LoginResponse extends HttpResponse {
  language: Language;
  privacy: Privacy;
  jwtToken: string;
}
