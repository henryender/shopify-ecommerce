
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { ProductContext } from '../context/ProductContext';
import { formatter } from './productCard';


export default function ProductCart() {
    const { basket, setBasket, count, setCount, product } = React.useContext(ProductContext)
    let aggregate = basket?.reduce((preVal, currVal) => {
        return preVal + currVal?.itemPrice
    }, 0)
    const removeFromCart = (i) => {
        const newCartList = basket.filter((x, index) => index !== i)
        setBasket([...newCartList])
        setCount(count - 1)
    }
    return (
        <>
            <div style={{ marginTop: '70px', marginBottom: '50px' }}>
                <Grid container justifyContent='center'>

                    {basket?.length === 0 ? (
                        <Box marginTop='120px'>
                            <Typography variant="h5" fontSize={{ xs: '20px', md: "30px" }}>
                                Your Cart is Empty
                                </Typography>
                            <Box textAlign='center'>
                                <ShoppingBagIcon sx={{ fontSize: "150px", color: "#fe8207" }} />

                            </Box>
                            <Box textAlign='center'>
                                <Link to='/'>
                                    <Button variant='outlined' size='medium'>Continue shopping</Button>
                                </Link>

                            </Box>

                        </Box>
                    ) :
                        (basket?.map((_, i) =>
                            <>

                                <Grid item lg={8} md={8} sm={10} xs={12} key={i} >
                                    <Box display={{ sm: 'flex' }} border='2px solid lightgray'>
                                        <Box width='60%' margin='auto'>
                                            <img src={_?.coverPhoto?.url}
                                                alt='item' width='80%' />
                                        </Box>
                                    </Box>
                                    <Box
                                        textAlign="center" padding='5px'  >
                                        <Box display={{ xs: 'flex' }} justifyContent={{ xs: 'space-between' }}>
                                            <Typography variant='h6'
                                                gutterBottom>{_?.itemName}</Typography>

                                            <Typography variant="body2" sx={{ fontSize: 15 }}>
                                                {formatter.format(_?.itemPrice)}
                                            </Typography>
                                        </Box>
                                        <Typography variant='body2' textAlign="left">Shipping: <strong>NGN 2,000</strong> to Abuja</Typography>
                                    </Box>
                                    <Box textAlign="center" padding='5px' sx={{
                                        backgroundColor: "#fe8207", '&:hover': {
                                            backgroundColor: 'lightgray',
                                            opacity: [0.9, 0.8, 0.7],
                                        }
                                    }} >
                                        <Button size="medium" onClick={() => removeFromCart(i)} >
                                            <span style={{ color: 'white' }}>Remove from cart</span>
                                        </Button>
                                    </Box>
                                </Grid>
                            </>

                        ))}
                    {/* <Typography sx={{ margin: '2%' }}>
                                        <Link to={`/products/${_.id}`}>
                                            <ArrowBackIcon fontSize='large' />
                                        </Link>
                       
                       </Typography> */}


                </Grid>


                <Box padding='5px' textAlign='center'>

                    {basket?.length === 0 ? (null) : (
                        <>
                            <h2>Total: <strong>{formatter.format(aggregate)}</strong></h2>
                            <h4>Shipping fees not included yet</h4>
                            <Link to={`/checkout/${product.id}`}>
                                <Button size="medium" variant='contained' sx={{
                                    backgroundColor: '#fe8207', '&:hover': {
                                        backgroundColor: 'lightgray',
                                        opacity: [0.9, 0.8, 0.7],
                                    }
                                }}
                                onClick={()=>{setBasket([]); setCount(0)}}
                                >
                                    Check Out
                                </Button>
                            </Link>
                        </>

                    )}

                </Box>

            </div>


        </>);
}