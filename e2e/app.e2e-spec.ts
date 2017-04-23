import { AppMPage } from './app.po';

describe('app-m App', function() {
  let page: AppMPage;

  beforeEach(() => {
    page = new AppMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
