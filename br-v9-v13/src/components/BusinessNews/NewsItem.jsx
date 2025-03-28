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
  const domain = newsItem.url
    ? new URL(newsItem.url).hostname.replace("www.", "")
    : "";

  return (
    <article
      tabIndex="0"
      className="h-[550px] flex flex-col justify-between bg-accent card-hover-effect w-full my-10 m-4 p-3 box-content shadow-xl hover:shadow-2xl rounded-md md:w-5/12 xl:w-3/12"
    >
      <h4 className="font-title font-semibold text-center">{newsItem.title}</h4>
      <span>
        <p className="relative font-semibold mb-1">Full article:</p>
        <a
          className="font-text italic underline break-words "
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {domain}
        </a>
      </span>
      <figure className="w-full flex justify-center items-center mb-4">
        <img
          className="max-w-full max-h-64 object-contain mx-auto"
          src={newsItem.urlToImage || "/Alt.png"}
          alt={newsItem.title}
        />
      </figure>

      <time className="italic text-sm text-center">
        {newsItem.publishedAt.replace("T", " ").replace("Z", " ")}
      </time>
      <p className="font-text mb-2">{newsItem.description}</p>
    </article>
  );
}

export default NewsItem;
