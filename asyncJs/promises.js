const users = require('./users.json');
const movies = require('./movies.json');
const reviews = require('./reviews.json');

const getMovie = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movie = movies.find((movie) => movie.id === id);
            if (movie) {
                resolve(movie);
            } else {
                reject("Not found");
            }
        }, 1000);
    });
};

const getReview = (movieId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const review = reviews.find((review) => review.movie_id === movieId);
            if (review) {
                resolve(review);
            } else {
                reject("no reviews");
            }
        }, 1000);
    });
};

const getUser = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.name === name);
            if (user) {
                resolve(user);
            } else {
                reject("User not found");
            }
        }, 1000);
    })
};


(
    async () => {
        try {
            const movie = getMovie(5);
            const review = await getReview(movie.id);
            const user = await getUser(review.reviewer);
        } catch (err) {
            console.log(err)
        };
    }
)();