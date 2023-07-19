import { makeAutoObservable } from "mobx";

class homeState {

  openModal = false;
  btnDisabled = true;
  currentInp = '';
  boxCode = '';
  codeInput = '';

  constructor() {
    makeAutoObservable(this);
  }

  toggleModal() {   
    this.openModal = !this.openModal;
  }

  changeBoxCode(value) {   
    this.boxCode = value;
    if (this.boxCode.length > 0 && this.codeInput.length > 0) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
  }

  changeCodeInp(value) {   
    this.codeInput = value;
    if (this.boxCode.length > 0 && this.codeInput.length > 0) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
  }

  changeCurInp(value) {   
    this.currentInp = value;
  }


  get open() {
    return this.openModal;
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

}

export default new homeState();
