import React from "react";
import './home.css';
import NewsArticle from "../../components/ui/newsArticle.jsx";
import NewsArticleBig from "../../components/ui/newsArticleBig.jsx";
import { useGetGuardianNewsQuery } from "../../store/guradianApiSLice.js";
import { useGetEverythingQuery ,useGetTopHeadLinesSourceQuery} from "../../store/newsApiSlice.js";
import { useGetHomeNewsQuery } from "../../store/nyTimesApiSlice.js";
import Discover from "../../components/ui/Discover.jsx";
import { discover, newsApiCategory, preferedListTotal } from "../../constant/index.jsx";
import Badge from "../../components/ui/Badge.jsx";
import Heading from "../../components/ui/Heading.jsx";
import { Link } from "react-router-dom";
import MainLoadingScreen from "../../components/ui/MainLoadingScreen.jsx";
import '../../styles/button.css';
import {store} from '../../store';
import{ guardianApiSlice } from '../../store/guradianApiSLice.js';
import { set } from "date-fns";

const Home = () => {
    const [preferedList,setPreferedList] = React.useState([]);
    const [showFullPreferedList,setShowFullPreferedList] = React.useState(false);
    const handleShowFullPreferedList = () => {
        setShowFullPreferedList(!showFullPreferedList);
    }
    let showList = [];
    if (showFullPreferedList){
        showList = preferedListTotal
    }else{
        showList = preferedListTotal.slice(0,12);
    }
    const handlePreferedListAdd =  (val) => {
        if (preferedList.includes(val)) {
            setPreferedList(preferedList.filter((item) => item !== val));
          } else {
            setPreferedList([...preferedList, val]);
         }


    };
    console.log('preferedList',preferedList);
    const sources = useGetTopHeadLinesSourceQuery({})?.data?.sources
    const topNews = useGetGuardianNewsQuery(preferedList.length>0 ? preferedList.join(","):"current");
    const newsApiTopNews = useGetEverythingQuery(preferedList.length>0 ? preferedList.join(","):"current")?.data?.articles;
    const nyTimesNews = useGetHomeNewsQuery({
        categoryType: "home"
    })?.data?.articles;
    if (topNews.status === 'pending' || topNews.status === 'rejected') {
        return <MainLoadingScreen />
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

<Heading>Select any to customize your feed</Heading>
 
                <div style={{
                    display:'grid',
                    marginTop:'20px',
                    gridTemplateColumns:'repeat(6,1fr)'
                }}>
                    {showList.map((val) => (
                <button onClick={()=>handlePreferedListAdd(val)} class={`fill ${preferedList.includes(val)?"active":""}`}>{val}</button>

                    ))}
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:'20px'
                }}>
                    <button onClick={handleShowFullPreferedList} class={`fill`}>{showFullPreferedList?"Show Less":"Show More"}</button>
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