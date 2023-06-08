import { DatabaseErrorResponse } from "./types/types";

export async function responseWithSuccessStatus<T>(res: Response): Promise<T | DatabaseErrorResponse> {
  const success: boolean = res.status == 200;
  const jsonRes = await res.json();
  jsonRes.success = success;
  return jsonRes;
}