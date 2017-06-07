import { ConcessionariPage } from './app.po';

describe('concessionari App', () => {
  let page: ConcessionariPage;

  beforeEach(() => {
    page = new ConcessionariPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
