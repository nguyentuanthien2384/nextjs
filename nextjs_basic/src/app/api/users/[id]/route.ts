import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  return NextResponse.json({
    success: true,
    data: {
      id: +id,
      name: "Thiền NT",
      email: "thiennt2004@gmail.com",
    },
  });
};
