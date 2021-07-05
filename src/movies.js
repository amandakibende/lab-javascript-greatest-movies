// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");


 function getAllDirectors(item) { 
  return item.map(getMoviesDirector => {getMoviesDirector.director ? "true" : "false"})
}

console.log(getAllDirectors);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(film) 
return film.filter (movies => { if ( movies.director !== `Spielberg`)
return 0;
if (movies.genre === `drama`)
return 1 ; 
}
 
)

console.log(howManyMovies);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals 

// I accumulate the value of score
// I take the total and divided by the lenght to obtain the average number.

function scoresAverage(getAverage){return getAverage.reduce((acc, score)=> acc + score)/getAverage.score.length}

console.log(Math.round(scoresAverage));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaAvg) {return dramaAvg.}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
