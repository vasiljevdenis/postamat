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
import MapPostamat from "../Components/MapPostamat";

const Home = observer(() => {

    const [store] = useState(homeState);

    function handleOpenModal(cur) {
        store.changeCurInp(cur);
        store.toggleModal();
    }

    const changeBoxCode = (e) => {
        const value = e.target.value;
        store.changeBoxCode(value);
    }

    const changeCodeInp = (e) => {
        const value = e.target.value;
        store.changeCodeInp(value);
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
                    '& .MuiTextField-root': { m: 1, maxWidth: '300px', width: '100%' },
                    '& .MuiButton-root': { m: 1, maxWidth: '300px', width: '100%' },
                }}
                noValidate
                autoComplete="off"
                pt={{ xs: 5, sm: 8 }}
                pb={{ xs: 5, sm: 8 }}
                mt={{ xs: 0, sm: 4 }}
                mb={{ xs: 6, sm: 4 }}
            >
                <Typography variant="h4" gutterBottom sx={{ typography: { xs: 'h5', sm: 'h4' } }}>
                    Для открытия ячейки заполните поля ниже
                </Typography>
                <div>
                    <FormControl sx={{ m: 1, maxWidth: '300px', width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="code-box">Введите код посылки</InputLabel>
                        <OutlinedInput
                            id="code-box"
                            type='text'
                            value={store.boxCodeVal}
                            onChange={changeBoxCode}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleOpenModal('box')}
                                        aria-label="qr scanner"
                                        edge="end"
                                    >
                                        <QrCodeScannerIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Введите код посылки"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, maxWidth: '300px', width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="code-postamat">Введите номер с постамата</InputLabel>
                        <OutlinedInput
                            id="code-postamat"
                            type='text'
                            value={store.codeInpVal}
                            onChange={changeCodeInp}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleOpenModal('code')}
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
                        disabled={store.btnDisabledVal}
                    >
                        Открыть ячейку
                    </Button>
                </div>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <MapPostamat />
                </Grid>
            </Box>
            <QRCodeScanner />
        </>
    );
});
export default Home;