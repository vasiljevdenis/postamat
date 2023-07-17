import { Dialog, Slide } from "@mui/material";
import { QrScanner } from "@yudiel/react-qr-scanner";
import * as React from "react";
import { observer } from "mobx-react-lite";
import homeState from "../store/homeState";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const QRCodeScanner = observer((status) => {

  const [store] = React.useState(homeState);

  const handleClose = () => {
    store.toggleModal();
  }
  const handleInput = (val) => {
    store.changeCodeInp(val);
    store.toggleModal();
  }

  return (
    <Dialog
      fullWidth
      open={store.open}
      onClose={handleClose}
      TransitionComponent={Transition}    
    >
      <QrScanner          
        onDecode={(result) => handleInput(result)}
        onError={(error) => console.log(error?.message)}
      />
    </Dialog>
  )
});

export default QRCodeScanner;