import ArticleList from "./ArticleList";

export default function Articles() {
  return (
    <div>
      <div className="slider__medium bg-top bg-cover bg-[url('/assets/proj-hero-img.jpg')]">
        <p className="text-3xl ">News & Events</p>
      </div>
      <div className="p-10 m-10">
        <ArticleList />
      </div>
    </div>
  );
}
