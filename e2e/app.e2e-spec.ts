import { DinoDrill1Page } from './app.po';

describe('dino-drill1 App', function() {
  let page: DinoDrill1Page;

  beforeEach(() => {
    page = new DinoDrill1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
