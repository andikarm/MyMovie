class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .search-container {
                    display: flex;
                    position: relative;
                }
                
                .search-container > input {
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    width: 100%;
                    padding: 16px 24px;
                    border: 0;
                    border-radius: 50px;
                }
                
                .search-container > input::placeholder {
                    color: #a0a0a0;
                    font-weight: normal;
                }

                .search-container > input:focus {
                    outline: none;
                }

                #searchElementinput[type="search" i] {
                    padding: 1px 7px;
                }
                
                .search-container > button {
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;
                    width: 155px;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    // background: linear-gradient(109deg, rgba(37,149,251,1) 0%, rgba(26,101,238,1) 98%);
                    background: linear-gradient(to right, rgba(30,213,169, 1) 0%, rgba(1,180,228, 1) 100%);
                    color: white;
                    border: 0;
                    border-radius: 50px;
                }

                .search-banner {
                    width: 100%;
                }

                .search-banner {
                    padding: 40px 30px;
                }

                .search-title {
                    margin-bottom: 20px;
                }

                .search-title h2 {
                    font-size: 3em;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #fff;
                }

                .search-title h3 {
                    font-size: 1.3em;
                    font-weight: 600;
                    line-height: 1;
                    color: #fff;
                }

                @media screen and (min-width: 601px) {
                    .search-container > input {
                        padding: 16px 170px 16px 24px;
                    }

                    .search-container > button {
                        position: absolute;
                        top: 0;
                        right: -1px;
                        z-index: 2;
                    }
                }
                
                @media screen and (max-width: 600px) {
                    .search-container {
                        flex-direction: column;
                        position: static;
                    }
                
                    .search-container > input {
                        width: 100%;
                        margin-bottom: 12px;
                    }

                    .search-container > input::placeholder {
                        font-size: 12px;
                    }
                
                    .search-container > button {
                        width: 100%;
                    }
                }
            </style>
            <div class="search-banner">
                <div class=search-title>
                    <h2>Welcome.</h2>
                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div id="search-container" class="search-container">
                    <input id="searchElement" type="search" name="searchElement" placeholder="Search for a movie, tv show, person....">
                    <button id="searchButtonElement" type="submit">Search</button>
                </div>
            </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);