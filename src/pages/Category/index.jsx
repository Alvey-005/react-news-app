import { useParams } from 'react-router-dom';
import { useGetHomeNewsQuery } from '../../store/nyTimesApiSlice';
import { Grid, Box, Typography } from '@mui/material';
import NewsArticleBig from '../../components/ui/newsArticleBig';
import { useGetTopHeadLinesQuery, useGetTopHeadLinesByCategoryQuery } from '../../store/newsApiSlice';
import MainLoadingScreen from '../../components/ui/MainLoadingScreen';
const Category = () => {
    const { paper, category } = useParams();
    let newsResponse;
    if(paper == 'ny-times'){
        newsResponse = useGetHomeNewsQuery({
            categoryType: category
        });
    }else if(paper == 'news-api'){
        newsResponse = useGetTopHeadLinesByCategoryQuery({
            category: category,
            pageSize:50,
        });
    }
if(newsResponse.status === 'pending'){
    return <MainLoadingScreen/>
}
const news = newsResponse.data?.articles;
if (news.length === 0){
    return <Box display='flex' justifyContent='center' alignItems='center'><Typography sx={{
        fontSize:'5rem'
    }}>No News At the Moment</Typography></Box>
}
    return (
        <Box sx={{
            margin:'0 auto',

        }}>
            <div className="page-title">
                <h1 style={{
                    textTransform: 'capitalize'
                }}>{category} Updates</h1>
            </div>
            <Grid container spacing={2}>
                {news?.map((article, index) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                        <NewsArticleBig key={index} {...article} source={article?.source?.name || paper} />
                    </Grid>
                ))}
                </Grid>
        </Box>
    )
}
export default Category;