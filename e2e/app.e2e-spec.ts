import { MovieTicketPage } from './app.po';

describe('movie-ticket App', () => {
  let page: MovieTicketPage;

  beforeEach(() => {
    page = new MovieTicketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
