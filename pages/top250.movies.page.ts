import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page'

export class Top250MoviesPage extends BasePage {
  readonly page: Page;
  readonly firstMovieInTheList: Locator

  constructor(page: Page) {
    super()
    this.page = page;
    this.firstMovieInTheList = page.getByRole('group').first();
  }
}