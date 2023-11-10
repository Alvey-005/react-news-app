import { Box } from "@mui/material";
import {Header, Footer} from '../components/layout';
import {useGetTopHeadLinesQuery,useGetTopHeadLinesSourceQuery,useGetEverythingQuery} from '../store/newsApiSlice';
import Hero from "../components/layout/Hero";

const Layout = ({children}) => {
    // const story = useGetEverythingQuery({
    //     query:'tesla'
    // });
    // const sources = useGetTopHeadLinesSourceQuery({
    //     category:'business'
    // })
    // console.log('storey', story);

    return (
        <>
        <Box sx={{
            width:'1250px',
            padding:'0 15px',
        }}>
            <Header/>
            {/* <Hero/> */}
            {children}
            <Footer/>
        </Box>
        </>
    )
}

export default Layout;