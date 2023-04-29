export async function responseWithSuccessStatus(res: Response) {
  const success: boolean = res.status == 200;
  const jsonRes = await res.json();
  jsonRes.success = success;
  return jsonRes;
}