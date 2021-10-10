" use strict";

const numberOfFilms = +prompt('Сколько фильмов уже посмотрел', '');

const personalMoviesD8 = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из просмотренных просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из просмотренных просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMoviesD8.movies[a] = b;
personalMoviesD8.movies[c] = d;

console.log(personalMoviesD8);