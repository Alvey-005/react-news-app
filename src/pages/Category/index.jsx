import { useParams } from 'react-router-dom';
import { useGetHomeNewsQuery } from '../../store/nyTimesApiSlice';
import { Grid, Box } from '@mui/material';
import NewsArticleBig from '../../components/ui/newsArticleBig';
import { useGetTopHeadLinesQuery, useGetTopHeadLinesByCategoryQuery } from '../../store/newsApiSlice';
const Category = () => {
    const { paper, category } = useParams();
    let news = [];
    if(paper == 'ny-times'){
         news = useGetHomeNewsQuery({
            categoryType: category
        })?.data?.articles;
    }else if(paper == 'news-api'){
         news = useGetTopHeadLinesByCategoryQuery({
            category: category,
            pageSize:50,
        })?.data?.articles;
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
                        <NewsArticleBig key={index} {...article} source={article.source.name || paper} />
                    </Grid>
                ))}
                </Grid>
        </Box>
    )
}
export default Category;