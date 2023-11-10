import { Box } from "@mui/material";
import React from "react";

const Badge = ({children, style}) => {
    return (
        <Box sx={{
            background: 'linear-gradient(90deg,#fb4c35 50%,#000 0)',
            backgroundPosition: '100% 100%',
            backgroundSize: '200% 100%',
            borderLeft: '5px solid #fb4c35',
            cursor: 'pointer',
            // position: 'absolute',
            transition: 'all .5s ease-out',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '2px',
            padding: '5px 10px',
            textTransform: 'uppercase',
            "&:hover": {
                backgroundPosition: '0 100%'
            }
        }}
        style={style}
        >
            {children}
        </Box>
    )
}
export default Badge;