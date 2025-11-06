import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_KEY } from "./lib/constants";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get(COOKIE_KEY)?.value;

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  let quizInfo: {
    question: number | null;
    finished: boolean;
    gender: string | null;
  } | null = null;

  if (cookie) {
    try {
      quizInfo = JSON.parse(decodeURIComponent(cookie));
    } catch {
      quizInfo = null;
    }
  }

  if (!quizInfo && pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!quizInfo && pathname === "/") {
    return NextResponse.next();
  }

  if (pathname !== "/quiz" && quizInfo?.question) {
    return NextResponse.redirect(new URL("/quiz", req.url));
  }

  if (pathname !== "/results" && quizInfo?.finished) {
    return NextResponse.redirect(new URL("/results", req.url));
  }

  return NextResponse.next();
}
