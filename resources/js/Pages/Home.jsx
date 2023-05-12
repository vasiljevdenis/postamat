import { Box, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    );
}