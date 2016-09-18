import { Angular2FinalPage } from './app.po';

describe('angular2-final App', function() {
  let page: Angular2FinalPage;

  beforeEach(() => {
    page = new Angular2FinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
