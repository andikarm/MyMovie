const $ = require("jquery");

import './movie-item.js';

class MovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        $(".sc-search-result .element-title").removeClass("hidden");
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }

    renderError(message) {
        $(".sc-search-result .element-title").removeClass("hidden");
        this.innerHTML = `<h3 class="placeholder">${message}</h3>`;
    }
}

customElements.define("movie-list", MovieList);