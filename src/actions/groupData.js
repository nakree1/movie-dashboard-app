export default function groupData(data) {
    if (data.length === 0) return
    const movieResults = data.results.filter((item) => {return item.media_type === 'movie'})
    const tvResults = data.results.filter((item) => {return item.media_type === 'tv'})
    const personResults = data.results.filter((item) => {return item.media_type === 'person'})

    return {
        movieResults: movieResults,
        tvResults: tvResults,
        personResults: personResults,
        total_results: data.total_results,
        total_pages: data.total_pages,
        page: data.page
    }
}