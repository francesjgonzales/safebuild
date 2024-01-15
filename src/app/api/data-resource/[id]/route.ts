import { NextResponse } from "next/server";

const DATA_SOURCE_URL =
  "https://my-json-server.typicode.com/francesjgonzales/safebuild-json/news";

const API_KEY: string = process.env.DATA_API_KEY as string;

//GET request handler
export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const article: Article = await res.json();

  if (!article.id) return NextResponse.json({ message: "Article not found" });

  return NextResponse.json(article);
}
