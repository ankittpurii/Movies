import { executeGetRequest } from "../utils/FetchUtils";

export const getMovies = async (page) => {
    try {
        const apiResponse = await executeGetRequest(`https://api.themoviedb.org/3/movie/popular?api_key=b33f3da863e7ca61dd812b93f039bb1f&amp;language=en-US&page=${page}`);
        return apiResponse
    } catch (err) {
        return { error: err };
    }
};