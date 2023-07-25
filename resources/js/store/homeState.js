import { makeAutoObservable } from "mobx";

class homeState {

  openModal = false;
  btnDisabled = true;
  timer = false;
  timerVsibility = 'none';
  currentInp = '';
  boxCode = '';
  codeInput = '';
  cellStatus = 'Проверяем код посылки';
  openModalStatus = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleModal() {   
    this.openModal = !this.openModal;
  }

  toggleModalStatus() {   
    this.openModalStatus = !this.openModalStatus;
  }

  changeBoxCode(value) {   
    this.boxCode = value;
    if (this.boxCode.length > 0) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
  }

  changeCodeInp(value) {   
    this.codeInput = value;
  }

  changeCurInp(value) {   
    this.currentInp = value;
  }

  changeCellStatus(value) {   
    this.cellStatus = value;
  }

  changeTimer(value) {   
    this.timer = value;
  }

  changeTimerV(value) {   
    this.timerVsibility = value;
  }


  get open() {
    return this.openModal;
  }

  get openStatus() {
    return this.openModalStatus;
  }

  get btnDisabledVal() {
    return this.btnDisabled;
  }

  get boxCodeVal() {
    return this.boxCode;
  }

  get codeInpVal() {
    return this.codeInput;
  }

  get curInpVal() {
    return this.currentInp;
  }

  get cellStatusVal() {
    return this.cellStatus;
  }

  get timerStatus() {
    return this.timer;
  }

  get visibilityTimer() {
    return this.timerVsibility;
  }

}

export default new homeState();
