import { useParams } from 'react-router-dom';
import { useGetHomeNewsQuery } from '../../store/nyTimesApiSlice';
import { Grid, Box } from '@mui/material';
import NewsArticleBig from '../../components/ui/newsArticleBig';
const Category = () => {
    const { paper, category } = useParams();
    const news = useGetHomeNewsQuery({
        categoryType: category
    })?.data?.articles;
    console.log(news);
    return (
        <Box sx={{
            margin:'0 auto',

        }}>
            <div className="page-title">
                <h1 style={{
                    textTransform: 'capitalize'
                }}>{category}Updates</h1>
            </div>
            <Grid container spacing={2}>
                {news?.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <NewsArticleBig key={index} {...article} source={paper} />
                    </Grid>
                ))}
                </Grid>
        </Box>
    )
}
export default Category;