import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function CustomizedBadges() {
  const {count}=React.useContext(ProductContext)
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={count} color="error">
        <Link to="/products/cart"><ShoppingCartIcon sx={{color:'black'}}/></Link>
      </StyledBadge>
    </IconButton>
  );
}