import { NextResponse } from "next/server";

const DATA_SOURCE_URL =
  "https://my-json-server.typicode.com/francesjgonzales/safebuild-json/news";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const articles: Article[] = await res.json();

  return NextResponse.json(articles);
}
