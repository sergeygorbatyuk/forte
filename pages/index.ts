import { MainMenuPage } from './main.menu.page';
import { MovieDetailsPage } from './movie.details.page';
import { Top250MoviesPage } from './top250.movies.page';
import { MainPage } from './main.page';

function pageProvider(page) {
  return {
      mainMenuPage: new MainMenuPage(page),
      movieDetailsPage: new MovieDetailsPage(page),
      top250MoviesPage: new Top250MoviesPage(page),
      mainPage:new MainPage(page)
  }
}

export { pageProvider };
