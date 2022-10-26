
import axios from 'axios';
const apikey = '2E5L3s0tf5Ofc3VqnMJExMQyibIFUDpW'

export async function GetGifs(keyword) {
    const apiurl = 'https://api.giphy.com/v1/gifs/search?api_key=' + apikey + '&q=' + keyword + '&limit=12&offset=0&rating=G&lang=it'
    return await fetch(apiurl)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
}

export async function GetAllFavouritesGifs() {
    try {
        const url = 'http://localhost:8080/api/favouriteGifs/findAll'
        return await axios.get(url).then((result) => { return result.data })

    } catch (error) {
        const response = await error
        return response;
    }
}

export async function DeleteFavouritesGifs(id) {
    try {
        const url = 'http://localhost:8080/api/favouriteGifs/' + id
        return await axios.delete(url).then((result) => { return result.data })

    } catch (error) {
        const response = await error
        return response;
    }
}


export async function InsertFavouritesGifs(value) {
    try {
        const url = 'http://localhost:8080/api/favouriteGifs/'

        return await axios.post(url, value).then((result) => { return result.data })

    } catch (error) {
        const response = await error
        return response;
    }
}