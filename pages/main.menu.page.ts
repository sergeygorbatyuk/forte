import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page'

export class MainMenuPage extends BasePage {
  readonly page: Page;
  readonly top250movies: Locator;

  constructor(page: Page) {
    super()
    this.page = page;
    this.top250movies = page.getByText('Top 250 Movies');
  }
}