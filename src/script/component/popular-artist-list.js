const $ = require("jquery");

import './artist-item.js';

class PopularArtistList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        $(".sc-popular-artist .element-title").removeClass("hidden");
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const artistItemElement = document.createElement("artist-item");
            artistItemElement.movie = movie;
            this.appendChild(artistItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `<h3 class="placeholder">${message}</h3>`;
    }
}

customElements.define("popular-artist-list", PopularArtistList);