import {  Box, Typography } from "@mui/material"
import Badge from "./Badge";
const NewsCard = ({ news }) => {
    return (
        <Box sx={{
            width: '100%',
            aspectRatio:'16/9',
            borderRadius: '5px'
        }}>
            <Box sx={{
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                margin: '15px',
                marginLeft: '0px',
                position: 'relative',
                // boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px',
            }}>
                <Box sx={{
                    // height: '200px',
                    position: 'relative',
                    // width: '50%',
                }}>
                    <Box component='img' src={news.urlToImage} sx={{
                        width: '100%',
                        aspectRatio:'16/9',
                        // height: '100%',
                        objectFit: 'cover',
                        
                    }} />
<Badge>{news.source.name}</Badge>
                    <Box sx={{
                        position: 'absolute',
                        bottom: '0px',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1))',
                    }}>
                        <Typography sx={{
                            color: '#fff',
                            marginBottom: '10px',
                            padding: '0px 0 0 20px',
                            fontSize: '18px',
                            fontWeight: 600,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                        }}>{news.title} </Typography>


                    </Box>
                </Box>
                <Box sx={{
                    // height:'200px'
                }}>
                    <Typography sx={{
                        color: '#000',
                        margin: 0,
                        paddingRight: '20px',
                        paddingTop: '10px',
                        fontSize: '16px',
                        textAlign: 'right',
                        fontWeight: 600
                    }}>{news.author} </Typography>
                    <Typography sx={{
                        color: '#000',
                        margin: 0,
                        paddingRight: '20px',
                        paddingTop: '5px',
                        fontSize: '16px',
                        textAlign: 'right',
                        fontWeight: 400
                    }}>{new Date(news.publishedAt).toDateString()} </Typography>
                    <Typography sx={{
                        color: '#000',
                        margin: 0,
                        padding: '10px',
                        paddingBottom:'0px',

                        // padding: '20px 0 0 20px',
                        fontSize: '16px',
                        fontWeight: 400,
                        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
                    }}>{news.description} </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default NewsCard;