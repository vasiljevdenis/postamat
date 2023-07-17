import { Box, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {

  return (
    <Box sx={{ background: '#2d2d2d', p: 3 }} className="footer">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <p style={{ textAlign: 'center' }}>
              <a href="/about">О нас</a>
              <a href="/ads">Реклама на постаматах</a>
              <a href="/franchise">Франшиза</a>
              <a href="/patrnership">Сотрудничество</a>
              <a href="/entrance">Постамат в подъезд</a>
              <a href="/feedback">Обратная связь</a>
              <a href="/map">Постаматы на карте</a>
              <a href="/donat">Поддержать развитие проекта</a>
            </p>
          </Grid>
          <Grid item xs={6} sx={{ display: { xs: 'block', lg: 'none' } }}>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li><a href="/about">О нас</a></li>
              <li><a href="/ads">Реклама на постаматах</a></li>
              <li><a href="/franchise">Франшиза</a></li>
              <li><a href="/patrnership">Сотрудничество</a></li>
            </ul>
          </Grid>
          <Grid item xs={6} sx={{ display: { xs: 'block', lg: 'none' } }}>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li><a href="/entrance">Постамат в подъезд</a></li>
              <li><a href="/feedback">Обратная связь</a></li>
              <li><a href="/map">Постаматы на карте</a></li>
              <li><a href="/donat">Поддержать развитие проекта</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <ThumbUpOutlinedIcon style={{
              border: '1px solid #fff',
              borderRadius: '50%',
              padding: '.5rem',
              marginRight: '1rem',
              color: 'white',
              verticalAlign: 'bottom'
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
                color: 'white',
                textDecoration: 'none',
                typography: { xs: 'h6', sm: 'h5', lg: 'h4' }
              }}
            >
              ВСЁ ПРО-100
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography color="textSecondary" variant="caption" sx={{ color: 'white' }}>
              {`© ${new Date().getFullYear()}  Все права защищены.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}