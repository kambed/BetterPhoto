import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
// @ts-ignore
import logo from "../assets/betterphoto_logo_wide.png";

const pages = [
    {name: 'OFERTA', route: '/products'},
    {name: 'GALERIA', route: '/gallery'},
    {name: 'POMOC', route: '/help'},
    {name: 'KONTAKT', route: '/contact'}
];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" className="nav-bar">
            <Toolbar disableGutters>
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {xs: 'block', md: 'none'},
                        }}>
                        {pages.map((page) =>
                            <Link key={page.name} to={page.route} style={{textDecoration: 'none', color: '#000000'}}>
                                <MenuItem>{page.name}</MenuItem>
                            </Link>
                        )}
                    </Menu>
                </Box>

                <Link to="/">
                    <img src={logo} alt="Logo" style={{height: '2rem', margin: '0 2rem 0 2rem'}}/>
                </Link>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    {pages.map((page) =>
                        <Link key={page.name} to={page.route} style={{textDecoration: 'none', color: '#FFFFFF'}}>
                            <MenuItem>{page.name}</MenuItem>
                        </Link>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
