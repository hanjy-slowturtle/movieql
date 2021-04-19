let movies = [
    {
        id: 0,
        name: "I'm Legends",
        score: 80
    },
    {
        id: 1,
        name: "Iron man",
        score: 90
    },
    {
        id: 2,
        name: "Go home",
        score: 95
    },
    {
        id: 3,
        name: "Tazza",
        score: 77
    }
];

export const getMovies = () => movies;

export const getById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};