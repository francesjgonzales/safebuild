//This is a server component

async function getArticles() {
  const res = await fetch("http://localhost:4000/news");
  return res.json();
}

export default async function ArticleList() {
  const articles = await getArticles();
  return (
    <>
      {articles.map((news) => (
        <div key={news.id} className="card my-5">
          <p>{news.article}</p>
        </div>
      ))}
    </>
  );
}
