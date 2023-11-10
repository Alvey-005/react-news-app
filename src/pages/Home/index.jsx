import React from "react";
import './home.css';
import NewsArticle from "../../components/ui/newsArticle.jsx";
import NewsArticleBig from "../../components/ui/newsArticleBig.jsx";
import { useGetGuardianNewsQuery } from "../../store/guradianApiSLice.js";
import { useGetTopHeadLinesQuery } from "../../store/newsApiSlice.js";
import { useGetHomeNewsQuery } from "../../store/nyTimesApiSlice.js";
import Discover from "../../components/ui/Discover.jsx";
import { discover, newsApiCategory } from "../../constant/index.jsx";
import Badge from "../../components/ui/Badge.jsx";
import Heading from "../../components/ui/Heading.jsx";
import { Link } from "react-router-dom";

const Home = () => {
    const topNews = useGetGuardianNewsQuery({});
    const newsApiTopNews = useGetTopHeadLinesQuery({})?.data?.articles;
    const nyTimesNews = useGetHomeNewsQuery({
        categoryType: "home"
    })?.data?.articles;
    if (topNews.status === 'pending' || topNews.status === 'rejected') {
        return <div>Loading...</div>
    }
    const guardianArticles = topNews?.data;
    if (!guardianArticles) {
        retun(<div>No data</div>)
    }
    const news = guardianArticles.articles;
    return (
        <>
            <main className="responsive-wrapper">
                <div className="page-title">
                    <h1>Latest Updates</h1>
                </div>
                <div className="magazine-layout">
                    <div className="magazine-column">
                        {news?.slice(0, 8).map((article, index) => (
                            <NewsArticleBig key={index} {...article} type="small" source="The Guardian" />
                        ))}
                    </div>
                    <div className="magazine-column">
                        {newsApiTopNews?.map((article, index) => (
                            <NewsArticleBig key={index} {...article} type='large' source={article.source.name || 'News Api'} />
                        ))}
                    </div>
                    <div className="magazine-column">
                        {nyTimesNews?.slice(0, 6).map((article, index) => (
                            <NewsArticleBig key={index} {...article} type='small' source='New York Times' />
                        ))}
                    </div>
                    <div className="magazine-column">
                    <Heading>More News</Heading>
                        <section className="category">
                            {
                                newsApiCategory.map((val) => (
                                    <Link style={{
                                        textDecoration:'none'
                                    }}to={`news-api/${val}`}>
                                    <Badge style={{
                                        postion: 'relative',
                                        margin: '20px 0',
                                        padding:'20px'
                                    }}>{val}</Badge>
                                    </Link>
                                ))
                            }
                        </section>
                    </div>
                </div>
                <Discover title='More from NY Times' discover={discover} />
            </main>
        </>
    )
}



export default Home;