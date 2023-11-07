import { API_REG_REQUEST } from "@/constants/constants";
import { IRegRequest } from "@/interfaces/regRequest";

export async function requestRegistration(request: IRegRequest) {
  const res = await fetch(API_REG_REQUEST, {
    method: "POST",
    body: JSON.stringify(request),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    mode: "cors",
  });

  if (!res.ok) {
    throw new Error("Failed to request");
  }

  return res.json();
}
