const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "cd6e79d92b0abcb9330d6d6291b0e978";

class DataSource {

    static searchMovie(keyword) {
        return fetch(`${baseUrl}search/multi?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.errors) {
                    return Promise.reject(`Keyword is required`)
                } else if (Object.keys(responseJson.results).length === 0) {
                    return Promise.reject(`"${keyword}" not found in movies/tv shows/people. Try with other keywords.`);
                } else {
                    return Promise.resolve(responseJson.results);
                }
            })
    }

    static popularMovie() {
        return fetch(`${baseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
        `)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.errors) {
                    return Promise.reject(`is not found`);
                } else {
                    return Promise.resolve(responseJson.results);
                }
            })
    }

    static popularTv() {
        return fetch(`${baseUrl}discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
        `)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.errors) {
                    return Promise.reject(`is not found`);
                } else {
                    return Promise.resolve(responseJson.results);
                }
            })
    }

    static popularArtist() {
        return fetch(`${baseUrl}person/popular?api_key=${apiKey}&language=en-US&page=1
        `)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.errors) {
                    return Promise.reject(`is not found`);
                } else {
                    return Promise.resolve(responseJson.results);
                }
            })
    }
}
export default DataSource;