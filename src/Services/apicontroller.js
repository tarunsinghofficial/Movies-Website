
const api_key = '2dc9a9ee49a9191b5b1a629fa423fe71';
const base_url = "https://api.themoviedb.org/3"

async function makeGetRequest(endpoint) {
    const requestConfig = { method: 'get' }
    var response = await fetch(endpoint, requestConfig)
    return response;
}

export function getVideos(movie_id = 8392) {
    const url = `${base_url}/movie/${movie_id}/videos?api_key=${api_key}`
    var result = fetch(url, { method: 'get' })
        .then(response => response.json())
        .catch(error => console.error(error))
    return result;
}

export async function getDetails(movie_id = 8392) {
    try {
        const endpoint = `${base_url}/movie/${movie_id}?api_key=${api_key}`;
        return await makeGetRequest(endpoint)
    } catch (error) { console.warn(error) }
}
export async function getManyDetails(movies_ids) {
    try {
        var responses;
        if (movies_ids.length > 1) {
            responses = await Promise.all(movies_ids.map(async movie => {
                const result = await getDetails(movie.id)
                return result
            }))
        } else {
            const result = await getDetails(movies_ids.id)

            return result
        }
        return responses
    } catch (err) { console.log(err) }
}

export async function getUpcomming() {
    try {
        const endpoint = `${base_url}movie/upcoming?api_key=${api_key}`;
        return await makeGetRequest(endpoint)
    } catch (error) { console.warn(error) }
}

export async function getCredits(movie_id = 8392) {
    try {
        const endpoint = `${base_url}/movie/${movie_id}/credits?api_key=${api_key}`
        return await makeGetRequest(endpoint)
    } catch (error) { console.warn(error) }
}

export async function getTrending(time_window = 'week', type = 'movie') {
    try {
        const url = `${base_url}/trending/${type}/${time_window}?api_key=${api_key}`
        return await makeGetRequest(url)
    } catch (error) { console.warn(error) }
}

export async function findMovie(searchQuery) {
    try {
        const url = `${base_url}/search/movie?query=${searchQuery}&api_key=${api_key}`
        return await makeGetRequest(url)
    } catch (error) { console.warn(error) }
}