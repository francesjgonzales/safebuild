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

//DELETE request handler
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

//POST request handler
export async function POST(request: Request) {
  const { id, title }: Partial<Article> = await request.json();
  if (!id || !title)
    return NextResponse.json({ message: "Missing data required" });

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      id,
      title,
      completed: false,
    }),
  });
  const newArticle: Article = await res.json();
  return NextResponse.json(newArticle);
}

//PUT request handler
export async function PUT(request: Request) {
  const { id, date, title, article, completed }: Partial<Article> =
    await request.json();
  if (!id || !title || !date || !article || typeof completed !== "boolean")
    return NextResponse.json({ message: "Missing data required" });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      date,
      title,
      article,
      completed,
    }),
  });
  const updatedArticle: Article = await res.json();
  return NextResponse.json(updatedArticle);
}
