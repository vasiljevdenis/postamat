import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" top={'0'} zIndex={'10'}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={RouterLink} to={'/about'} onClick={handleClose}>О нас</MenuItem>
            <MenuItem component={RouterLink} to={'/ads'} onClick={handleClose}>Реклама на постаматах</MenuItem>
            <MenuItem component={RouterLink} to={'/franchise'} onClick={handleClose}>Франшиза</MenuItem>
            <MenuItem component={RouterLink} to={'/patrnership'} onClick={handleClose}>Сотрудничество</MenuItem>
            <MenuItem component={RouterLink} to={'/entrance'} onClick={handleClose}>Постамат в подъезд</MenuItem>
            <MenuItem component={RouterLink} to={'/feedback'} onClick={handleClose}>Обратная связь</MenuItem>
            <MenuItem component={RouterLink} to={'/map'} onClick={handleClose}>Постаматы на карте</MenuItem>
            <MenuItem component={RouterLink} to={'/donat'} onClick={handleClose}>Поддержать развитие проекта</MenuItem>
          </Menu>
          <ThumbUpOutlinedIcon style={{
            border: '1px solid #000',
            borderRadius: '50%',
            padding: '.5rem',
            marginRight: '1rem'
          }} />
          <Typography
            component={RouterLink} 
            to={'/'}
            noWrap
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              typography: { xs: 'h6', sm: 'h5', lg: 'h4' }
            }}
          >
            ВСЁ ПРО-100
          </Typography>
          <IconButton component={RouterLink} to={'/feedback'} variant="outlined" aria-label="feedback" sx={{ color: "#000", display: { xs: 'block', sm: 'none' } }}>
            <FeedbackIcon />
          </IconButton>
          <Button component={RouterLink} to={'/feedback'} variant="outlined" sx={{ color: "#000", border: "1px solid #000", display: { xs: 'none', sm: 'block' } }}>Обратная связь</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}