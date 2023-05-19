import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import QRCodeScanner from "../Components/QRCodeScanner";
import Carousel from "../Components/Carousel";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import homeState from "../store/homeState";

const Home = observer(() => {

    const [store] = useState(homeState);

    function handleOpenModal() {
        store.toggleModal();
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Carousel />
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
                    <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                        <InputLabel htmlFor="code-postamat">Введите номер с постамата</InputLabel>
                        <OutlinedInput
                            id="code-postamat"
                            type='text'
                            value={store.inpValue}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleOpenModal}
                                        aria-label="qr scanner"
                                        edge="end"
                                    >
                                        <QrCodeScannerIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Введите номер с постамата"
                        />
                    </FormControl>
                </div>
                <div>
                    <Button
                        disabled
                        size="large"
                        variant="outlined"
                        startIcon={<CloseIcon />}
                    >
                        Закрыта
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
            <QRCodeScanner />
        </>
    );
});
export default Home;