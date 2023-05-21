import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Rating } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import axios from 'axios';
import { formatter } from './productCard';



export default function ProductDetails() {
    //Fetch Product details using axios
    const { setCount, count, basket, setBasket, product, setProduct } = React.useContext(ProductContext)
    const { id } = useParams()
    const [index, setindex] = React.useState(0)
    // const [hover, sethover]= React.useState(false)
    console.log(index)
    React.useEffect(() => {
        const query = `query($id:ID){
            item(where: {id: $id}){
              id
              itemName
              itemDescription
              itemPrice
              productPhoto {url}
              coverPhoto{
                url
              }
              category
              createdAt
            }
        }`
        const variables = {
            id: id
        }
        async function getProductDetails() {
            await axios.request({
                url: 'https://api-ca-central-1.hygraph.com/v2/cle1yz6et3z1m01rraj6jbs00/master',
                method: 'POST',
                data: { query, variables }
            }).then((res) => {
                setProduct(res.data.data.item)
            })
        }

        getProductDetails()
    }, [id, setProduct])

    return (
        <div>
            <Grid container sx={{ marginBottom: "10%" }} >
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{
                    marginTop: '6%',
                    marginBottom: { xs: "none", md: '70px' },
                }}>

                    <Box sx={{ width: "70%", margin: 'auto' }} >
                        {<img src={index ? index : product.coverPhoto?.url} alt='loading...' width='100%' height='250px' />}
                    </Box>

                    <Box width='32%' padding='5px'
                        display='flex' justifyContent='flex-end'>
                        <Typography variant="body2" >
                            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                        </Typography>
                    </Box>

                    <Box display='flex' justifyContent='space-between' padding='5px' width='70%' margin='auto'>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.itemName}
                        </Typography>
                        <Typography variant="body1" >
                            {formatter.format(product.itemPrice)}
                        </Typography>
                    </Box>

                    <Box display='flex' width='80%' padding='5px' margin='auto' justifyContent='center' >
                        {product.productPhoto?.map((item, i) =>
                            <img src={item.url} alt="loading..." width='30%'
                                style={{ border: '2px solid #fe8207', borderRadius: "10px" ,
                             
                            }} key={i}
                                onMouseEnter={() => {setindex(item.url)}}
                                />)}
                    </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ marginTop: '8%' }}>
                    <Box width='90%' margin="auto">
                        <Box padding='10px' textAlign="center">
                            <Typography gutterBottom variant="h5" component="div">
                                Product Description
                            </Typography>
                        </Box>
                        <Box padding="10px" textAlign='left'>
                            <Typography variant="body2" >
                                {product.itemDescription}
                            </Typography>
                        </Box>
                        <Box
                            width={{ xs: '60%', sm: "40%", md: '50%' }}
                            margin="auto"
                            padding="20px"
                            display='flex'
                            justifyContent='space-around'>

                            <Button size="small"
                                variant='contained'
                                sx={{backgroundColor: '#fe8207','&:hover': {backgroundColor: 'lightgray',
                                opacity: [0.9, 0.8, 0.7],}}}
                                onClick={() => {
                                    setCount(count + 1);
                                    setBasket([...basket, product])}}>
                                Add to cart
                            </Button>

                            <Button size="small" variant='contained'
                                sx={{
                                    backgroundColor: '#fe8207',
                                    '&:hover': {
                                        backgroundColor: 'lightgray',
                                        opacity: [0.9, 0.8, 0.7],
                                    }
                                }}>

                                <Link
                                    to='/products/cart'
                                    style={{ textDecoration: 'none', color: 'white' }}>
                                    View Cart
                                </Link>
                            </Button>
                        </Box>

                    </Box>


                </Grid>



            </Grid>





        </div>
    );
}