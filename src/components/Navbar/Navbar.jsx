import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BentoIcon from '@mui/icons-material/Bento';
import NavLinks from '../NavLinks/NavLinks';
import NavMobile from '../NavLinks/NavMobile';

const pages = ['Home', 'Projects', 'About'];

const Navbar = () => {
    const [mode, setMode] = React.useState("light");
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div id="home-id">
            <AppBar className='' sx={{ backgroundColor: '#000', color: '#ecf0f1' }} position="static">
                <Container maxWidth="xl">
                    <Toolbar className='flex justify-between' disableGutters>
                        <Stack direction="row">
                            <BentoIcon sx={{ fontSize: '30px', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    ml: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    // letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <p className='text-sm md:text-lg'>Md. A. Barik - Portfolio</p>
                            </Typography>
                        </Stack>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {/* {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))} */}

                                <div className='p-4'>
                                    <NavMobile></NavMobile>
                                </div>


                            </Menu>
                        </Box>
                        {/* <BentoIcon sx={{ fontSize: '30px', display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            // href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                ml: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <p className='text-sm md:text-lg'>Md. A. Barik - Portfolio</p>
                        </Typography>


                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                            <NavLinks></NavLinks>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
export default Navbar;