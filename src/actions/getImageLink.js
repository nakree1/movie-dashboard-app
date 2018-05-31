export default function getImageLink(configApi,file_path, type, size = 'original') {
    // console.log(`getImageLink arguments: ${configApi},${file_path},${type}, ${size}`)
    if (!(file_path || configApi.images || type)) {
        // console.log('first if')
        return null
    }

    const {base_url, poster_sizes, backdrop_sizes} = configApi.images
    let arr;

    switch (type) {
        case 'poster':
            arr = poster_sizes
            break

        case 'backdrop':
            arr = backdrop_sizes
            break
    }

    if (arr && !arr.includes(size)) {
        // console.log('second if')
        return null
    }
    return `${base_url}/${size}${file_path}`
}