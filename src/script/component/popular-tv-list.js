const $ = require("jquery");

import './tv-item.js';

class PopularTvList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        $(".sc-popular-tv .element-title").removeClass("hidden");
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const tvItemElement = document.createElement("tv-item");
            tvItemElement.movie = movie;
            this.appendChild(tvItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `<h3 class="placeholder">${message}</h3>`;
    }
}

customElements.define("popular-tv-list", PopularTvList);