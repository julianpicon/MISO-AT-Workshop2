import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  heroNameToFind(hero: string) {
    element(by.id('search-box')).sendKeys(hero);
    element(by.css('.search-result')).click();
    return element.all(by.tagName('h2'));
  }

  deleteHero(index: number) {
    element(by.tagName('my-heroes')).all(by.css('.delete')).get(index).click()
  }

  updateHeroName(newHeroName: string) {
    element(by.tagName('input')).clear()
    element(by.tagName('input')).sendKeys(newHeroName);
    element.all(by.tagName('button')).last().click();
  }

  showHeroFromDashboard(index: number){
    element.all(by.css('.col-1-4')).get(index).click();
    return element.all(by.tagName('h2'));
  }

  showHeroFromHeroesPage(index: number){
    element(by.tagName('my-heroes')).all(by.tagName('li')).get(index).click();
    element(by.buttonText('View Details')).click();
    return element.all(by.tagName('h2'));
  }

}
