import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoneIcon from '@mui/icons-material/Done';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export default function Home() {

    const settings = {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        variableWidth: true,
        variableHeight: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Slider {...settings}>
                        <div>
                            <img src="https://cdn.stocksnap.io/img-thumbs/960w/palm-leaves_KMOJIUMD7C.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.stocksnap.io/img-thumbs/960w/spring-flowers_TQCY3FH54E.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.stocksnap.io/img-thumbs/960w/white-flowers_SKA4Y6LWCY.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.stocksnap.io/img-thumbs/960w/yellow-flowers_EHHEBY5VZ3.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.stocksnap.io/img-thumbs/960w/yellow-flower_KOXTBZIMXA.jpg" alt="" />
                        </div>
                    </Slider>
                </Grid>
            </Box>
            <Box
                component="form"
                sx={{
                    textAlign: 'center',
                    background: '#f2f3f8',
                    '& .MuiTextField-root': { m: 1, width: '45ch' },
                    '& .MuiButton-root': { m: 1, width: '43ch' },
                }}
                noValidate
                autoComplete="off"
                pt={{ xs: 5, sm: 8 }}
                pb={{ xs: 5, sm: 8 }}
                mt={{ xs: 6, sm: 4 }}
                mb={{ xs: 6, sm: 4 }}
            >
                <Typography variant="h4" gutterBottom>
                    Для открытия ячейки заполните поля ниже
                </Typography>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Введите код посылки"
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Введите номер с постамата"
                    />
                </div>
                <div>
                    <Button
                        disabled
                        size="large"
                        variant="outlined"
                        startIcon={<DoneIcon />}
                    >
                        Открыта
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                    >
                        Открыть ячейку
                    </Button>
                </div>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <YMaps query={{ lang: 'en_RU', apikey: '64dda054-588c-4b0c-8fd5-36aa303a137a' }}>
                        <Map
                        style={{ width: '100%', height: '500px' }}
                            defaultState={{
                                center: [55.75, 37.61],
                                zoom: 9,
                                controls: ["zoomControl", "fullscreenControl"],
                            }}
                            modules={["control.ZoomControl", "control.FullscreenControl"]}
                        >
                            <Placemark defaultGeometry={[55.75, 37.61]} />
                        </Map>
                    </YMaps>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', height: '300px', background: '#2d2d2d' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>                    
                </Grid>
            </Box>
        </>
    );
}