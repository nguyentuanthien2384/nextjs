import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
export const GET = async (request: NextRequest) => {
  // const token = request.headers.get("token");
  const allHeader = await headers();
  const token = allHeader.get("token");
  const keyword = request.nextUrl.searchParams.get("keyword");
  // const bodyText = await request.text();
  // const body = Object.fromEntries(new URLSearchParams(bodyText).entries());
  // const body = await request.json();
  return NextResponse.json(
    {
      success: true,
      message: "Hello World",
      data: {
        keyword,
        token,
      },
    },
    {
      status: 201,
      statusText: "ahihi",
    },
  );
};
