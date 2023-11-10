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
            padding:0,
            // width:'1250px',
            media: {
                sm: {
                    padding:0,
                },
                lg:{
                    padding:'0 15px',
                }
              },
            
        }}>
            <Header/>
            {/* <Hero/> */}
            <Box sx={{
                margin:'0 auto',
            
            }}>
            {children}
            </Box>
            <Footer/>
        </Box>
        </>
    )
}

export default Layout;