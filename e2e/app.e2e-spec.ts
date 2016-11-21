import { CodeMinePortfolioPage } from './app.po';

describe('code-mine-portfolio App', function() {
  let page: CodeMinePortfolioPage;

  beforeEach(() => {
    page = new CodeMinePortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
