// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import CustomizedBadges from './Badge';
// import { Link } from 'react-router-dom';

// export default function Header() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}>
//                         <MenuIcon sx={{ color: 'black' }} />
//                     </IconButton>

//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         <Link  to='/'style={{ textDecoration: 'none', color: 'black' }}> Shopify</Link>
//                     </Typography>
//                    <Typography>Hello</Typography>
//                     <CustomizedBadges />

//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }


import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CustomizedBadges from './Badge'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import StoreIcon from '@mui/icons-material/Store';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 5,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
    },
}));

export default function Header({input, setInput}) {
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"

                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon sx={{ color: 'black' }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', md: 'block' }, color: 'black' }}
                    >
                        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}> Shopify</Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { md: 'none' }, color: 'black' }}
                    >
                        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                            <StoreIcon fontSize='large' sx={{color:'red', display:'flex', justifyContent:'center'}}/></Link>
                    </Typography>
                    <ScrollLink to="card"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <div>
                            <Search sx={{ color: 'black' }} >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="what are you looking for?"
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={input}
                                    onChange={(e)=>setInput(e.target.value)}
                                />
                            </Search>
                        </div>
                    </ScrollLink>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex' }}>
                        <CustomizedBadges />


                    </Box>
                </Toolbar>
            </AppBar>

        </Box>
    );
}