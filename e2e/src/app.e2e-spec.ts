import { Selector } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';
import AppPage from './app.po';
// import { AppPage } from './app.po';

fixture(`Home page`)
  .page(`http://localhost:4200`)
  .beforeEach(async (t) => {
    await waitForAngular();
  });

const regionSelect = Selector('select');
const regionOption = regionSelect.find('option');
const appPage = new AppPage();

test(`Click filter button`, async (t) => {
  await t
    .click(regionSelect)
    .click(regionOption.withText('Europe'))
    .expect(regionSelect.value)
    .eql('Europe')

    .typeText(Selector(`input`), 'ma')
    .click(Selector(`button`))
    .expect(Selector(`#total`).textContent)
    .eql('30');
});

test.skip(`With page model`, async (t) => {
  await appPage.typeTextName(t, 'ma');
  await t.expect(appPage.total).eql('29');
});

test(`Fill input`, async (t) => {
  await appPage.typeTextName(t, 'ma');
  await t.expect(true).ok();
});
