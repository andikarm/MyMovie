const $ = require("jquery");

import './movie-item.js';

class PopularMovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        $(".sc-popular-movie .element-title").removeClass("hidden");
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `<h3 class="placeholder">${message}</h3>`;
    }
}

customElements.define("popular-movie-list", PopularMovieList);