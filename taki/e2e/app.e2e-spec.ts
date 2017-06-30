import { TakiPage } from './app.po';

describe('taki App', () => {
  let page: TakiPage;

  beforeEach(() => {
    page = new TakiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
