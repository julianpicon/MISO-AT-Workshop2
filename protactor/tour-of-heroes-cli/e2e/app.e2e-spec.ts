import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('should search hero', () => {
    page.navigateTo();
    const heroFound = page.heroNameToFind('Mr. Nice');
    expect(heroFound.count()).toBe(1);
  });

  it('should navigate a heroe from Dashboard', () => {
    page.navigateTo();
    const heroFound = page.showHeroFromDashboard(1);
    expect(heroFound.count()).toBe(1);
    expect(heroFound.first().getText()).toBe('Narco details!');
  });

  it('should navigate to heroes from Heroes list', () => {
    page.navigateToHeroes();
    const heroFound = page.showHeroFromHeroesPage(1);
    expect(heroFound.count()).toBe(1);
    expect(heroFound.first().getText()).toBe('Mr. Nice details!');
  });

  it('should navigate to heroes from search control', () => {
    page.navigateTo();
    const heroFound = page.heroNameToFind('Bombasto');
    expect(heroFound.count()).toBe(1);
    expect(heroFound.first().getText()).toBe('Bombasto details!');
  });

});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should delete a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHero(1);
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('should edit hero', () => {
    page.navigateTo();
    const heroFound = page.heroNameToFind('Tornado');
    page.updateHeroName('Tornado v.2');
    const heroFoundUpd = page.heroNameToFind('Tornado v.2');
    expect(heroFound.count()).toBe(1);
    expect(heroFound.first().getText()).toBe('Tornado v.2 details!');
  });

});
