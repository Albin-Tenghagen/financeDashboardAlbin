/**
 * NewsItem.jsx
 *
 * A presentational component that displays an individual news article.
 * Receives a single `newsItem` object via props and renders:
 * - Title
 * - Image
 * - Published date
 * - Description
 * - Link to full article
 */

function NewsItem({ new: newsItem }) {
  return (
    <article className="  hover:scale-125 bg-white w-full my-10 m-4 p-3 box-content shadow-lg  rounded-md md:w-5/12 xl:w-3/12">
      <h4 className=" font-semibold">{newsItem.title}</h4>
      <img className="italic " src={newsItem.urlToImage} alt={newsItem.title} />
      <p className="italic">
        {newsItem.publishedAt.replace("T", " ").replace("Z", " ")}
      </p>
      <p className="">{newsItem.description}</p>
      <p>Full article: </p>
      <a
        className="italic underline"
        href={newsItem.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {newsItem.url}
      </a>
    </article>
  );
}
export default NewsItem;
