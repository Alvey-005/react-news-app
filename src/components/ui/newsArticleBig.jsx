import { Box } from "@mui/material";
import Badge from "./Badge";
import NewsArticleAuthor from "./newsArticleAuthor";

const NewsArticleBig = ({ source,type='small',title, description, author, url, urlToImage ,authorImage}) => {

    return (
        <>
            <article className="article">

                <figure className="article-img">
                    <img  src={urlToImage || "https://via.placeholder.com/400"} />
                    <Badge style={{position:'absolute',top: 0,left:0}}>{source}</Badge>
                </figure>
                <h2 className={`article-title article-title--${type}`}>
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
export default NewsArticleBig;