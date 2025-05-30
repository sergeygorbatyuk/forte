import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page'

export class MovieDetailsPage extends BasePage {
  readonly page: Page;
  readonly movieTitle: Locator;
  readonly ratings: Locator;
  readonly year: Locator;

  constructor(page: Page) {
    super()
    this.page = page;
    this.movieTitle = page.getByTestId('hero__pageTitle');
    this.ratings = page.getByRole('link', { name: 'View User Ratings' });
    this.year = page.getByTestId('hero-parent').getByRole('link').nth(6);
  }
}