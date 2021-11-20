import { DonateForm } from "./donate-form";

export default class App {
  #formBlock
  constructor() {
    this.#formBlock = new DonateForm();
  }
  run() {
    const formBlockHTML = this.#formBlock.render();
  }
}