import { Box, Link, Typography } from "@mui/material"
import { differenceInDays } from 'date-fns';


const ProthomAloSmallCard = ({ news }) => {
    const givenDate = new Date(news.publishedAt);
    const today = new Date();
    const daysAgo = differenceInDays(today, givenDate);
    return (
        <>
            <Link sx={{
                color:'black',
                textDecoration:'none'
            }}>
                <Box sx={{
                    marginBottom: '20px',
                    width: '100%',
                    // height:'200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        width: '35%',
                    }}>
                        <Box component='img' src={news.urlToImage} sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '5px'
                        }} />
                    </Box>
                    <Box sx={{
                        width: '65%',
                        paddingLeft: '10px'
                    }}>
                        <Typography sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            fontSize: '14px',
                            WebkitBoxOrient: 'vertical',
                        }}>
                            {news.title}
                        </Typography>
                        <Typography>{daysAgo} days ago</Typography>
                    </Box>
                </Box>
            </Link>
        </>
    )
}

export default ProthomAloSmallCard;