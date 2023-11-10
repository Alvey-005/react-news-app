import AvatarImage from '../../assets/image/avatar.png';
const NewsArticleAuthor = ({ author,authorImage }) => {
    console.log('bylineImageUrl',authorImage);
    return (
        <>
            <div className="article-author">
                <div className="article-author-img">
                    <img src={authorImage|| AvatarImage} />
                </div>
                <div className="article-author-info">
                    <dl>
                        <dt style={{  wordBreak: 'break-all'}}>{author}</dt>
                        <dd>Editor</dd>
                    </dl>
                </div>
            </div>
        </>
    )
}
export default NewsArticleAuthor;