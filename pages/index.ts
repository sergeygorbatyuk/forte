import { MainMenuPage } from './main.menu.page';
import { MovieDetailsPage } from './movie.details.page';
import { Top250MoviesPage } from './top250.movies.page';
import { MainPage } from './main.page';
import { initSingleton } from './init.singleton';

function pageProvider(page) {
  return {
      mainMenuPage: initSingleton(MainMenuPage, page),
      movieDetailsPage: initSingleton(MovieDetailsPage, page),
      top250MoviesPage: initSingleton(Top250MoviesPage, page),
      mainPage: initSingleton(MainPage, page)
  }
}

export { pageProvider };
