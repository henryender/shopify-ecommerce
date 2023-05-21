import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <Paper elevation={4} sx={{
                   
                    height: '5%',
                    display: 'flex',
                    justifyContent: 'center',
                    position:'fixed',
                    bottom:'0',
                    width:'100%'
                }}>
                    <Box mt='0.5%' padding="5px" >
                        <Typography variant='body2' >
                            &copy; Zuma 2023
                        </Typography>
                    </Box>
                </Paper>
            </div>

        </>

    )
}

export default Footer
