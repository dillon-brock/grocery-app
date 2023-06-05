import { PublicUser, SuccessfulResponse } from "../../types/types";

export interface PublicUsersRes extends SuccessfulResponse {
  users: PublicUser[];
}

export interface PublicUserRes extends SuccessfulResponse {
  user: PublicUser;
}