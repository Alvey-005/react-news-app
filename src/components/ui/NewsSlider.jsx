import Slider from 'react-slick';
import { useRef } from 'react';
import { Box } from '@mui/material';
import NewsCard from './NewsCard';
import React from 'react';
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)(
    ({ theme, padding }) => ({
      display: "flex !important",
      justifyContent: "center",
      overflow: "initial !important",
      "& > .slick-list": {
        overflow: "visible",
      },
      [theme.breakpoints.up("sm")]: {
        "& > .slick-list": {
          width: `calc(100% - ${2 * padding}px)`,
        },
        "& .slick-list > .slick-track": {
          margin: "0px !important",
        },
        "& .slick-list > .slick-track > .slick-current > div > .BingeBox-root > .BingePaper-root:hover":
          {
            transformOrigin: "0% 50% !important",
          },
      },
      [theme.breakpoints.down("sm")]: {
        "& > .slick-list": {
          width: `calc(100% - ${padding}px)`,
        },
      },
    })
  );
  
const NewsSlider = ({ items }) => {
    const sliderRef = useRef(null);

    const handlePrevious = () => {
        sliderRef.current?.slickPrev();
    };

    const handleSlideNext = () => {
        sliderRef.current?.slickNext();
    };
    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        lazyLoad: "ondemand",
        slidesToShow: 3,
        slidesToScroll: 1,
        // responsive: [
        //   {
        //     breakpoint: 1536,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //     },
        //   },
        //   {
        //     breakpoint: 1200,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //     },
        //   },
        //   {
        //     breakpoint: 900,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //     },
        //   },
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //     },
        //   },
        // ],
    };
    return (
        <>
            <Box sx={{ position: 'relative', padding: '0 30px' }}>
                <Box
                    onClick={handlePrevious}
                    sx={{
                        position: 'absolute',
                        top: '0',
                        left: 0,
                        width: '30px',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#1f1f1fa8',
                        cursor:'pointer',
                        zIndex: 10,
                        opacity: '.5',
                        transition: 'all .3s ease-in-out',
                        '&:hover': {
                            opacity: '1',
                            width: '70px',
                        }
                    }}>
                    <svg width="40" height="40" viewBox="0 0 12 20" fill="none">
                        <path d="M3.01285 10.0017L11.461 1.55337C11.816 1.19834 11.816 0.622761 11.461 0.26773C11.106 -0.0873005 10.5304 -0.0873005 10.1753 0.267791L1.08442 9.35896C0.913873 9.52938 0.818115 9.7606 0.818115 10.0017C0.818115 10.2428 0.913933 10.4741 1.08442 10.6445L10.1753 19.7352C10.3528 19.9127 10.5855 20.0015 10.8181 20.0015C11.0508 20.0015 11.2835 19.9127 11.461 19.7352C11.816 19.3801 11.816 18.8046 11.461 18.4495L3.01285 10.0017Z" fill="#FFF" />
                    </svg>
                </Box>
                <Box
                    onClick={handleSlideNext}
                    sx={{
                        position: 'absolute',
                        top: '0',
                        right: 0,
                        width: '30px',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#1f1f1fa8',
                        zIndex: 10,
                        opacity: '.5',
                        cursor:'pointer',
                        transition: 'all .3s ease-in-out',
                        '&:hover': {
                            opacity: '1',
                            width: '70px',
                        }
                    }}>
                    <svg width="40" height="40" viewBox="0 0 12 20" fill="none">
                        <path d="M9.53256 10.0012L1.08443 18.4496C0.729397 18.8046 0.729397 19.3802 1.08443 19.7352C1.43946 20.0902 2.01504 20.0902 2.37007 19.7351L11.461 10.644C11.6315 10.4735 11.7273 10.2423 11.7273 10.0012C11.7273 9.76009 11.6315 9.52888 11.461 9.35839L2.37007 0.267708C2.19261 0.0901921 1.95994 0.00146436 1.72728 0.00146436C1.49461 0.00146436 1.26194 0.0901925 1.08443 0.267769C0.729397 0.6228 0.729397 1.19838 1.08443 1.55341L9.53256 10.0012Z" fill="#fff" />
                    </svg>
                </Box>
                <Box sx={{
                    marginLeft: '10px',
                }}>
                <Slider {...settings} ref={sliderRef}>

{
    items?.map((news, index) => {
        return <NewsCard key={index} news={news} />
    })
}
</Slider>
                </Box>
                
            </Box>
        </>
    )
}
export default NewsSlider;