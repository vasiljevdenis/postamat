import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
                <MenuItem onClick={handleClose}>О нас</MenuItem>
                <MenuItem onClick={handleClose}>Реклама на постаматах</MenuItem>
                <MenuItem onClick={handleClose}>Франшиза</MenuItem>
                <MenuItem onClick={handleClose}>Сотрудничество</MenuItem>
                <MenuItem onClick={handleClose}>Постамат в подъезд</MenuItem>
                <MenuItem onClick={handleClose}>Обратная связь</MenuItem>
                <MenuItem onClick={handleClose}>Постаматы на карте</MenuItem>
                <MenuItem onClick={handleClose}>Поддержать развитие проекта</MenuItem>
              </Menu>
          <ThumbUpOutlinedIcon style={{
            border: '1px solid #000',
            borderRadius: '50%',
            padding: '.5rem',
            marginRight: '1rem'
          }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ВСЁ ПРО-100
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}