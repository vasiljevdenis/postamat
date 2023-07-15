import { Box, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {

  return (
    <Box sx={{ background: '#2d2d2d', p: 3 }} className="footer">
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
              variant="h5"
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
              }}
            >
              ВСЁ ПРО-100
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="caption" sx={{ color: 'white' }}>
              {`© ${new Date().getFullYear()}  Все права защищены.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}