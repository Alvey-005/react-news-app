import React from "react"
import { Box, Typography } from "@mui/material"

const Heading = ({ children }) => {
    return (
        <>
            <Box sx={{
                margin: '30px 0',
                backgroundImage: `url("./assets/image/title_pattern.png")`,
                height: '35px',
                backgroundPosition: 'center',
            }}>
                <Typography variant='h6' sx={{
                    fontWeight: 400,
                    background: '#fb4c35',
                    color: '#fff',
                    height: '35px',
                    width: 'fit-content',
                    textAlign: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '14px',
                    padding: '0 10px',
                }}>{children}</Typography>
            </Box>
        </>
    )
}

export default Heading;