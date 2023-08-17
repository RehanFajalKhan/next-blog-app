import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
interface IProptype {
    id: string;
    name: string;
    email: string;
}
export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken : any = jwt.verify(token, process.env.TOKEN_SECRET!);
    console.log(decodedToken);
    return decodedToken.id;
  } catch (err: any) {}
};
