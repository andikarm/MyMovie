const $ = require("jquery");

import '../component/movie-list.js';
import '../component/popular-movie-list.js';
import '../component/popular-tv-list.js';
import '../component/popular-artist-list';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const popularMovieListElement = document.querySelector("popular-movie-list");
    const PopularTvListElement = document.querySelector("popular-tv-list");
    const PopularArtistListElement = document.querySelector("popular-artist-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result.splice(0, 10));
        } catch (message) {
            fallbackResult(message)
        }
    };

    const getPopularMovie = async () => {
        try {
            const resultPopularMovie = await DataSource.popularMovie();
            renderResultPopularMovie(resultPopularMovie.splice(0, 10));
        } catch (message) {
            fallbackResultPopularMovie(message)
        }
    };

    const getPopularTv = async () => {
        try {
            const resultPopularTv = await DataSource.popularTv();
            renderResultPopularTv(resultPopularTv.splice(0, 10));
        } catch (message) {
            fallbackResultPopularTv(message)
        }
    };

    const getPopularArtist = async () => {
        try {
            const resultPopularArtist = await DataSource.popularArtist();
            renderResultPopularArtist(resultPopularArtist.splice(0, 10));
        } catch (message) {
            fallbackResultPopularArtist(message)
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const renderResultPopularMovie = results => {
        popularMovieListElement.movies = results;
    };

    const renderResultPopularTv = results => {
        PopularTvListElement.movies = results;
    };

    const renderResultPopularArtist = results => {
        PopularArtistListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    const fallbackResultPopularMovie = message => {
        popularMovieListElement.renderError(message);
    };

    const fallbackResultPopularTv = message => {
        popularTvListElement.renderError(message);
    };

    const fallbackResultPopularArtist = message => {
        popularArtistListElement.renderError(message);
    };

    const jqueryInit = () => {
        $('#searchButtonElement').keypress(function (e) {
            var key = e.which;
            if (key == 13) {
                $('input[name = searchElement]').click();
                return false;
            }
        });

        function preventScroll() {
            $('html').toggleClass('prevent-scroll');
        }

        $(".btn-toggle-state").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            var idtargetParent = $this.attr("data-parenttarget");
            var stateScroll = $this.attr("data-scrollstate");
            var targetParent = $("#" + idtargetParent);

            if (!targetParent.hasClass("toggle-onactive")) {
                $(".toggle-onactive").removeClass("toggle-onactive");
            }

            targetParent.toggleClass("toggle-onactive");

            if (stateScroll === "yes") {
                preventScroll();
            }
        });

        $(document).on("click", function (e) {
            var parentToggle = $(e.target).parents();
            if (!parentToggle.is(".site-header", ".toggle-onactive")) {
                $(".site-header.toggle-onactive").removeClass("toggle-onactive");
                $('.prevent-scroll').removeClass('prevent-scroll');
            }
        });

        $("#site-header .menu-item a").on("click", function () {
            $("#site-header.toggle-onactive").removeClass("toggle-onactive");
        });
    }

    searchElement.clickEvent = onButtonSearchClicked;

    getPopularMovie();
    getPopularTv();
    getPopularArtist();
    jqueryInit();
};

export default main;