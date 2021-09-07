class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        let poster = "";
        let title = "";
        let date = "";
        let type = "";
        if (this._movie.media_type == "movie") {
            if (this._movie.poster_path == null) {
                poster = `<img class="poster-movie" src="https://dummyimage.com/200x300/ccc/fff.jpg&text=No+image" alt="Poster">`;
            } else {
                poster = `<img class="poster-movie" src="https://image.tmdb.org/t/p/original${this._movie.poster_path}" alt="Poster">`;
            }
            title = `${this._movie.title}`;
            date = `${this._movie.release_date}`;
            type = `${this._movie.media_type}`;
        } else if (this._movie.media_type == "tv" || this._movie.media_type == "person") {
            if (this._movie.profile_path == null) {
                poster = `<img class="poster-movie" src="https://dummyimage.com/200x300/ccc/fff.jpg&text=No+image" alt="Poster">`;
            } else {
                poster = `<img class="poster-movie" src="https://image.tmdb.org/t/p/original${this._movie.profile_path}" alt="Poster">`;
            }
            title = `${this._movie.name}`;
            type = `${this._movie.media_type}`;
        } else {
            if (this._movie.poster_path == null) {
                poster = `<img class="poster-movie" src="https://dummyimage.com/200x300/ccc/fff.jpg&text=No+image" alt="Poster">`;
            } else {
                poster = `<img class="poster-movie" src="https://image.tmdb.org/t/p/original${this._movie.poster_path}" alt="Poster">`;
            }
            title = `${this._movie.title}`;
            date = `${this._movie.release_date}`;
            type = `movie`;
        }

        this.innerHTML = `
            <figure class="poster-item">
                ${poster}
                <span>${type}</span>
            </figure>
            <div class="movie-info">
                <h2>${title}</h2>
                <p>${date}</p>
            </div>`;
    }
}

customElements.define("movie-item", MovieItem);