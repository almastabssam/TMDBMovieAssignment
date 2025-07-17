import request from "../utils/helpers";

function getLatestMovies(pageNo) {
    return request({
        url: '/movie/upcoming?page=' + pageNo,
        method: 'GET',
    });
}
function getPopularMovies() {
    return request({
        url: '/movie/popular',
        method: 'GET',
    });
}
function getMovieDetail(id) {
    return request({
        url: '/movie/' + id,
        method: 'GET',
    });
}
function getMovieVideos(id) {
    return request({
        url: `/movie/${id}/videos`,
        method: 'GET',
    });
}

function getMovieImages(id) {
    return request({
        url: `/movie/${id}/images`,
        method: 'GET',
    });
}
let APIService = {
    getLatestMovies,
    getPopularMovies,
    getMovieDetail,
    getMovieVideos,
    getMovieImages,
};

export default APIService;
