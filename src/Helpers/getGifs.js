export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en&api_key=Z079Z6dZ78w8wEj1mIMS0CisLuASCXs4`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(gif => {
        return{
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });
    return gifs;
}
