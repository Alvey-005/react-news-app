import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ArrowStyle = styled(Box)(({ theme }) => ({
    top: 0,
    bottom: 0,
    position: "absolute",
    zIndex: 9,
    height: "100%",
    opacity: 0.48,
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    color: 'white',
    // background: theme.palette.grey[700],
    transition: theme.transitions.create("opacity"),
  "&:hover": {
    opacity: 0.8,
    background: theme.palette.grey[900],
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },

  }));
  export default function SliderArrow({
    isEnd,
    onNext,
    children,
    onPrevious,
    arrowWidth,
    activeSlideIndex,
  }) {
    return (
      <>
        {/* {activeSlideIndex > 0 && ( */}
          <ArrowStyle
            onClick={onPrevious}
            sx={{
              left: 0,
              width: { xs: arrowWidth / 2, sm: arrowWidth },
              borderTopRightRadius: { xs: "4px" },
              borderBottomRightRadius: { xs: "4px" },
              // backgroundImage: (theme) =>
              //   `linear-gradient(to right, ${theme.palette.background.default} 0%, rgba(0,0,0,0) 100%)`,
            }}
          >
            {/* <ArrowBackIosNewIcon /> */}
          </ArrowStyle>
        {/* )} */}
  
        {children}
        {/* {!isEnd && ( */}
          <ArrowStyle
            onClick={onNext}
            sx={{
              right: 0,
              width: { xs: arrowWidth / 2, sm: arrowWidth },
              borderTopLeftRadius: { xs: "4px" },
              borderBottomLeftRadius: { xs: "4px" },
              // backgroundImage: (theme) =>
              //   `linear-gradient(to left, ${theme.palette.background.default} 0%, rgba(0,0,0,0) 100%)`,
            }}
          >
            {/* <ArrowForwardIosIcon /> */}
          </ArrowStyle>
        {/* )} */}
      </>
    );
  }
  