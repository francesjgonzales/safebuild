import { NextResponse } from "next/server";

const DATA_SOURCE_URL =
  "https://my-json-server.typicode.com/francesjgonzales/safebuild-json/news";

const API_KEY: string = process.env.DATA_API_KEY as string;

//GET request handler
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const articles: Article[] = await res.json();

  return NextResponse.json(articles);
}

export async function DELETE(request: Request) {
  const { id }: Partial<Article> = await request.json();
  if (!id) return NextResponse.json({ message: "Article id required" });
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });
  return NextResponse.json({ message: `Article ${id} deleted` });
}
