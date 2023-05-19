import { makeAutoObservable } from "mobx";

class homeState {

  openModal = false;
  codeInput = '';

  constructor() {
    makeAutoObservable(this);
  }

  toggleModal() {   
    this.openModal = !this.openModal;
  }

  changeCodeInp(value) {   
    this.codeInput = value;
  }

  get open() {
    return this.openModal;
  }

  get inpValue() {
    return this.codeInput;
  }
}

export default new homeState();
