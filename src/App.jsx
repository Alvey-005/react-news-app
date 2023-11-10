import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/layout/Hero'
import NewsCard from './components/ui/NewsCard';
import { useGetTopHeadLinesQuery } from './store/newsApiSlice'
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button } from '@mui/material'
import ProthomAloSmallCard from './components/ui/ProthomAloSmallCard'
import NewsSlider from './components/ui/NewsSlider'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
function App() {
 
  // const topNews = useGetTopHeadLinesQuery({})?.data?.articles;

  return (
    <><RouterProvider router={router}>
      <Hero />
      {/* <NewsSlider items={topNews} /> */}
      {/* {topNews?.map((news, index) => (
        <ProthomAloSmallCard news={news}/>
      ))} */}
      {/* <Box sx={{
        width:'100%',
        display: 'flex',
        justifyContent:'space-between',
      }}>
        <Box sx={{
          width:'65%',
          flexGrow: 1,
        }}>

        </Box>
        <Box sx={{width:'35%',
      flexShrink:1}}>
          {topNews?.map((news, index) => (
            <ProthomAloSmallCard news={news}/>
          ))}
        </Box>
      </Box> */}

      </RouterProvider>
    </>
  )
}

export default App
