// /app/api/reset-password/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Здесь можно добавить логику сброса пароля
    // Например, генерацию токена и отправку письма

    return NextResponse.json({ message: "Password reset link sent" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
