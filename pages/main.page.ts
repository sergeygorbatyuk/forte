import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page'

export class MainPage extends BasePage {
  readonly page: Page;
  readonly searchField: Locator;
  readonly searchButton: Locator;
  readonly searchResultOption: Locator;
  readonly tocList: Locator;
  readonly menuButton: Locator;
  readonly top250movies: Locator;

  constructor(page: Page) {
    super()
    this.page = page;
    this.searchField = page.getByTestId('suggestion-search');
    this.searchButton = page.getByLabel('Submit Search');
    this.searchResultOption = page.getByTestId('search-result--const').first();
    this.menuButton = page.getByLabel('Open Navigation Drawer');
    this.top250movies = page.getByRole('link');
  }
}