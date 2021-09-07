class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: flex;
                    width: auto;
                    color: white;
                }

                h2 a {
                    color: #fff;
                    text-decoration: none;
                }
            </style>
            <h2><a href="/">My Movie</a></h2>`;
    }
}

customElements.define("app-bar", AppBar);