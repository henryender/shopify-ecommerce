import * as React from 'react';

import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, Stack } from '@mui/material';
import { ProductContext } from '../context/ProductContext';


//To convert numbers and currency to readable formats
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ngn'
})

//Truncate function for string used at item Name
export const truncate = (str, n) => {
    return String(str).length > n ? String(str).substring(0, n - 1) + '...'
        : str
}
export default function MediaCard({ input }) {
    const { res } = React.useContext(ProductContext)
    return (
        <>
            <div >
                <Grid container spacing={1} sx={{marginBottom:'50px'}}>
                    {res.filter((item) => item.itemName.toLowerCase().includes(`${input}`)
                        || item.category.toLowerCase().includes(`${input}`))
                        .map((item) =>
                            <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                                <Link to={`/products/${item.id}`} style={{ textDecoration: 'none' }}>
                                <Box margin='2%'>
                                    <Paper elevation={3}>
                                        <Box display='flex' justifyContent='center' padding='5px'>
                                            <Typography>
                                                Category: {item.category}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' justifyContent='center' padding='10px' >
                                            <img src={item.coverPhoto.url} width='300px' height='200px' alt='Error loading..' />  
                                        </Box>
                                        <Stack direction={{xs:'column', sm:'row'}} justifyContent='space-around'>
                                            <Typography sx={{textAlign:'center'}}>{item.itemName}</Typography>
                                            <Typography sx={{textAlign:'center'}}>{formatter.format(item.itemPrice)} 
                                            </Typography>
                                        </Stack>

                                        <Box padding='5px' m='4px'>
                                            <Typography variant='body2'>Description: {truncate(item.itemDescription,40)} <span style={{color:'blue', cursor:'pointer'}}>readmore</span></Typography> </Box>
                                       
                                    </Paper>
                                </Box>

                                </Link>
                               
                            </Grid>
                        
                        
                        )}

                </Grid>

            </div>
        </>
    );
}