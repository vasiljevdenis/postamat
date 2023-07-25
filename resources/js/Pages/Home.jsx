import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
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
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Home = observer(() => {

    const [store] = useState(homeState);

    const [icon, setIcon] = useState(<CloseIcon />);
    const [success, setSuccess] = useState(true);
    const [cellStatus, setCellStatus] = useState('Закрыта');

    function handleOpenModal(cur) {
        store.changeCurInp(cur);
        store.toggleModal();
    }

    function toggleStatus() {
        store.toggleModalStatus();
    }

    const changeBoxCode = (e) => {
        const value = e.target.value;
        store.changeBoxCode(value);
    }

    const changeCodeInp = (e) => {
        const value = e.target.value;
        store.changeCodeInp(value);
    }

    const openButton = () => {
        axios.get(import.meta.env.VITE_APP_BASE_URL + `/controllers/postamats/checkpackage?courier_code=${store.boxCodeVal}`)
            .then(res => {
                let json = res.data;
                console.log(json);
                if (json.status) {
                    if (store.codeInpVal.length > 0) {
                        if (store.codeInpVal === json.postamat_id) {
                            store.changeCellStatus('Ячейка откроется в течении минуты');
                            store.changeTimerV('block');
                            store.changeTimer(true);
                            axios.get(import.meta.env.VITE_APP_BASE_URL + `/controllers/postamats/opencell?postamat_id=${json.postamat_id}&cell=${json.cell}`)
                                .then(res => {
                                    let result = res.data;
                                    console.log(result);                                    
                                })
                                .catch(err => {
                                    console.log(err);
                                })
                                .finally(() => {
                                });
                        } else {
                            store.changeCellStatus('Проверьте правильность введенных данных и повторите попытку');
                        }
                    } else {
                        store.changeCellStatus('Необходимо ввести код написанный на постамате. <br> <small>Код для домофона: ' + json.domofon_code + '</small>');
                    }
                } else {
                    store.changeCellStatus(json.message);
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
            });
    }

    const finalSatus = () => {
        store.changeCellStatus('Ячейка открыта');
        store.changeTimerV('none');
        store.changeTimer(false);
        store.toggleModalStatus();
        setIcon(<DoneIcon />);
        setSuccess(false);
        setCellStatus('Открыта');
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
                        disabled={success}
                        size="large"
                        variant="outlined"
                        startIcon={icon}
                    >
                        {cellStatus}
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        disabled={store.btnDisabledVal}
                        onClick={() => {
                            toggleStatus();
                            openButton();
                        }}
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
            <Dialog
                open={store.openModalStatus}
                onClose={toggleStatus}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {""}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '100%' }}>
                        <Typography dangerouslySetInnerHTML={{ __html: store.cellStatusVal }}></Typography>
                    </Box>
                    <Box sx={{ width: '100%' }} display={store.visibilityTimer}>
                        <CountdownCircleTimer
                            isPlaying={store.timerStatus}
                            duration={60}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[60, 40, 20, 0]}
                            size={120}
                            onComplete={finalSatus}
                        >
                            {({ remainingTime }) => remainingTime}
                        </CountdownCircleTimer>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={toggleStatus}>
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
});
export default Home;