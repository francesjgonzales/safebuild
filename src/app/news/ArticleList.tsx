//This is a server component

async function getArticles() {
  const res = await fetch("http://localhost:4000/news");
  return res.json();
}

export default async function ArticleList() {
  const articles = await getArticles();
  return (
    <>
      {articles.map((article) => (
        <div key={article.id} className="card my-5">
          <p className="py-10 subheader">{article.title}</p>
          <p>{article.date}</p>
          <p>{article.article}</p>
        </div>
      ))}
    </>
  );
}
