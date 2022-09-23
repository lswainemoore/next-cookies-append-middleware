import { NextRequest, NextResponse } from "next/server";

export default async function middleware(_request: NextRequest) {
  const resp = NextResponse.next();

  resp.headers.set("Set-Cookie", "cookie1=val1, cookie2=val2");
  return resp;
}
