import NewsArticleAuthor from './newsArticleAuthor';
const NewsArticle = ({ title, description, url, thumbnail,author,authorImage }) => {
    console.log()
    return (
        <>
            <article className="article">
                <h2 className="article-title article-title--large">
                    <a href={url} className="article-link">{title}</a>
                </h2>
                <div className="article-excerpt">
                   <p>{description}</p>
                </div>
                <NewsArticleAuthor author={author} authorImage={authorImage}/>
            </article>
        </>
    )
}
export default NewsArticle;