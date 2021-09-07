class MenuBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <ul class="menu-navigation">
                <li class="menu-item"><a href="#sc-popular-movie">Movies</a></li>
                <li class="menu-item"><a href="#sc-popular-tv">TV Series</a></li>
                <li class="menu-item"><a href="#sc-popular-artist">Artists</a></li>
            </ul>
        `;
    }
}
customElements.define("menu-bar", MenuBar);