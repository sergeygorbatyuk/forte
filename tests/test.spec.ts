import { test, expect } from '@playwright/test';
import { pageProvider } from '../pages';

test.describe('IMDb tests', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test('Test Case 1', async ({ page }) => {
    const { mainPage, movieDetailsPage } = pageProvider(page);
    const searchTitle = 'Inception'
    await mainPage.sendKeys({ searchField: searchTitle });
    await mainPage.click({ searchResultOption: null });
    const { movieTitle }: any = await movieDetailsPage.getText({ movieTitle: null });
    expect(movieTitle).toEqual(searchTitle);
  });

  test('Test Case 2', async ({ page }) => {
    const { mainPage, movieDetailsPage, mainMenuPage, top250MoviesPage } = pageProvider(page);
    await mainPage.click({ menuButton: null });
    await mainMenuPage.click({ top250movies: null });
    await top250MoviesPage.click({ firstMovieInTheList: null });
    const { movieTitle, ratings, year }: any = await movieDetailsPage.isVisible({ movieTitle: null, ratings: null, year: null });
    expect(movieTitle).toEqual(true);
    expect(ratings).toEqual(true);
    expect(year).toEqual(true);
  });
});

