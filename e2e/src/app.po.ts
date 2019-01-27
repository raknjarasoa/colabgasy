import { Selector } from 'testcafe';
// import { AngularSelector } from 'testcafe-angular-selectors';

export default class AppPage {
  regionSelect: Selector;
  regionOption: Selector;
  textInput: Selector;
  button: Selector;
  total: Selector;

  constructor() {
    this.regionSelect = Selector('select');
    this.regionOption = this.regionSelect.find('option');
    this.textInput = Selector(`input`);
    this.total = Selector(`#total`);
    this.button = Selector(`button`);
  }

  async typeTextName(t: TestController, name: string) {
    await t.typeText(this.textInput, name);
  }
}
