//This is a server component

import { Key } from "react";

async function getArticles() {
  const res = await fetch("./app/data.json");
  return res.json();
}

export default async function ArticleList() {
  const articles = await getArticles();
  return (
    <>
      {articles.map(
        (article: {
          id: Key;
          title: string;
          date: number;
          article: string;
        }) => (
          <div key={article.id} className="card my-5">
            <p className="py-10 subheader">{article.title}</p>
            <p>{article.date}</p>
            <p>{article.article}</p>
          </div>
        )
      )}
    </>
  );
}
